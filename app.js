'use strict';
const locales = {
 es: {
  skip:'Ir al contenido', edition:'PERFIL PROFESIONAL', field:'INGENIERÍA + DATOS', profession:'Ingeniero industrial · Inteligencia de negocios', headline:'Datos claros. Operaciones que funcionan.',
  intro:'Soy ingeniero industrial y trabajo en distribución, planificación e inteligencia de negocios. Mi recorrido en Embol me ha llevado de la gestión de flotas en La Paz al análisis de la distribución a nivel nacional.',
  personal:'Me interesa que el análisis sirva para resolver problemas del día a día: organizar rutas, entender un indicador o facilitar el trabajo de un equipo. Actualmente curso una maestría en Data Science e Inteligencia Artificial para profundizar en automatización y modelos predictivos.',
  email:'Escríbeme', copy:'Copiar correo', copied:'Correo copiado', copyError:'No se pudo copiar. Puedes usar el enlace de correo.', brief:'EN BREVE', current:'Analista Nacional de Distribución en Embol S.A.', languages:'Español · Portugués avanzado · Inglés intermedio', experience:'Experiencia', skills:'Competencias', education:'Formación', print:'Imprimir / PDF', experienceIntro:'De la operación diaria a una visión nacional de la distribución. Explora cada etapa para conocer mi trabajo.', skillsIntro:'Herramientas y conocimientos que aplico en mi trabajo. Selecciona una competencia para conocer su uso.', closing:'Conversemos sobre datos y operaciones.', nav:'Navegación principal', filterLabel:'Filtrar experiencia', skillLabel:'Explorar competencias', next:'Cambiar a inglés', changed:'Idioma: español', count:'experiencias visibles', detail:'Ver responsabilidades', filters:['Toda la trayectoria','Datos y BI','Distribución y logística'],
  dates:['mar. 2026 — Presente','jun. 2025 — feb. 2026','sept. 2023 — jun. 2025','mar. 2023 — jul. 2023','ago. 2021 — jul. 2022','ago. 2021 — dic. 2021','feb. 2021 — jun. 2021'], usa:'Estados Unidos · Remoto',
  roles:[
   ['Analista Nacional de Distribución','Analizo la operación de distribución a nivel nacional y convierto la información logística en herramientas para la gestión.', ['Estandarizo bases de datos logísticas de las operaciones nacionales.','Desarrollo tableros en Power BI para el seguimiento gerencial.','Gestiono flotas y coordino equipos de distribución en operaciones SPOTS.','Coordino los flujos de información y las operaciones de entrega.','Doy seguimiento a los indicadores nacionales e identifico oportunidades de mejora.']],
   ['Asistente de Distribución','Apoyé el cambio del modelo de distribución en La Paz y El Alto, combinando planificación de rutas y análisis de datos.', ['Planifiqué rutas junto con Route to Market para el nuevo modelo de entrega.','Desarrollé tableros automáticos en Power BI para dar seguimiento a los KPIs y al Action Log.','Dimensioné la flota rural y equilibré las cargas T2 para provincias de alto volumen y los canales moderno y Horeca.']],
   ['Analista de Flota','Trabajé en la disponibilidad de los vehículos, la programación de viajes y el control de la operación de distribución.', ['Implementé un cronograma de mantenimiento preventivo para la flota rural, orientado a reducir fallas y mejorar la disponibilidad.','Optimicé la programación de viajes rurales para ampliar la cobertura y reducir el costo por cliente.','Mejoré el seguimiento de los despachos, retornos y liquidaciones diarias.','Supervisé el cumplimiento de los requisitos de seguridad y calidad en el transporte.']],
   ['Pasante de Seguridad y Logística','Apoyé la seguridad industrial del centro de distribución con análisis de datos y mejoras en los procesos.', ['Diseñé e implementé el Plan de Tráfico de la playa de vacíos para reducir los riesgos entre personas y vehículos.','Automaticé reportes de seguridad con Power BI para identificar puntos críticos.','Realicé campañas de concientización para la flota de distribución.']],
   ['Diseñador de Productos','Participé en el desarrollo de un producto alimenticio y en el estudio de su viabilidad comercial, bajo un contrato de formación.', ['Realicé el diseño experimental de un alimento funcional a base de aloe vera y mucílago de tuna.','Analicé costos y viabilidad económica e investigué el mercado para definir el consumidor y la propuesta de lanzamiento.']],
   ['Asistente de Operaciones y Enlace con la Comunidad','Coordiné actividades y comunicación visual para una academia internacional de trading.', ['Organicé y di seguimiento a las interacciones entre mentores y estudiantes.','Revisé proyectos para convocatorias internacionales y su cumplimiento de las directrices técnicas.','Creé recursos visuales y publicaciones para la comunicación interna y externa.']],
   ['Coordinador de Operaciones y Marketing','Durante mis prácticas, apoyé iniciativas de responsabilidad social y comunicación institucional.', ['Elaboré manuales y protocolos de bioseguridad para el Hogar San Ramón.','Coordiné entrevistas a expertos académicos y la edición de material audiovisual.','Analicé datos de las actividades para evaluar su impacto y el uso de los recursos.']]
  ],
  skillNames:['Power BI / DAX','Python / SQL','Logística y planificación','SAP / ERP','Lean Six Sigma','Excel'],
  skillText:['Desarrollo tableros y reportes para seguir indicadores de distribución, seguridad y operación. El objetivo es que la información sea útil para las decisiones del equipo.','Forman parte de mi conjunto de herramientas de análisis de datos y de mi formación en Data Science e IA.','Planificación de rutas, dimensionamiento de flotas, balanceo de cargas y seguimiento de despachos y retornos. Es el área que conecta mi experiencia operativa con el análisis.','Herramientas de gestión empresarial que forman parte de mis competencias para trabajar con la información de las operaciones.','Formación en mejora continua y análisis de procesos, complementada con un diplomado en Lean Six Sigma.','Utilizo Excel como parte de mis herramientas para organizar y analizar la información de las operaciones.'],
  studies:[['Postgrado','Maestría en Data Science e IA','En curso'],['Pregrado','Ingeniería Industrial','2022'],['Diplomado','Lean Six Sigma','2023']]
 },
 en: {
  skip:'Skip to content', edition:'PROFESSIONAL PROFILE', field:'ENGINEERING + DATA', profession:'Industrial engineer · Business intelligence', headline:'Clear data. Operations that work.',
  intro:'I am an industrial engineer working in distribution, planning and business intelligence. My experience at Embol has taken me from fleet management in La Paz to nationwide distribution analysis.',
  personal:'I want analysis to help solve everyday problems: planning routes, understanding a metric or making a team’s work easier. I am currently pursuing a master’s degree in Data Science and Artificial Intelligence to deepen my knowledge of automation and predictive models.',
  email:'Get in touch', copy:'Copy email', copied:'Email copied', copyError:'Unable to copy. You can use the email link.', brief:'AT A GLANCE', current:'National Distribution Analyst at Embol S.A.', languages:'Spanish · Advanced Portuguese · Intermediate English', experience:'Experience', skills:'Skills', education:'Education', print:'Print / PDF', experienceIntro:'From daily operations to a national view of distribution. Explore each role to learn about my work.', skillsIntro:'Tools and knowledge I use in my work. Select a skill to see how I apply it.', closing:'Let’s talk about data and operations.', nav:'Main navigation', filterLabel:'Filter experience', skillLabel:'Explore skills', next:'Switch to Portuguese', changed:'Language: English', count:'roles shown', detail:'View responsibilities', filters:['All experience','Data & BI','Distribution & logistics'],
  dates:['Mar 2026 — Present','Jun 2025 — Feb 2026','Sep 2023 — Jun 2025','Mar 2023 — Jul 2023','Aug 2021 — Jul 2022','Aug 2021 — Dec 2021','Feb 2021 — Jun 2021'], usa:'United States · Remote',
  roles:[
   ['National Distribution Analyst','I analyse nationwide distribution operations and turn logistics data into tools for management.', ['Standardise logistics databases across national operations.','Develop Power BI dashboards for management reporting.','Manage fleets and coordinate distribution teams in SPOTS operations.','Coordinate information flows and delivery operations.','Monitor national indicators and identify opportunities for improvement.']],
   ['Distribution Assistant','I supported the change in the distribution model in La Paz and El Alto, combining route planning with data analysis.', ['Planned routes with Route to Market for the new delivery model.','Developed automated Power BI dashboards to track KPIs and the Action Log.','Sized the rural fleet and balanced T2 loads for high-volume provinces, modern trade and Horeca channels.']],
   ['Fleet Analyst','I worked on vehicle availability, trip scheduling and the monitoring of distribution operations.', ['Implemented a preventive maintenance schedule for the rural fleet to reduce breakdowns and improve availability.','Optimised rural trip scheduling to expand coverage and reduce delivery costs per customer.','Improved the tracking of dispatches, returns and daily settlements.','Monitored compliance with safety and quality requirements in transport operations.']],
   ['Safety and Logistics Intern','I supported industrial safety at the distribution centre through data analysis and process improvements.', ['Designed and implemented a traffic plan for the empty-container yard to reduce risks between people and vehicles.','Automated safety reports with Power BI to identify critical areas.','Ran safety awareness campaigns for the distribution fleet.']],
   ['Product Designer','Under a training contract, I helped develop a food product and assess its commercial viability.', ['Conducted the experimental design of a functional food based on aloe vera and prickly pear mucilage.','Analysed costs and economic viability and researched the market to define the target consumer and launch proposal.']],
   ['Operations Assistant & Community Liaison','I coordinated activities and visual communications for an international trading academy.', ['Organised and followed up on interactions between mentors and students.','Reviewed projects for international calls and their compliance with technical guidelines.','Created visual resources and posts for internal and external communications.']],
   ['Operations and Marketing Coordinator','During my internship, I supported social responsibility and institutional communications initiatives.', ['Developed biosafety manuals and protocols for Hogar San Ramón.','Coordinated interviews with academic experts and audiovisual editing.','Analysed activity data to assess impact and resource use.']]
  ],
  skillNames:['Power BI / DAX','Python / SQL','Logistics and planning','SAP / ERP','Lean Six Sigma','Excel'],
  skillText:['I develop dashboards and reports to track distribution, safety and operational indicators, with a focus on information that helps the team make decisions.','Part of my data analysis toolkit and my studies in Data Science and AI.','Route planning, fleet sizing, load balancing and dispatch and return tracking. This is where my operational experience meets data analysis.','Business management tools included in my skill set for working with operational information.','Training in continuous improvement and process analysis, complemented by a diploma in Lean Six Sigma.','I use Excel as part of my toolkit for organising and analysing operational information.'],
  studies:[['Postgraduate','Master’s in Data Science & AI','In progress'],['Undergraduate','Industrial Engineering','2022'],['Diploma','Lean Six Sigma','2023']]
 },
 pt: {
  skip:'Ir para o conteúdo', edition:'PERFIL PROFISSIONAL', field:'ENGENHARIA + DADOS', profession:'Engenheiro industrial · Inteligência de negócios', headline:'Dados claros. Operações que funcionam.',
  intro:'Sou engenheiro industrial e trabalho com distribuição, planejamento e inteligência de negócios. Minha trajetória na Embol me levou da gestão de frotas em La Paz à análise da distribuição em âmbito nacional.',
  personal:'Quero que a análise ajude a resolver problemas do dia a dia: planejar rotas, entender um indicador ou facilitar o trabalho de uma equipe. Atualmente curso um mestrado em Data Science e Inteligência Artificial para aprofundar meus conhecimentos em automação e modelos preditivos.',
  email:'Entre em contato', copy:'Copiar e-mail', copied:'E-mail copiado', copyError:'Não foi possível copiar. Você pode usar o link de e-mail.', brief:'EM RESUMO', current:'Analista Nacional de Distribuição na Embol S.A.', languages:'Espanhol · Português avançado · Inglês intermediário', experience:'Experiência', skills:'Competências', education:'Formação', print:'Imprimir / PDF', experienceIntro:'Da operação diária a uma visão nacional da distribuição. Explore cada etapa para conhecer meu trabalho.', skillsIntro:'Ferramentas e conhecimentos que aplico no trabalho. Selecione uma competência para saber como a utilizo.', closing:'Vamos conversar sobre dados e operações.', nav:'Navegação principal', filterLabel:'Filtrar experiência', skillLabel:'Explorar competências', next:'Mudar para espanhol', changed:'Idioma: português', count:'experiências visíveis', detail:'Ver responsabilidades', filters:['Toda a trajetória','Dados e BI','Distribuição e logística'],
  dates:['mar. 2026 — Atual','jun. 2025 — fev. 2026','set. 2023 — jun. 2025','mar. 2023 — jul. 2023','ago. 2021 — jul. 2022','ago. 2021 — dez. 2021','fev. 2021 — jun. 2021'], usa:'Estados Unidos · Remoto',
  roles:[
   ['Analista Nacional de Distribuição','Analiso a operação de distribuição em âmbito nacional e transformo os dados logísticos em ferramentas de gestão.', ['Padronizo bases de dados logísticos das operações nacionais.','Desenvolvo painéis em Power BI para acompanhamento gerencial.','Gerencio frotas e coordeno equipes de distribuição em operações SPOTS.','Coordeno os fluxos de informação e as operações de entrega.','Acompanho os indicadores nacionais e identifico oportunidades de melhoria.']],
   ['Assistente de Distribuição','Apoiei a mudança do modelo de distribuição em La Paz e El Alto, combinando planejamento de rotas e análise de dados.', ['Planejei rotas com a área de Route to Market para o novo modelo de entrega.','Desenvolvi painéis automáticos em Power BI para acompanhar KPIs e o Action Log.','Dimensionei a frota rural e equilibrei as cargas T2 para províncias de alto volume e os canais moderno e Horeca.']],
   ['Analista de Frota','Trabalhei na disponibilidade dos veículos, na programação de viagens e no acompanhamento da operação de distribuição.', ['Implementei um cronograma de manutenção preventiva para a frota rural, com foco em reduzir falhas e melhorar a disponibilidade.','Otimizei a programação de viagens rurais para ampliar a cobertura e reduzir o custo de entrega por cliente.','Melhorei o acompanhamento de saídas, retornos e acertos diários.','Supervisionei o cumprimento dos requisitos de segurança e qualidade no transporte.']],
   ['Estagiário de Segurança e Logística','Apoiei a segurança industrial do centro de distribuição com análise de dados e melhorias nos processos.', ['Desenvolvi e implementei o Plano de Tráfego do pátio de embalagens vazias para reduzir riscos entre pessoas e veículos.','Automatizei relatórios de segurança com Power BI para identificar pontos críticos.','Realizei campanhas de conscientização para a frota de distribuição.']],
   ['Designer de Produtos','Em um contrato de formação, participei do desenvolvimento de um produto alimentício e da análise de sua viabilidade comercial.', ['Realizei o planejamento experimental de um alimento funcional à base de aloe vera e mucilagem de palma.','Analisei custos e viabilidade econômica e pesquisei o mercado para definir o público consumidor e a proposta de lançamento.']],
   ['Assistente de Operações e Relacionamento com a Comunidade','Coordenei atividades e comunicação visual para uma academia internacional de trading.', ['Organizei e acompanhei as interações entre mentores e alunos.','Revisei projetos para chamadas internacionais e o cumprimento das diretrizes técnicas.','Criei recursos visuais e publicações para a comunicação interna e externa.']],
   ['Coordenador de Operações e Marketing','Durante meu estágio, apoiei iniciativas de responsabilidade social e comunicação institucional.', ['Elaborei manuais e protocolos de biossegurança para o Hogar San Ramón.','Coordenei entrevistas com especialistas acadêmicos e a edição de material audiovisual.','Analisei dados das atividades para avaliar seu impacto e o uso dos recursos.']]
  ],
  skillNames:['Power BI / DAX','Python / SQL','Logística e planejamento','SAP / ERP','Lean Six Sigma','Excel'],
  skillText:['Desenvolvo painéis e relatórios para acompanhar indicadores de distribuição, segurança e operação. O objetivo é fornecer informações úteis para as decisões da equipe.','Fazem parte das minhas ferramentas de análise de dados e da minha formação em Data Science e IA.','Planejamento de rotas, dimensionamento de frotas, balanceamento de cargas e acompanhamento de saídas e retornos. É a área que conecta minha experiência operacional à análise de dados.','Ferramentas de gestão empresarial que fazem parte das minhas competências para trabalhar com informações operacionais.','Formação em melhoria contínua e análise de processos, complementada por um curso de diplomado em Lean Six Sigma.','Utilizo o Excel como parte das minhas ferramentas para organizar e analisar informações operacionais.'],
  studies:[['Pós-graduação','Mestrado em Data Science e IA','Em andamento'],['Graduação','Engenharia Industrial','2022'],['Diplomado','Lean Six Sigma','2023']]
 }
};
const narratives={
  "es": {
    "headline": "De la operación diaria a una visión nacional.",
    "intro": "Mi recorrido empezó en 2021, entre proyectos de producto, coordinación y comunicación. En 2023 entré en la operación logística: primero en seguridad, después en gestión de flotas. Hoy, en Embol, analizo la distribución a nivel nacional y desarrollo herramientas para seguir lo que ocurre en la operación.",
    "storyTitle": "La crónica de mi trayectoria",
    "experienceIntro": "Cuatro etapas conectan mis primeras experiencias con el trabajo que hago hoy. Cada una amplía la mirada de la anterior.",
    "timelineLabel": "Recorrer los capítulos de mi trayectoria",
    "chapterLabel": "Capítulo",
    "chapters": [
      [
        "2021 — 2022",
        "Los primeros proyectos",
        "Producto · coordinación · comunicación",
        "Mis primeras experiencias fueron distintas entre sí, pero tuvieron algo en común: organizar el trabajo y entender a quién iba dirigido. Pasé por proyectos de responsabilidad social, una academia internacional de trading y el desarrollo de un producto alimenticio."
      ],
      [
        "2023 — 2025",
        "La operación en terreno",
        "Seguridad · flotas · seguimiento",
        "La logística se volvió el centro de mi trabajo. En CBN apoyé la seguridad del centro de distribución; después, en Embol, trabajé con mantenimiento, programación de viajes y seguimiento de la flota. Los datos empezaron a acompañar decisiones concretas de la operación."
      ],
      [
        "2025 — feb. 2026",
        "Rutas y decisiones",
        "Distribución · planificación · Power BI",
        "Como asistente de distribución, reuní planificación y análisis para apoyar el cambio del modelo de entrega en La Paz y El Alto. El trabajo combinaba rutas, cargas y tableros: distintas formas de entender y organizar una misma operación."
      ],
      [
        "mar. 2026 — Presente",
        "Una visión nacional",
        "Datos · indicadores · coordinación",
        "Hoy mi trabajo abarca la distribución a nivel nacional. Estandarizo información logística, desarrollo tableros y doy seguimiento a indicadores, manteniendo la conexión con los equipos y los desafíos de la operación diaria."
      ]
    ],
    "educationIntro": "Mi formación acompaña este recorrido: Ingeniería Industrial, un diplomado en Lean Six Sigma y, actualmente, una maestría en Data Science e Inteligencia Artificial.",
    "nextLabel": "La siguiente etapa",
    "nextTitle": "Seguir aprendiendo, cerca de la operación.",
    "nextText": "Quiero profundizar en automatización y modelos predictivos para trabajar con los problemas que ya conozco desde la logística. Esa es la conexión que busco entre mi experiencia y la maestría que curso hoy."
  },
  "en": {
    "headline": "From daily operations to a national perspective.",
    "intro": "My journey began in 2021, with projects in product development, coordination and communications. In 2023, I moved into logistics: first safety, then fleet management. Today, at Embol, I analyse nationwide distribution and develop tools to track what is happening in operations.",
    "storyTitle": "The story of my career",
    "experienceIntro": "Four chapters connect my earliest experiences with the work I do today. Each one builds on the perspective of the last.",
    "timelineLabel": "Explore the chapters of my career",
    "chapterLabel": "Chapter",
    "chapters": [
      [
        "2021 — 2022",
        "The first projects",
        "Product · coordination · communications",
        "My early roles differed, but they shared a common thread: organising work and understanding who it was for. I worked on social responsibility projects, at an international trading academy and on the development of a food product."
      ],
      [
        "2023 — 2025",
        "Inside the operation",
        "Safety · fleets · tracking",
        "Logistics became the focus of my work. At CBN, I supported distribution centre safety; later, at Embol, I worked on maintenance, trip scheduling and fleet tracking. Data began to support practical operational decisions."
      ],
      [
        "2025 — Feb 2026",
        "Routes and decisions",
        "Distribution · planning · Power BI",
        "As a distribution assistant, I brought planning and analysis together to support the change in the delivery model in La Paz and El Alto. The work combined routes, loads and dashboards: different ways of understanding and organising the same operation."
      ],
      [
        "Mar 2026 — Present",
        "A national perspective",
        "Data · indicators · coordination",
        "Today, my work covers nationwide distribution. I standardise logistics information, develop dashboards and monitor indicators, staying connected to the teams and the challenges of daily operations."
      ]
    ],
    "educationIntro": "My education supports this journey: Industrial Engineering, a diploma in Lean Six Sigma and, currently, a master’s degree in Data Science and Artificial Intelligence.",
    "nextLabel": "The next chapter",
    "nextTitle": "Keep learning, stay close to operations.",
    "nextText": "I want to deepen my knowledge of automation and predictive models to work on problems I already know through logistics. That is the connection I am looking for between my experience and my current master’s studies."
  },
  "pt": {
    "headline": "Da operação diária a uma visão nacional.",
    "intro": "Minha trajetória começou em 2021, com projetos de produto, coordenação e comunicação. Em 2023, entrei na operação logística: primeiro na segurança, depois na gestão de frotas. Hoje, na Embol, analiso a distribuição em âmbito nacional e desenvolvo ferramentas para acompanhar o que acontece na operação.",
    "storyTitle": "A história da minha trajetória",
    "experienceIntro": "Quatro etapas conectam minhas primeiras experiências ao trabalho que faço hoje. Cada uma amplia a perspectiva da anterior.",
    "timelineLabel": "Explorar os capítulos da minha trajetória",
    "chapterLabel": "Capítulo",
    "chapters": [
      [
        "2021 — 2022",
        "Os primeiros projetos",
        "Produto · coordenação · comunicação",
        "Minhas primeiras experiências foram diferentes entre si, mas tinham algo em comum: organizar o trabalho e entender para quem ele era feito. Passei por projetos de responsabilidade social, uma academia internacional de trading e o desenvolvimento de um produto alimentício."
      ],
      [
        "2023 — 2025",
        "Dentro da operação",
        "Segurança · frotas · acompanhamento",
        "A logística se tornou o centro do meu trabalho. Na CBN, apoiei a segurança do centro de distribuição; depois, na Embol, trabalhei com manutenção, programação de viagens e acompanhamento da frota. Os dados passaram a apoiar decisões concretas da operação."
      ],
      [
        "2025 — fev. 2026",
        "Rotas e decisões",
        "Distribuição · planejamento · Power BI",
        "Como assistente de distribuição, reuni planejamento e análise para apoiar a mudança do modelo de entrega em La Paz e El Alto. O trabalho combinava rotas, cargas e painéis: formas diferentes de entender e organizar a mesma operação."
      ],
      [
        "mar. 2026 — Atual",
        "Uma visão nacional",
        "Dados · indicadores · coordenação",
        "Hoje meu trabalho abrange a distribuição em âmbito nacional. Padronizo informações logísticas, desenvolvo painéis e acompanho indicadores, mantendo a conexão com as equipes e os desafios da operação diária."
      ]
    ],
    "educationIntro": "Minha formação acompanha essa trajetória: Engenharia Industrial, um diplomado em Lean Six Sigma e, atualmente, um mestrado em Data Science e Inteligência Artificial.",
    "nextLabel": "A próxima etapa",
    "nextTitle": "Continuar aprendendo, perto da operação.",
    "nextText": "Quero aprofundar meus conhecimentos em automação e modelos preditivos para trabalhar com problemas que já conheço pela logística. É essa conexão que busco entre minha experiência e o mestrado que curso hoje."
  }
};
Object.keys(narratives).forEach(lang=>Object.assign(locales[lang],narratives[lang]));
const chapterRoles=[[6,5,4],[3,2],[1],[0]];
const companies=['Embol S.A.','Embol S.A.','Embol S.A.','CBN','Nutrimentos Maybo S.R.L.','Arbitriumfx','Universidad Católica Boliviana'];
const institutions=['Universidad Autónoma Gabriel René Moreno','Universidad Católica Boliviana “San Pablo”','Universidad Privada Boliviana'];
const categories=[['data','operations'],['data','operations'],['operations'],['data','operations'],[],[],['data']];
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
 const t=locales[language];document.documentElement.lang=language;document.title=`Rodrigo López Flores | ${t.profession}`;document.querySelector('meta[name=description]').content=t.intro;
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
