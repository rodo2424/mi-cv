'use strict';
const languageOrder=['es','en','pt'];
let language='es';
try { const saved=localStorage.getItem('cv-language'); if(languageOrder.includes(saved)) language=saved; } catch {}
let filter='all', skill=0, toastTimer, printState;
function el(tag,text,className){const node=document.createElement(tag); if(text!==undefined) node.textContent=text; if(className) node.className=className; return node;}
function notify(message){clearTimeout(toastTimer);document.getElementById('status').textContent=message;toastTimer=setTimeout(()=>{document.getElementById('status').textContent='';},3500);}
function filterRoles(){
 let count=0;
 document.querySelectorAll('.role').forEach(node=>{
  const index=Number(node.dataset.roleIndex);
  node.hidden=filter!=='all'&&!categories[index].includes(filter);
  if(!node.hidden)count++;
 });
 document.querySelectorAll('.chapter').forEach(node=>{node.hidden=![...node.querySelectorAll('.role')].some(role=>!role.hidden);});
 document.getElementById('result-count').textContent=`${count} ${locales[language].count}`;
}
function renderSkill(){const t=locales[language],box=document.getElementById('skill-detail');box.replaceChildren(el('h3',t.skillNames[skill]),el('p',t.skillText[skill]));document.querySelectorAll('#skill-buttons button').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===skill)));}
function render(){
 const t=locales[language];document.documentElement.lang=language;document.title=`Rodrigo Alejandro López Flores | ${t.profession}`;document.querySelector('meta[name=description]').content=t.intro;
 document.querySelectorAll('[data-key]').forEach(node=>{node.textContent=t[node.dataset.key];});
 document.getElementById('navigation').setAttribute('aria-label',t.nav);document.getElementById('filters').setAttribute('aria-label',t.filterLabel);document.getElementById('skill-buttons').setAttribute('aria-label',t.skillLabel);
 const languageButton=document.getElementById('language');
 const languageLabels={es:'Español',en:'English',pt:'Português'};
 const editionLabels={es:'Edición',en:'Edition',pt:'Edição'};
 document.getElementById('language-name').textContent=editionLabels[language];
 languageButton.style.setProperty('--language-index',languageOrder.indexOf(language));
 languageButton.querySelectorAll('[data-language]').forEach(node=>node.classList.toggle('is-current',node.dataset.language===language));
 languageButton.setAttribute('aria-label',`${languageLabels[language]}. ${t.next}`);
 languageButton.title=`${languageLabels[language]} · ${t.next}`;
 const filters=document.getElementById('filters');filters.replaceChildren();['all','data','operations'].forEach((key,i)=>{const b=el('button',t.filters[i]);b.type='button';b.setAttribute('aria-pressed',String(filter===key));b.addEventListener('click',()=>{filter=key;filters.querySelectorAll('button').forEach((n,j)=>n.setAttribute('aria-pressed',String(i===j)));filterRoles();});filters.append(b);});
 const contributions=document.getElementById('contributions');
 contributions.replaceChildren();
 t.contributions.forEach(([title,text],index)=>{
  const item=el('article',undefined,'contribution');
  item.append(el('span',String(index+1).padStart(2,'0'),'contribution-number'),el('h3',title),el('p',text));
  contributions.append(item);
 });
 const timeline=document.getElementById('timeline');
 timeline.setAttribute('aria-label',t.timelineLabel);
 timeline.replaceChildren();
 const roles=document.getElementById('roles');
 roles.replaceChildren();
 t.chapters.forEach((chapter,chapterIndex)=>{
  const chapterId=`chapter-${chapterIndex+1}`;
  const milestone=el('li',undefined,'milestone');
  const link=el('a');
  link.href=`#${chapterId}`;
  link.append(el('span',chapter[0],'milestone-date'),el('strong',chapter[1]),el('span',chapter[2],'milestone-focus'));
  link.addEventListener('click',()=>{
   filter='all';
   filters.querySelectorAll('button').forEach((button,index)=>button.setAttribute('aria-pressed',String(index===0)));
   filterRoles();
   document.getElementById(chapterId).focus({preventScroll:true});
  });
  milestone.append(link);
  timeline.append(milestone);
  const section=el('div',undefined,`chapter${chapterIndex===3?' chapter-current':''}`);
  section.id=chapterId;
  section.tabIndex=-1;
  const headingId=`${chapterId}-title`;
  section.setAttribute('role','region');
  section.setAttribute('aria-labelledby',headingId);
  const heading=el('div',undefined,'chapter-heading');
  const marker=el('span',String(chapterIndex+1).padStart(2,'0'),'chapter-number');
  marker.setAttribute('aria-hidden','true');
  const headingText=el('div');
  headingText.append(el('p',`${t.chapterLabel} ${chapterIndex+1} · ${chapter[0]}`,'eyebrow'));
  const title=el('h3',chapter[1]);
  title.id=headingId;
  headingText.append(title);
  heading.append(marker,headingText);
  section.append(heading,el('p',chapter[3],'chapter-narrative'));
  chapterRoles[chapterIndex].forEach(i=>{
   const r=t.roles[i];
   const article=el('article',undefined,`role${i===0?' role-current':''}`);
   article.dataset.roleIndex=i;
   const meta=el('div',undefined,'role-meta');
   meta.append(el('strong',companies[i]),el('span',t.dates[i]),el('div',i===0?'Santa Cruz, Bolivia':i===5?t.usa:'La Paz, Bolivia'));
   const body=el('div',undefined,'role-body');
   body.append(el('h4',r[0]),el('p',r[1],'role-summary'));
   const list=el('ul',undefined,'responsibilities');
   r[2].forEach(text=>list.append(el('li',text)));
   body.append(list);
   article.append(meta,body);
   section.append(article);
  });
  roles.append(section);
 });
 filterRoles();
 const projectCards=document.getElementById('project-cards');
 projectCards.replaceChildren();
 t.projects.forEach(([date,title,text,tags])=>{
  const card=el('article',undefined,'project-card');
  card.append(el('p',date,'eyebrow'),el('h3',title),el('p',text),el('small',tags));
  projectCards.append(card);
 });
 const certificates=document.getElementById('certificates');
 certificates.replaceChildren();
 t.certifications.forEach(([title,issuer,date])=>{
  const item=el('li');item.append(el('strong',title),el('span',`${issuer} · ${date}`));certificates.append(item);
 });
 const buttons=document.getElementById('skill-buttons');buttons.replaceChildren();t.skillNames.forEach((name,i)=>{const b=el('button',name);b.type='button';b.addEventListener('click',()=>{skill=i;renderSkill();});buttons.append(b);});renderSkill();
 const studies=document.getElementById('studies');studies.replaceChildren();t.studies.forEach((s,i)=>{const card=el('article',undefined,'study');card.append(el('p',s[0],'eyebrow'),el('h3',s[1]),el('p',institutions[i]),el('small',s[2]));studies.append(card);});
 document.querySelectorAll('.skill-print').forEach(n=>n.remove());t.skillNames.forEach((name,i)=>{const p=el('p',`${name}: ${t.skillText[i]}`,'skill-print');document.getElementById('skills').append(p);});
}
document.getElementById('language').addEventListener('click',event=>{
 const selected=event.target.closest('[data-language]')?.dataset.language;
 language=selected&&selected!==language?selected:languageOrder[(languageOrder.indexOf(language)+1)%3];
 try{localStorage.setItem('cv-language',language);}catch{}
 render();
 notify(locales[language].changed);
});
document.getElementById('copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText('rodrilopez2498@gmail.com');notify(locales[language].copied);}catch{notify(locales[language].copyError);}});
function preparePrint(){if(printState)return;printState=[...document.querySelectorAll('.role, .chapter')].map(node=>({node,hidden:node.hidden}));printState.forEach(({node})=>{node.hidden=false;});}
function restorePrint(){if(!printState)return;printState.forEach(({node,hidden})=>{node.hidden=hidden;});printState=undefined;}
window.addEventListener('beforeprint',preparePrint);window.addEventListener('afterprint',restorePrint);document.getElementById('print').addEventListener('click',()=>{preparePrint();window.print();});
render();
