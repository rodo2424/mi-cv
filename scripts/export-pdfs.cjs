'use strict';
const {chromium}=require('playwright');
const path=require('node:path');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CV_CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
 try{
  const page=await browser.newPage();
  const baseUrl=process.env.CV_BASE_URL||'http://127.0.0.1:8001';
  const targets=process.argv.includes('--letters')?[['postulacion.html','carta']]:[['cv.html','cv'],['postulacion.html','carta']];
  for(const [file,prefix] of targets){
   await page.goto(`${baseUrl}/${file}`);
   for(const lang of ['es','en','pt']){
    if(await page.locator('html').getAttribute('lang')!==lang)await page.locator(`[data-language=${lang}]`).click();
    const filename=`${prefix}-${lang}.pdf`;
    await page.pdf({path:path.join(__dirname,'..',filename),format:'A4',printBackground:true});
    const link=prefix==='cv'?'#download-pdf':'#download-letter';
    assert.equal(await page.locator(link).getAttribute('href'),filename);
    const response=await page.request.get(`${baseUrl}/${filename}`);
    assert.equal(response.status(),200);
    assert.match(response.headers()['content-type'],/pdf/);
   }
  }
  console.log('PASS: PDFs generated and served in each selected language');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
