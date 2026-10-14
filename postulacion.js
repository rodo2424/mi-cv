'use strict';
const kitLocales={
 es:{
  eyebrow:'PARA MI PRÓXIMA ETAPA',title:'Una presentación para abrir la conversación.',intro:'Carta y correo para postular a oportunidades de distribución, planificación y análisis de datos. Puedes usarlos como base y adaptarlos a cada empresa.',back:'Ver el CV para postular',customize:'Personaliza la postulación',company:'Empresa',position:'Puesto',recipient:'Correo de selección',optional:'Los campos son opcionales. Si los dejas vacíos, obtienes una versión general. El nombre de la empresa y el puesto se conservan al cambiar de idioma.',print:'Guardar carta / PDF',letterTitle:'Carta de presentación',copyLetter:'Copiar carta',downloadLetter:'PDF de la carta general',emailTitle:'Correo para postular',copyEmail:'Copiar correo',subject:'Asunto',copySubject:'Copiar asunto',openEmail:'Abrir borrador de correo',cvLink:'Ver y descargar mi CV',emailHelp:'Adjunta el CV en el idioma de la vacante antes de enviar. El borrador se abrirá en tu aplicación de correo; revisa el destinatario y el contenido. Puedes guardar la carta personalizada con «Guardar carta / PDF».',copied:'Texto copiado',copyError:'No se pudo copiar. Selecciona el texto y cópialo manualmente.',invalidEmail:'Revisa la dirección de correo del destinatario.',to:'Al equipo de selección',letterSubject:'Carta de presentación',greeting:'Estimado equipo de selección:',closing:'Gracias por su tiempo. Me gustaría conversar sobre las necesidades del equipo y explicar cómo mi experiencia puede aportar a la operación.',signoff:'Atentamente,',emailClosing:'Quedo atento a la posibilidad de conversar y ampliar cualquier información.',emailSignoff:'Saludos cordiales,',generalSubject:'Distribución y planificación logística',
  opening:(company,position)=>`Me interesa postular ${position?`al puesto de ${position}`:'a oportunidades de distribución y planificación logística'}${company?` en ${company}`:''}. Soy ingeniero industrial y mi experiencia conecta la operación logística con el análisis de datos.`,
  paragraphs:[
   'En Embol he pasado de la gestión de flotas a la planificación de distribución y, actualmente, al análisis de la operación a nivel nacional. Trabajo con información logística, tableros Power BI e indicadores que ayudan a dar seguimiento a rutas, recursos y entregas.',
   'Entre mis experiencias está el balanceo de rutas y cargas de La Paz y El Alto, junto con el dimensionamiento de flota rural. Conocer el trabajo en terreno me ayuda a entender qué necesitan los equipos y a convertir ese contexto en análisis útil para la planificación.',
   'Estoy culminando la maestría en Ciencia de Datos e Inteligencia Artificial en la UAGRM, con investigación aplicada en ruterización dinámica de última milla. Busco aportar esa combinación de experiencia operativa, herramientas de datos y disposición para seguir aprendiendo.'
  ],
  emailOpening:(company,position)=>`Me gustaría postular ${position?`al puesto de ${position}`:'a oportunidades de distribución y planificación logística'}${company?` en ${company}`:''}. Soy ingeniero industrial y actualmente trabajo como Analista Nacional de Distribución en Embol.`,
  emailValue:'Mi experiencia combina planificación de rutas, gestión de flotas y análisis con Power BI. Participé en el balanceo de rutas de La Paz y El Alto y estoy culminando una maestría en Ciencia de Datos e Inteligencia Artificial.',emailAttachment:'Adjunto mi CV para su consideración.'
 },
 en:{
  eyebrow:'FOR MY NEXT CHAPTER',title:'An introduction to start a conversation.',intro:'A cover letter and email for opportunities in distribution, planning and data analysis. Use them as a starting point and tailor them to each company.',back:'View my application CV',customize:'Personalise the application',company:'Company',position:'Role',recipient:'Recruitment email',optional:'All fields are optional. Leave them blank for a general version. Company and role names stay as entered when changing language.',print:'Save letter / PDF',letterTitle:'Cover letter',copyLetter:'Copy letter',downloadLetter:'General cover letter PDF',emailTitle:'Application email',copyEmail:'Copy email',subject:'Subject',copySubject:'Copy subject',openEmail:'Open email draft',cvLink:'View and download my CV',emailHelp:'Attach your CV in the language of the vacancy before sending. The draft opens in your email app; review the recipient and content. Save the personalised letter with “Save letter / PDF”.',copied:'Text copied',copyError:'Unable to copy. Select the text and copy it manually.',invalidEmail:'Check the recipient’s email address.',to:'To the recruitment team',letterSubject:'Cover letter',greeting:'Dear recruitment team,',closing:'Thank you for your time. I would welcome a conversation about your team’s needs and how my experience could contribute to your operations.',signoff:'Kind regards,',emailClosing:'I would welcome the opportunity to discuss my experience and provide any further information.',emailSignoff:'Kind regards,',generalSubject:'Distribution and logistics planning',
  opening:(company,position)=>`I would like to apply ${position?`for the ${position} role`:'for opportunities in distribution and logistics planning'}${company?` at ${company}`:''}. I am an industrial engineer whose experience connects logistics operations with data analysis.`,
  paragraphs:[
   'At Embol, I have progressed from fleet management to distribution planning and, now, nationwide operational analysis. I work with logistics information, Power BI dashboards and indicators that help track routes, resources and deliveries.',
   'My experience includes route and load balancing in La Paz and El Alto, as well as rural fleet sizing. Knowing operations from the ground helps me understand what teams need and turn that context into useful planning analysis.',
   'I am completing a master’s degree in Data Science and Artificial Intelligence at UAGRM, with applied research into dynamic last-mile routing. I want to contribute this combination of operational experience, data tools and a willingness to keep learning.'
  ],
  emailOpening:(company,position)=>`I would like to apply ${position?`for the ${position} role`:'for opportunities in distribution and logistics planning'}${company?` at ${company}`:''}. I am an industrial engineer currently working as a National Distribution Analyst at Embol.`,
  emailValue:'My experience combines route planning, fleet management and Power BI analysis. I contributed to route balancing in La Paz and El Alto and am completing a master’s degree in Data Science and Artificial Intelligence.',emailAttachment:'Please find my CV attached for your consideration.'
 },
 pt:{
  eyebrow:'PARA MINHA PRÓXIMA ETAPA',title:'Uma apresentação para iniciar a conversa.',intro:'Carta e e-mail para oportunidades em distribuição, planejamento e análise de dados. Use-os como base e adapte-os a cada empresa.',back:'Ver meu CV para candidaturas',customize:'Personalize a candidatura',company:'Empresa',position:'Vaga',recipient:'E-mail de recrutamento',optional:'Os campos são opcionais. Deixe-os vazios para uma versão geral. O nome da empresa e da vaga permanecem como foram escritos ao mudar de idioma.',print:'Salvar carta / PDF',letterTitle:'Carta de apresentação',copyLetter:'Copiar carta',downloadLetter:'PDF da carta geral',emailTitle:'E-mail para candidatura',copyEmail:'Copiar e-mail',subject:'Assunto',copySubject:'Copiar assunto',openEmail:'Abrir rascunho de e-mail',cvLink:'Ver e baixar meu CV',emailHelp:'Anexe o CV no idioma da vaga antes de enviar. O rascunho será aberto no aplicativo de e-mail; confira o destinatário e o conteúdo. Salve a carta personalizada com “Salvar carta / PDF”.',copied:'Texto copiado',copyError:'Não foi possível copiar. Selecione o texto e copie manualmente.',invalidEmail:'Confira o endereço de e-mail do destinatário.',to:'À equipe de recrutamento',letterSubject:'Carta de apresentação',greeting:'Prezada equipe de recrutamento,',closing:'Agradeço pelo tempo e pela atenção. Gostaria de conversar sobre as necessidades da equipe e explicar como minha experiência pode contribuir para a operação.',signoff:'Atenciosamente,',emailClosing:'Fico à disposição para conversar e fornecer mais informações sobre minha experiência.',emailSignoff:'Atenciosamente,',generalSubject:'Distribuição e planejamento logístico',
  opening:(company,position)=>`Gostaria de me candidatar ${position?`à vaga de ${position}`:'a oportunidades em distribuição e planejamento logístico'}${company?` na empresa ${company}`:''}. Sou engenheiro industrial e minha experiência conecta a operação logística à análise de dados.`,
  paragraphs:[
   'Na Embol, passei da gestão de frotas para o planejamento de distribuição e, atualmente, para a análise da operação em âmbito nacional. Trabalho com informações logísticas, painéis em Power BI e indicadores que ajudam a acompanhar rotas, recursos e entregas.',
   'Minha experiência inclui o balanceamento de rotas e cargas de La Paz e El Alto, além do dimensionamento da frota rural. Conhecer o trabalho na operação me ajuda a entender as necessidades das equipes e a transformar esse contexto em análises úteis para o planejamento.',
   'Estou concluindo o mestrado em Ciência de Dados e Inteligência Artificial na UAGRM, com pesquisa aplicada em roteirização dinâmica de última milha. Quero contribuir com essa combinação de experiência operacional, ferramentas de dados e disposição para continuar aprendendo.'
  ],
  emailOpening:(company,position)=>`Gostaria de me candidatar ${position?`à vaga de ${position}`:'a oportunidades em distribuição e planejamento logístico'}${company?` na empresa ${company}`:''}. Sou engenheiro industrial e atualmente trabalho como Analista Nacional de Distribuição na Embol.`,
  emailValue:'Minha experiência combina planejamento de rotas, gestão de frotas e análise com Power BI. Participei do balanceamento de rotas de La Paz e El Alto e estou concluindo um mestrado em Ciência de Dados e Inteligência Artificial.',emailAttachment:'Anexo meu CV para sua consideração.'
 }
};
const languageOrder=['es','en','pt'];
let language='es',toastTimer;
try{const saved=localStorage.getItem('cv-language');if(languageOrder.includes(saved))language=saved;}catch{}
const name='Rodrigo Alejandro López Flores';
const contact='rodrilopez2498@gmail.com\n+591 65562192';
function paragraph(text){const node=document.createElement('p');node.textContent=text;return node;}
function content(){
 const t=kitLocales[language],company=document.getElementById('company').value.trim(),position=document.getElementById('position').value.trim();
 const subject=`${language==='es'?'Postulación':language==='en'?'Application':'Candidatura'} — ${position||t.generalSubject} — ${name}`;
 const letter=[t.greeting,t.opening(company,position),...t.paragraphs,t.closing,`${t.signoff}\n${name}`];
 const email=[t.greeting,t.emailOpening(company,position),t.emailValue,t.emailAttachment,t.emailClosing,`${t.emailSignoff}\n${name}\n${contact}\nhttps://rodo2424.github.io/mi-cv/`];
 return {t,company,position,subject,letter,email};
}
function renderText(){
 const {t,company,position,subject,letter,email}=content();
 document.getElementById('letter-to').textContent=company?`${t.to} · ${company}`:t.to;
 document.getElementById('letter-subject').textContent=position?`${t.letterSubject} · ${position}`:t.letterSubject;
 document.getElementById('letter-body').replaceChildren(...letter.map(paragraph));
 document.getElementById('email-subject').textContent=subject;
 document.getElementById('email-body').replaceChildren(...email.map(paragraph));
 document.getElementById('letter').setAttribute('aria-label',t.letterTitle);
}
function render(){
 const t=kitLocales[language],shared=locales[language];
 document.documentElement.lang=language;document.title=`${name} | ${t.letterTitle}`;
 document.querySelectorAll('[data-kit]').forEach(node=>{node.textContent=t[node.dataset.kit];});
 document.querySelectorAll('[data-key]').forEach(node=>{node.textContent=shared[node.dataset.key];});
 document.getElementById('navigation').setAttribute('aria-label',shared.nav);
 const names={es:'Español',en:'English',pt:'Português'},editions={es:'Edición',en:'Edition',pt:'Edição'};
 const button=document.getElementById('language');document.getElementById('language-name').textContent=editions[language];
 button.style.setProperty('--language-index',languageOrder.indexOf(language));
 button.querySelectorAll('[data-language]').forEach(node=>node.classList.toggle('is-current',node.dataset.language===language));
 button.setAttribute('aria-label',`${names[language]}. ${shared.next}`);button.title=`${names[language]} · ${shared.next}`;
 const download=document.getElementById('download-letter');download.href=`carta-${language}.pdf`;download.download=`Carta-Rodrigo-Alejandro-Lopez-Flores-${language.toUpperCase()}.pdf`;
 renderText();
}
function notify(message){clearTimeout(toastTimer);document.getElementById('status').textContent=message;toastTimer=setTimeout(()=>{document.getElementById('status').textContent='';},3500);}
async function copy(text){try{await navigator.clipboard.writeText(text);notify(kitLocales[language].copied);}catch{notify(kitLocales[language].copyError);}}
document.getElementById('personalize').addEventListener('submit',event=>event.preventDefault());
['company','position'].forEach(id=>document.getElementById(id).addEventListener('input',renderText));
document.getElementById('language').addEventListener('click',event=>{
 const selected=event.target.closest('[data-language]')?.dataset.language;
 language=selected&&selected!==language?selected:languageOrder[(languageOrder.indexOf(language)+1)%3];
 try{localStorage.setItem('cv-language',language);}catch{}
 render();notify(locales[language].changed);
});
document.getElementById('copy-letter').addEventListener('click',()=>{const {letter}=content();copy(`${name}\nSanta Cruz / La Paz, Bolivia\n${contact}\n\n${document.getElementById('letter-to').textContent}\n${document.getElementById('letter-subject').textContent}\n\n${letter.join('\n\n')}`);});
document.getElementById('copy-email').addEventListener('click',()=>{const {subject,email}=content();copy(`${kitLocales[language].subject}: ${subject}\n\n${email.join('\n\n')}`);});
document.getElementById('copy-subject').addEventListener('click',()=>copy(content().subject));
document.getElementById('print-letter').addEventListener('click',()=>window.print());
function mailDraftUrl(recipient){const {subject,email}=content();return `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(email.join('\n\n'))}`;}
document.getElementById('open-email').addEventListener('click',()=>{
 const input=document.getElementById('recipient');if(!input.checkValidity()){input.reportValidity();notify(kitLocales[language].invalidEmail);return;}
 window.location.href=mailDraftUrl(input.value.trim());
});
render();
