'use strict';
const languageOrder=['es','en','pt'];
let language='es';
try{const saved=localStorage.getItem('cv-language');if(languageOrder.includes(saved))language=saved;}catch{}
let toastTimer;
function element(tag,text,className){const node=document.createElement(tag);if(text!==undefined)node.textContent=text;if(className)node.className=className;return node;}
function render(){
 const t=locales[language];
 document.documentElement.lang=language;
 document.title=`Rodrigo Alejandro López Flores | ${t.resumeTitle}`;
 document.querySelector('meta[name=description]').content=t.profileSummary;
 document.querySelectorAll('[data-key]').forEach(n=>{n.textContent=t[n.dataset.key];});
 const download=document.getElementById('download-pdf');
 download.href=`cv-${language}.pdf`;
 download.download=`Rodrigo-Alejandro-Lopez-Flores-${language.toUpperCase()}.pdf`;
 document.getElementById('navigation').setAttribute('aria-label',t.nav);
 const names={es:'Español',en:'English',pt:'Português'};
 const editions={es:'Edición',en:'Edition',pt:'Edição'};
 const button=document.getElementById('language');
 document.getElementById('language-name').textContent=editions[language];
 button.style.setProperty('--language-index',languageOrder.indexOf(language));
 button.querySelectorAll('[data-language]').forEach(n=>n.classList.toggle('is-current',n.dataset.language===language));
 button.setAttribute('aria-label',`${names[language]}. ${t.next}`);button.title=`${names[language]} · ${t.next}`;
 const roles=document.getElementById('resume-roles');roles.replaceChildren();
 [0,1,2,3].forEach(index=>{
  const [title,summary,bullets]=t.roles[index];
  const role=element('article',undefined,'resume-role');
  role.append(element('h3',`${title} | ${companies[index]}`),element('p',`${t.dates[index]} · ${index===0?'Santa Cruz':'La Paz'}, Bolivia`,'resume-date'));
  const list=element('ul');bullets.forEach(text=>list.append(element('li',text)));role.append(list);roles.append(role);
 });
 const earlier=document.getElementById('earlier-roles');earlier.replaceChildren();
 [4,5,6].forEach(index=>{
  const role=element('article',undefined,'resume-earlier');
  role.append(element('h3',`${t.roles[index][0]} | ${companies[index]}`),element('p',t.dates[index],'resume-date'),element('p',t.roles[index][1]));earlier.append(role);
 });
 const projects=document.getElementById('resume-projects');projects.replaceChildren();
 t.projects.forEach(([date,title,description])=>{const project=element('article',undefined,'resume-earlier');project.append(element('h3',title),element('p',date,'resume-date'),element('p',description));projects.append(project);});
 const studies=document.getElementById('resume-studies');studies.replaceChildren();
 t.studies.forEach(([level,title,date],index)=>{const study=element('p');study.append(element('strong',title),document.createTextNode(` · ${institutions[index]} · ${date}`));studies.append(study);});
 const certificates=document.getElementById('resume-certificates');certificates.replaceChildren();
 t.certifications.forEach(([title,issuer,date])=>certificates.append(element('li',`${title} · ${issuer} · ${date}`)));
}
document.getElementById('language').addEventListener('click',event=>{
 const selected=event.target.closest('[data-language]')?.dataset.language;
 language=selected&&selected!==language?selected:languageOrder[(languageOrder.indexOf(language)+1)%3];
 try{localStorage.setItem('cv-language',language);}catch{}
 render();clearTimeout(toastTimer);document.getElementById('status').textContent=locales[language].changed;toastTimer=setTimeout(()=>{document.getElementById('status').textContent='';},3000);
});
document.getElementById('print').addEventListener('click',()=>window.print());
render();
