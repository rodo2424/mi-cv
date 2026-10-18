'use strict';
// Shared CV content from the owner's LinkedIn text and updated profile PDF.
// Assistant ends February 2026 (owner correction); national role starts February 2026 (updated PDF).
const locales={
  "es": {
    "skip": "Ir al contenido",
    "edition": "PERFIL PROFESIONAL",
    "field": "INGENIERÍA + DATOS",
    "profession": "Ingeniero industrial · Estrategia de distribución y Supply Chain · Business Intelligence",
    "headline": "De la operación diaria a una visión nacional.",
    "intro": "Ingeniero industrial con experiencia en distribución de consumo masivo, gestión de flotas y planificación logística. En Embol participo en la gestión nacional de distribución: estandarizo información logística, desarrollo tableros Power BI y doy seguimiento a indicadores para apoyar decisiones operativas y gerenciales. Combino el conocimiento de la operación en terreno con el análisis de datos y la mejora continua. Complemento mi experiencia con estudios de maestría en Ciencia de Datos e Inteligencia Artificial.",
    "personal": "Los datos me resultan útiles cuando ayudan a organizar mejor la operación: entender la capacidad de una flota, planificar rutas o dar seguimiento a una entrega. Quiero seguir creciendo en gestión de distribución, liderazgo analítico y administración de datos de negocio, conectando operaciones, tecnología y estrategia.",
    "email": "Escríbeme",
    "copy": "Copiar correo",
    "copied": "Correo copiado",
    "copyError": "No se pudo copiar. Puedes usar el enlace de correo.",
    "brief": "EN BREVE",
    "current": "Analista Nacional de Distribución en Embol S.A.",
    "languages": "Español y portugués: nativo o bilingüe · Inglés: competencia profesional",
    "experience": "Experiencia",
    "skills": "Competencias",
    "education": "Formación",
    "print": "Imprimir / PDF",
    "experienceIntro": "Cuatro etapas conectan mis primeras experiencias con el trabajo que hago hoy. Cada una amplía la mirada de la anterior.",
    "skillsIntro": "Herramientas y conocimientos que aplico en mi trabajo. Selecciona una competencia para conocer su uso.",
    "closing": "Conversemos sobre datos y operaciones.",
    "nav": "Navegación principal",
    "filterLabel": "Filtrar experiencia",
    "skillLabel": "Explorar competencias",
    "next": "Cambiar a inglés",
    "changed": "Idioma: español",
    "count": "experiencias visibles",
    "detail": "Ver responsabilidades",
    "filters": [
      "Toda la trayectoria",
      "Datos y BI",
      "Distribución y logística"
    ],
    "dates": [
      "feb. 2026 — Presente",
      "jun. 2025 — feb. 2026",
      "sept. 2023 — jun. 2025",
      "mar. 2023 — jul. 2023",
      "ago. 2021 — jul. 2022",
      "ago. 2021 — dic. 2021",
      "feb. 2021 — jun. 2021"
    ],
    "usa": "Estados Unidos · Remoto",
    "roles": [
      [
        "Analista Nacional de Distribución",
        "Contribuyo a la gestión nacional de distribución mediante análisis de información logística, estandarización de datos y herramientas de Business Intelligence.",
        [
          "Estandarizo y gestiono bases de datos logísticas para mejorar la consistencia y disponibilidad de información nacional.",
          "Desarrollo tableros interactivos en Power BI para el monitoreo de indicadores y la toma de decisiones gerenciales.",
          "Participo en la gestión de flotas y coordino equipos de distribución en operaciones SPOTS.",
          "Analizo KPIs nacionales e identifico oportunidades de mejora en los procesos de distribución.",
          "Coordino flujos de información entre áreas para alinear planificación, ejecución y seguimiento de entregas."
        ]
      ],
      [
        "Asistente de Distribución",
        "Participé en la transformación del modelo de distribución de La Paz y El Alto, combinando planificación logística y análisis de información operativa.",
        [
          "Planifiqué y optimicé rutas con el área de Route-to-Market para apoyar el nuevo modelo de entrega.",
          "Desarrollé tableros automatizados en Power BI para el seguimiento de KPIs y registros de acciones (Action Log).",
          "Dimensioné la flota rural y analicé el balanceo de cargas (T2) para operaciones rurales, canal moderno y HoReCa.",
          "Analicé cobertura, capacidad y eficiencia para respaldar la planificación de recursos."
        ]
      ],
      [
        "Analista de Flota",
        "Gestioné actividades de control de flota, mantenimiento preventivo y programación de viajes, con foco en costos, disponibilidad y seguridad.",
        [
          "Implementé un cronograma de mantenimiento preventivo para reducir fallas y mejorar la disponibilidad de la flota rural.",
          "Optimicé la programación de viajes rurales con foco en cobertura y eficiencia del costo de entrega.",
          "Monitoreé tiempos de despacho y retorno e identifiqué oportunidades de mejora operativa.",
          "Di seguimiento a liquidaciones diarias y procesos de la operación de transporte.",
          "Supervisé lineamientos de seguridad y salud ocupacional y estándares de calidad en transporte."
        ]
      ],
      [
        "Pasante de Seguridad y Logística",
        "Participé en mejoras de seguridad industrial y digitalización de información dentro del centro de distribución.",
        [
          "Diseñé e implementé el Plan de Tráfico de la playa de vacíos para reducir riesgos entre personas y maquinaria.",
          "Automaticé reportes de seguridad con Power BI para analizar información e identificar áreas críticas.",
          "Realicé campañas de concientización para la flota de distribución.",
          "Apoyé la modernización del seguimiento y control de seguridad mediante análisis de datos."
        ]
      ],
      [
        "Diseñador de Productos",
        "Participé en el desarrollo de un producto alimenticio, integrando diseño experimental, costos y evaluación de viabilidad comercial.",
        [
          "Desarrollé un producto alimenticio experimental a base de aloe vera y mucílago de tuna.",
          "Analicé costos y viabilidad económica del producto.",
          "Investigué el mercado y el perfil del consumidor como insumos para el lanzamiento.",
          "Integré criterios técnicos, productivos y comerciales en el desarrollo."
        ]
      ],
      [
        "Asistente de Operaciones y Enlace con la Comunidad",
        "Apoyé la coordinación operativa y la comunicación de una academia de formación, organizando actividades entre mentores y estudiantes.",
        [
          "Coordiné actividades entre mentores y estudiantes.",
          "Revisé proyectos para convocatorias internacionales y su cumplimiento de directrices técnicas.",
          "Elaboré recursos visuales y contenidos para comunicación interna y externa.",
          "Apoyé la planificación de actividades académicas y operativas."
        ]
      ],
      [
        "Coordinador de Operaciones y Marketing",
        "Coordiné iniciativas de comunicación y apoyo operativo para proyectos de responsabilidad social y actividades institucionales.",
        [
          "Elaboré manuales y protocolos de bioseguridad y estandarización de procedimientos preventivos.",
          "Coordiné entrevistas a especialistas y la producción de materiales audiovisuales.",
          "Analicé datos de actividades para evaluar resultados y apoyar la organización de recursos.",
          "Participé en la planificación y ejecución de iniciativas de responsabilidad social."
        ]
      ]
    ],
    "skillNames": [
      "Power BI / DAX / Power Query",
      "Rutas y planificación",
      "Gestión de flotas",
      "Python / SQL",
      "SAP / Roadnet",
      "Excel avanzado",
      "Lean Six Sigma"
    ],
    "skillText": [
      "Desarrollo tableros gerenciales y reportes automáticos para seguir indicadores logísticos. Utilizo Power BI, DAX y Power Query para dar consistencia a la información y apoyar decisiones del equipo.",
      "Planificación de rutas con Route to Market (RTM), balanceo de cargas y dimensionamiento de la flota rural. Participé en el balanceo de rutas entre los centros de distribución de La Paz y El Alto.",
      "Programación de viajes, mantenimiento preventivo y seguimiento de despachos, retornos y liquidaciones diarias. Mi experiencia combina disponibilidad de vehículos, seguridad y organización de la distribución.",
      "Python y SQL forman parte de mis herramientas de análisis. Profundizo en machine learning a través de la maestría y la investigación aplicada en ruterización dinámica de última milla.",
      "SAP y Roadnet forman parte de mi entorno de herramientas para trabajar con información operativa y planificación logística.",
      "Excel avanzado para organizar y analizar información operativa, como complemento de los reportes y tableros de gestión.",
      "Formación en mejora continua y análisis de procesos, complementada con un diplomado en Lean Six Sigma."
    ],
    "studies": [
      [
        "Postgrado",
        "Maestría en Ciencia de Datos e Inteligencia Artificial",
        "En curso"
      ],
      [
        "Pregrado",
        "Ingeniería Industrial",
        "2017 — 2022"
      ],
      [
        "Diplomado",
        "Lean Six Sigma",
        "2023"
      ]
    ],
    "storyTitle": "La crónica de mi trayectoria",
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
        "feb. 2026 — Presente",
        "Una visión nacional",
        "Datos · indicadores · coordinación",
        "Hoy mi trabajo abarca la distribución a nivel nacional. Estandarizo información logística, desarrollo tableros y doy seguimiento a indicadores, manteniendo la conexión con los equipos y los desafíos de la operación diaria."
      ]
    ],
    "educationIntro": "Mi formación combina Ingeniería Industrial (2017–2022), un diplomado en Lean Six Sigma y estudios de maestría en Ciencia de Datos e Inteligencia Artificial, orientados a problemas reales de logística y operaciones.",
    "nextLabel": "La siguiente etapa",
    "nextTitle": "El siguiente paso: operación, datos y estrategia.",
    "nextText": "Busco asumir mayores responsabilidades en gestión de distribución, planificación logística o liderazgo analítico. Me interesa trabajar con equipos que conviertan información consistente en decisiones sobre capacidad, recursos y entregas, en Bolivia o en el ámbito internacional.",
    "profileSummary": "Ingeniero industrial con experiencia en distribución de consumo masivo, gestión de flotas y planificación logística. En Embol participo en la gestión nacional de distribución: estandarizo información logística, desarrollo tableros Power BI y doy seguimiento a indicadores para apoyar decisiones operativas y gerenciales. Combino el conocimiento de la operación en terreno con el análisis de datos y la mejora continua. Complemento mi experiencia con estudios de maestría en Ciencia de Datos e Inteligencia Artificial.",
    "qrTitle": "Mi CV, también en línea",
    "qrHint": "Escanea para ver mi trayectoria y proyectos.",
    "application": "CV para postular",
    "applicationKit": "Carta y correo de postulación",
    "downloadPdf": "Descargar PDF · 2 páginas",
    "back": "Volver a la crónica",
    "resumeTitle": "Currículum profesional",
    "summaryTitle": "Perfil profesional",
    "recentExperience": "Experiencia reciente",
    "earlierExperience": "Experiencia adicional",
    "appliedSkills": "Experiencia aplicada",
    "technicalSkills": "Otras herramientas y formación",
    "languageTitle": "Idiomas",
    "appliedText": "Distribución de consumo masivo · planificación de rutas (RTM) · dimensionamiento de flotas · balanceo de cargas y capacidad · Power BI · DAX · Power Query · KPIs · estandarización de datos · mejora continua.",
    "technicalText": "Excel avanzado · SQL · Python · SAP · Roadnet · Lean Six Sigma. Formación en Ciencia de Datos e Inteligencia Artificial e investigación aplicada en ruterización dinámica.",
    "valueTitle": "Tres aportes de mi trayectoria",
    "valueIntro": "Mi experiencia conecta información, planificación y trabajo en la operación.",
    "contributions": [
      [
        "Información que se puede seguir",
        "Estandarización de datos logísticos nacionales y tableros Power BI para el seguimiento gerencial."
      ],
      [
        "Planificación de la distribución",
        "Rutas, dimensionamiento de flota rural y balanceo de cargas para La Paz, El Alto y provincias."
      ],
      [
        "Una operación más organizada",
        "Programación de viajes, mantenimiento preventivo y seguimiento de despachos y retornos."
      ]
    ],
    "projectsTitle": "Proyectos que conectan datos y operación",
    "projectsIntro": "Un trabajo aplicado en distribución y la línea de investigación que estoy desarrollando.",
    "projects": [
      [
        "Embol S.A. · jun. — jul. 2025",
        "Balanceo de rutas de La Paz y El Alto",
        "Participé en el balanceo de cargas entre centros de distribución y la redefinición de territorios para ajustar la capacidad operativa y los modelos de atención al cliente.",
        "Planificación · analítica de datos · flotas"
      ],
      [
        "UAGRM · Investigación de maestría en desarrollo",
        "Ruterización dinámica de última milla",
        "Mi investigación aplicada se enfoca en automatizar la ruterización dinámica y conectar modelos analíticos con necesidades reales de la distribución.",
        "Python · machine learning · última milla"
      ]
    ],
    "certificationsTitle": "Cursos y certificaciones seleccionados",
    "certifications": [
      [
        "Estadística para análisis de datos",
        "LinkedIn Learning",
        "ago. 2023"
      ],
      [
        "Fundamentos de big data",
        "LinkedIn Learning",
        "ago. 2023"
      ],
      [
        "Supply Chain: Administrando la Cadena de Suministro",
        "Udemy",
        "Curso completado"
      ],
      [
        "Excel Avanzado para la Toma de Decisiones",
        "",
        ""
      ],
      [
        "Project 2019 y Project Online Professional esencial",
        "",
        ""
      ],
      [
        "Desarrolla tus habilidades en gestión de proyectos",
        "",
        ""
      ],
      [
        "Aspectos básicos de la asistencia técnica",
        "",
        ""
      ]
    ],
    "residence": "La Paz, Bolivia",
    "availability": "Disponible para reubicación o trabajo remoto",
    "supplementaryTitle": "Formación complementaria",
    "supplementaryTraining": "Excel Skills for Business · Macquarie University",
    "applicationCertifications": [
      [
        "Excel Avanzado para la Toma de Decisiones",
        "",
        ""
      ],
      [
        "Project 2019 y Project Online Professional esencial",
        "",
        ""
      ],
      [
        "Estadística para análisis de datos",
        "LinkedIn Learning",
        "ago. 2023"
      ],
      [
        "Fundamentos de big data",
        "LinkedIn Learning",
        "ago. 2023"
      ],
      [
        "Supply Chain: Administrando la Cadena de Suministro",
        "Udemy",
        "Curso completado"
      ]
    ]
  },
  "en": {
    "skip": "Skip to content",
    "edition": "PROFESSIONAL PROFILE",
    "field": "ENGINEERING + DATA",
    "profession": "Industrial engineer · Distribution and Supply Chain strategy · Business Intelligence",
    "headline": "From daily operations to a national perspective.",
    "intro": "Industrial engineer with experience in fast-moving consumer goods distribution, fleet management and logistics planning. At Embol, I contribute to nationwide distribution management by standardising logistics information, developing Power BI dashboards and monitoring indicators to support operational and management decisions. I combine first-hand operational experience with data analysis and continuous improvement. I complement my work with master’s studies in Data Science and Artificial Intelligence.",
    "personal": "Data is useful to me when it helps organise operations: understanding fleet capacity, planning routes or tracking a delivery. I want to grow in distribution management, analytical leadership and business data management, connecting operations, technology and strategy.",
    "email": "Get in touch",
    "copy": "Copy email",
    "copied": "Email copied",
    "copyError": "Unable to copy. You can use the email link.",
    "brief": "AT A GLANCE",
    "current": "National Distribution Analyst at Embol S.A.",
    "languages": "Spanish and Portuguese: native or bilingual · English: professional working proficiency",
    "experience": "Experience",
    "skills": "Skills",
    "education": "Education",
    "print": "Print / PDF",
    "experienceIntro": "Four chapters connect my earliest experiences with the work I do today. Each one builds on the perspective of the last.",
    "skillsIntro": "Tools and knowledge I use in my work. Select a skill to see how I apply it.",
    "closing": "Let’s talk about data and operations.",
    "nav": "Main navigation",
    "filterLabel": "Filter experience",
    "skillLabel": "Explore skills",
    "next": "Switch to Portuguese",
    "changed": "Language: English",
    "count": "roles shown",
    "detail": "View responsibilities",
    "filters": [
      "All experience",
      "Data & BI",
      "Distribution & logistics"
    ],
    "dates": [
      "Feb 2026 — Present",
      "Jun 2025 — Feb 2026",
      "Sep 2023 — Jun 2025",
      "Mar 2023 — Jul 2023",
      "Aug 2021 — Jul 2022",
      "Aug 2021 — Dec 2021",
      "Feb 2021 — Jun 2021"
    ],
    "usa": "United States · Remote",
    "roles": [
      [
        "National Distribution Analyst",
        "I contribute to nationwide distribution management through logistics information analysis, data standardisation and Business Intelligence tools.",
        [
          "Standardise and manage logistics databases to improve the consistency and availability of nationwide information.",
          "Develop interactive Power BI dashboards for indicator monitoring and management decisions.",
          "Contribute to fleet management and coordinate distribution teams in SPOTS operations.",
          "Analyse national KPIs and identify opportunities to improve distribution processes.",
          "Coordinate information flows between teams to align delivery planning, execution and tracking."
        ]
      ],
      [
        "Distribution Assistant",
        "I supported the transformation of the distribution model in La Paz and El Alto, combining logistics planning with operational data analysis.",
        [
          "Planned and optimised routes with the Route-to-Market team to support the new delivery model.",
          "Developed automated Power BI dashboards to track KPIs and action records (Action Log).",
          "Sized the rural fleet and analysed load balancing (T2) for rural operations, modern trade and HoReCa.",
          "Analysed coverage, capacity and efficiency to support resource planning."
        ]
      ],
      [
        "Fleet Analyst",
        "I managed fleet control, preventive maintenance and trip scheduling activities, with a focus on costs, availability and safety.",
        [
          "Implemented a preventive maintenance schedule to reduce breakdowns and improve rural fleet availability.",
          "Optimised rural trip scheduling with a focus on coverage and delivery cost efficiency.",
          "Monitored dispatch and return times and identified operational improvement opportunities.",
          "Tracked daily settlements and transport operation processes.",
          "Monitored occupational health and safety guidelines and transport quality standards."
        ]
      ],
      [
        "Safety and Logistics Intern",
        "I contributed to industrial safety improvements and the digitisation of operational information at the distribution centre.",
        [
          "Designed and implemented a traffic plan for the empty-container yard to reduce risks between people and machinery.",
          "Automated safety reports with Power BI to analyse information and identify critical areas.",
          "Ran safety awareness campaigns for the distribution fleet.",
          "Supported the modernisation of safety tracking and control through data analysis."
        ]
      ],
      [
        "Product Designer",
        "I contributed to food product development, combining experimental design, costs and commercial feasibility assessment.",
        [
          "Developed an experimental food product based on aloe vera and prickly pear mucilage.",
          "Analysed product costs and economic feasibility.",
          "Researched the market and consumer profile to inform launch planning.",
          "Combined technical, production and commercial criteria in development."
        ]
      ],
      [
        "Operations Assistant & Community Liaison",
        "I supported operations and communications at a training academy, organising activities between mentors and students.",
        [
          "Coordinated activities between mentors and students.",
          "Reviewed projects for international calls and compliance with technical guidelines.",
          "Created visual resources and content for internal and external communications.",
          "Supported planning of academic and operational activities."
        ]
      ],
      [
        "Operations and Marketing Coordinator",
        "I coordinated communications and operational support for social responsibility projects and institutional activities.",
        [
          "Developed biosafety manuals and protocols to standardise preventive procedures.",
          "Coordinated expert interviews and audiovisual production.",
          "Analysed activity data to assess outcomes and support resource planning.",
          "Contributed to planning and delivery of social responsibility initiatives."
        ]
      ]
    ],
    "skillNames": [
      "Power BI / DAX / Power Query",
      "Routes and planning",
      "Fleet management",
      "Python / SQL",
      "SAP / Roadnet",
      "Advanced Excel",
      "Lean Six Sigma"
    ],
    "skillText": [
      "I develop management dashboards and automated reports to track logistics indicators. I use Power BI, DAX and Power Query to make information consistent and support team decisions.",
      "Route planning with Route to Market (RTM), load balancing and rural fleet sizing. I contributed to route balancing between the distribution centres in La Paz and El Alto.",
      "Trip scheduling, preventive maintenance and tracking of dispatches, returns and daily settlements. My experience combines vehicle availability, safety and distribution planning.",
      "Python and SQL are part of my analysis toolkit. I am developing my machine learning knowledge through my master’s studies and applied research into dynamic last-mile routing.",
      "SAP and Roadnet are part of my toolkit for working with operational information and logistics planning.",
      "Advanced Excel for organising and analysing operational information, alongside management reports and dashboards.",
      "Training in continuous improvement and process analysis, complemented by a diploma in Lean Six Sigma."
    ],
    "studies": [
      [
        "Postgraduate",
        "Master’s in Data Science & Artificial Intelligence",
        "In progress"
      ],
      [
        "Undergraduate",
        "Industrial Engineering",
        "2017 — 2022"
      ],
      [
        "Diploma",
        "Lean Six Sigma",
        "2023"
      ]
    ],
    "storyTitle": "The story of my career",
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
        "Feb 2026 — Present",
        "A national perspective",
        "Data · indicators · coordination",
        "Today, my work covers nationwide distribution. I standardise logistics information, develop dashboards and monitor indicators, staying connected to the teams and the challenges of daily operations."
      ]
    ],
    "educationIntro": "My education combines Industrial Engineering (2017–2022), a diploma in Lean Six Sigma and master’s studies in Data Science and Artificial Intelligence focused on practical logistics and operations problems.",
    "nextLabel": "The next chapter",
    "nextTitle": "The next step: operations, data and strategy.",
    "nextText": "I want to take on greater responsibility in distribution management, logistics planning or analytical leadership. I am interested in teams that turn consistent information into decisions about capacity, resources and deliveries, in Bolivia or internationally.",
    "profileSummary": "Industrial engineer with experience in fast-moving consumer goods distribution, fleet management and logistics planning. At Embol, I contribute to nationwide distribution management by standardising logistics information, developing Power BI dashboards and monitoring indicators to support operational and management decisions. I combine first-hand operational experience with data analysis and continuous improvement. I complement my work with master’s studies in Data Science and Artificial Intelligence.",
    "qrTitle": "My CV, online",
    "qrHint": "Scan to explore my career and projects.",
    "application": "Application CV",
    "applicationKit": "Cover letter and application email",
    "downloadPdf": "Download PDF · 2 pages",
    "back": "Back to my story",
    "resumeTitle": "Professional résumé",
    "summaryTitle": "Professional profile",
    "recentExperience": "Recent experience",
    "earlierExperience": "Additional experience",
    "appliedSkills": "Applied experience",
    "technicalSkills": "Other tools and training",
    "languageTitle": "Languages",
    "appliedText": "FMCG distribution · route planning (RTM) · fleet sizing · load and capacity balancing · Power BI · DAX · Power Query · KPIs · data standardisation · continuous improvement.",
    "technicalText": "Advanced Excel · SQL · Python · SAP · Roadnet · Lean Six Sigma. Studies in Data Science and Artificial Intelligence and applied research into dynamic routing.",
    "valueTitle": "Three contributions from my experience",
    "valueIntro": "My work connects information, planning and day-to-day operations.",
    "contributions": [
      [
        "Information teams can track",
        "Nationwide logistics data standardisation and Power BI dashboards for management reporting."
      ],
      [
        "Distribution planning",
        "Routes, rural fleet sizing and load balancing for La Paz, El Alto and provincial markets."
      ],
      [
        "More organised operations",
        "Trip scheduling, preventive maintenance and the tracking of dispatches and returns."
      ]
    ],
    "projectsTitle": "Projects connecting data and operations",
    "projectsIntro": "Applied distribution work and the research topic I am developing.",
    "projects": [
      [
        "Embol S.A. · Jun — Jul 2025",
        "Route balancing in La Paz and El Alto",
        "I contributed to load balancing between distribution centres and territory redesign to align operational capacity and customer service models.",
        "Planning · data analytics · fleets"
      ],
      [
        "UAGRM · Master’s research in progress",
        "Dynamic last-mile routing",
        "My applied research focuses on automating dynamic routing and connecting analytical models with practical distribution needs.",
        "Python · machine learning · last mile"
      ]
    ],
    "certificationsTitle": "Selected courses and certificates",
    "certifications": [
      [
        "Statistics for Data Analysis",
        "LinkedIn Learning",
        "Aug 2023"
      ],
      [
        "Big Data Foundations",
        "LinkedIn Learning",
        "Aug 2023"
      ],
      [
        "Supply Chain: Managing the Supply Chain",
        "Udemy",
        "Course completed"
      ],
      [
        "Advanced Excel for Decision-Making",
        "",
        ""
      ],
      [
        "Project 2019 and Project Online Professional Essential Training",
        "",
        ""
      ],
      [
        "Develop Your Project Management Skills",
        "",
        ""
      ],
      [
        "Technical Support Fundamentals",
        "",
        ""
      ]
    ],
    "residence": "La Paz, Bolivia",
    "availability": "Open to relocation or remote work",
    "supplementaryTitle": "Additional training",
    "supplementaryTraining": "Excel Skills for Business · Macquarie University",
    "applicationCertifications": [
      [
        "Advanced Excel for Decision-Making",
        "",
        ""
      ],
      [
        "Project 2019 and Project Online Professional Essential Training",
        "",
        ""
      ],
      [
        "Statistics for Data Analysis",
        "LinkedIn Learning",
        "Aug 2023"
      ],
      [
        "Big Data Foundations",
        "LinkedIn Learning",
        "Aug 2023"
      ],
      [
        "Supply Chain: Managing the Supply Chain",
        "Udemy",
        "Course completed"
      ]
    ]
  },
  "pt": {
    "skip": "Ir para o conteúdo",
    "edition": "PERFIL PROFISSIONAL",
    "field": "ENGENHARIA + DADOS",
    "profession": "Engenheiro industrial · Estratégia de distribuição e Supply Chain · Business Intelligence",
    "headline": "Da operação diária a uma visão nacional.",
    "intro": "Engenheiro industrial com experiência em distribuição de bens de consumo, gestão de frotas e planejamento logístico. Na Embol, contribuo para a gestão nacional de distribuição: padronizo informações logísticas, desenvolvo painéis em Power BI e acompanho indicadores para apoiar decisões operacionais e gerenciais. Combino o conhecimento da operação com análise de dados e melhoria contínua. Complemento minha experiência com estudos de mestrado em Ciência de Dados e Inteligência Artificial.",
    "personal": "Os dados são úteis para mim quando ajudam a organizar melhor a operação: entender a capacidade de uma frota, planejar rotas ou acompanhar uma entrega. Quero continuar crescendo em gestão de distribuição, liderança analítica e gestão de dados de negócio, conectando operação, tecnologia e estratégia.",
    "email": "Entre em contato",
    "copy": "Copiar e-mail",
    "copied": "E-mail copiado",
    "copyError": "Não foi possível copiar. Você pode usar o link de e-mail.",
    "brief": "EM RESUMO",
    "current": "Analista Nacional de Distribuição na Embol S.A.",
    "languages": "Espanhol e português: nativo ou bilíngue · Inglês: proficiência profissional",
    "experience": "Experiência",
    "skills": "Competências",
    "education": "Formação",
    "print": "Imprimir / PDF",
    "experienceIntro": "Quatro etapas conectam minhas primeiras experiências ao trabalho que faço hoje. Cada uma amplia a perspectiva da anterior.",
    "skillsIntro": "Ferramentas e conhecimentos que aplico no trabalho. Selecione uma competência para saber como a utilizo.",
    "closing": "Vamos conversar sobre dados e operações.",
    "nav": "Navegação principal",
    "filterLabel": "Filtrar experiência",
    "skillLabel": "Explorar competências",
    "next": "Mudar para espanhol",
    "changed": "Idioma: português",
    "count": "experiências visíveis",
    "detail": "Ver responsabilidades",
    "filters": [
      "Toda a trajetória",
      "Dados e BI",
      "Distribuição e logística"
    ],
    "dates": [
      "fev. 2026 — Atual",
      "jun. 2025 — fev. 2026",
      "set. 2023 — jun. 2025",
      "mar. 2023 — jul. 2023",
      "ago. 2021 — jul. 2022",
      "ago. 2021 — dez. 2021",
      "fev. 2021 — jun. 2021"
    ],
    "usa": "Estados Unidos · Remoto",
    "roles": [
      [
        "Analista Nacional de Distribuição",
        "Contribuo para a gestão nacional de distribuição por meio de análise de informações logísticas, padronização de dados e ferramentas de Business Intelligence.",
        [
          "Padronizo e gerencio bases de dados logísticos para melhorar a consistência e a disponibilidade de informações nacionais.",
          "Desenvolvo painéis interativos em Power BI para acompanhamento de indicadores e decisões gerenciais.",
          "Participo da gestão de frotas e coordeno equipes de distribuição em operações SPOTS.",
          "Analiso KPIs nacionais e identifico oportunidades de melhoria nos processos de distribuição.",
          "Coordeno fluxos de informação entre equipes para alinhar planejamento, execução e acompanhamento de entregas."
        ]
      ],
      [
        "Assistente de Distribuição",
        "Participei da transformação do modelo de distribuição de La Paz e El Alto, combinando planejamento logístico e análise de informações operacionais.",
        [
          "Planejei e otimizei rotas com a equipe de Route-to-Market para apoiar o novo modelo de entrega.",
          "Desenvolvi painéis automatizados em Power BI para acompanhar KPIs e registros de ações (Action Log).",
          "Dimensionei a frota rural e analisei o balanceamento de cargas (T2) para operações rurais, varejo moderno e HoReCa.",
          "Analisei cobertura, capacidade e eficiência para apoiar o planejamento de recursos."
        ]
      ],
      [
        "Analista de Frota",
        "Gerenciei atividades de controle de frota, manutenção preventiva e programação de viagens, com foco em custos, disponibilidade e segurança.",
        [
          "Implementei um cronograma de manutenção preventiva para reduzir falhas e melhorar a disponibilidade da frota rural.",
          "Otimizei a programação de viagens rurais com foco em cobertura e eficiência do custo de entrega.",
          "Monitorei horários de saída e retorno e identifiquei oportunidades de melhoria operacional.",
          "Acompanhei acertos diários e processos da operação de transporte.",
          "Supervisionei diretrizes de saúde e segurança ocupacional e padrões de qualidade no transporte."
        ]
      ],
      [
        "Estagiário de Segurança e Logística",
        "Participei de melhorias de segurança industrial e digitalização de informações no centro de distribuição.",
        [
          "Desenvolvi e implementei um plano de tráfego para o pátio de embalagens vazias para reduzir riscos entre pessoas e máquinas.",
          "Automatizei relatórios de segurança com Power BI para analisar informações e identificar áreas críticas.",
          "Realizei campanhas de conscientização para a frota de distribuição.",
          "Apoiei a modernização do acompanhamento e controle de segurança por meio de análise de dados."
        ]
      ],
      [
        "Designer de Produtos",
        "Participei do desenvolvimento de um produto alimentício, integrando planejamento experimental, custos e avaliação de viabilidade comercial.",
        [
          "Desenvolvi um produto alimentício experimental à base de aloe vera e mucilagem de palma.",
          "Analisei custos e viabilidade econômica do produto.",
          "Pesquisei o mercado e o perfil do consumidor para apoiar o lançamento.",
          "Integrei critérios técnicos, produtivos e comerciais no desenvolvimento."
        ]
      ],
      [
        "Assistente de Operações e Relacionamento com a Comunidade",
        "Apoiei a coordenação operacional e a comunicação de uma academia de formação, organizando atividades entre mentores e alunos.",
        [
          "Coordenei atividades entre mentores e alunos.",
          "Revisei projetos para chamadas internacionais e o cumprimento de diretrizes técnicas.",
          "Elaborei recursos visuais e conteúdos para comunicação interna e externa.",
          "Apoiei o planejamento de atividades acadêmicas e operacionais."
        ]
      ],
      [
        "Coordenador de Operações e Marketing",
        "Coordenei iniciativas de comunicação e apoio operacional para projetos de responsabilidade social e atividades institucionais.",
        [
          "Elaborei manuais e protocolos de biossegurança para padronizar procedimentos preventivos.",
          "Coordenei entrevistas com especialistas e a produção de materiais audiovisuais.",
          "Analisei dados de atividades para avaliar resultados e apoiar a organização de recursos.",
          "Participei do planejamento e da execução de iniciativas de responsabilidade social."
        ]
      ]
    ],
    "skillNames": [
      "Power BI / DAX / Power Query",
      "Rotas e planejamento",
      "Gestão de frotas",
      "Python / SQL",
      "SAP / Roadnet",
      "Excel avançado",
      "Lean Six Sigma"
    ],
    "skillText": [
      "Desenvolvo painéis gerenciais e relatórios automáticos para acompanhar indicadores logísticos. Utilizo Power BI, DAX e Power Query para dar consistência às informações e apoiar as decisões da equipe.",
      "Planejamento de rotas com Route to Market (RTM), balanceamento de cargas e dimensionamento da frota rural. Participei do balanceamento de rotas entre os centros de distribuição de La Paz e El Alto.",
      "Programação de viagens, manutenção preventiva e acompanhamento de saídas, retornos e acertos diários. Minha experiência combina disponibilidade de veículos, segurança e organização da distribuição.",
      "Python e SQL fazem parte das minhas ferramentas de análise. Aprofundo meus conhecimentos em machine learning no mestrado e na pesquisa aplicada em roteirização dinâmica de última milha.",
      "SAP e Roadnet fazem parte do meu conjunto de ferramentas para trabalhar com informações operacionais e planejamento logístico.",
      "Excel avançado para organizar e analisar informações operacionais, como complemento dos relatórios e painéis de gestão.",
      "Formação em melhoria contínua e análise de processos, complementada por um diplomado em Lean Six Sigma."
    ],
    "studies": [
      [
        "Pós-graduação",
        "Mestrado em Ciência de Dados e Inteligência Artificial",
        "Em andamento"
      ],
      [
        "Graduação",
        "Engenharia Industrial",
        "2017 — 2022"
      ],
      [
        "Diplomado",
        "Lean Six Sigma",
        "2023"
      ]
    ],
    "storyTitle": "A história da minha trajetória",
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
        "fev. 2026 — Atual",
        "Uma visão nacional",
        "Dados · indicadores · coordenação",
        "Hoje meu trabalho abrange a distribuição em âmbito nacional. Padronizo informações logísticas, desenvolvo painéis e acompanho indicadores, mantendo a conexão com as equipes e os desafios da operação diária."
      ]
    ],
    "educationIntro": "Minha formação combina Engenharia Industrial (2017–2022), um diplomado em Lean Six Sigma e estudos de mestrado em Ciência de Dados e Inteligência Artificial voltados a problemas reais de logística e operações.",
    "nextLabel": "A próxima etapa",
    "nextTitle": "O próximo passo: operação, dados e estratégia.",
    "nextText": "Quero assumir maiores responsabilidades em gestão de distribuição, planejamento logístico ou liderança analítica. Interessa-me trabalhar com equipes que transformem informações consistentes em decisões sobre capacidade, recursos e entregas, na Bolívia ou no âmbito internacional.",
    "profileSummary": "Engenheiro industrial com experiência em distribuição de bens de consumo, gestão de frotas e planejamento logístico. Na Embol, contribuo para a gestão nacional de distribuição: padronizo informações logísticas, desenvolvo painéis em Power BI e acompanho indicadores para apoiar decisões operacionais e gerenciais. Combino o conhecimento da operação com análise de dados e melhoria contínua. Complemento minha experiência com estudos de mestrado em Ciência de Dados e Inteligência Artificial.",
    "qrTitle": "Meu CV, também on-line",
    "qrHint": "Escaneie para ver minha trajetória e meus projetos.",
    "application": "CV para candidaturas",
    "applicationKit": "Carta e e-mail de candidatura",
    "downloadPdf": "Baixar PDF · 2 páginas",
    "back": "Voltar à minha trajetória",
    "resumeTitle": "Currículo profissional",
    "summaryTitle": "Perfil profissional",
    "recentExperience": "Experiência recente",
    "earlierExperience": "Experiência adicional",
    "appliedSkills": "Experiência aplicada",
    "technicalSkills": "Outras ferramentas e formação",
    "languageTitle": "Idiomas",
    "appliedText": "Distribuição de bens de consumo · planejamento de rotas (RTM) · dimensionamento de frotas · balanceamento de cargas e capacidade · Power BI · DAX · Power Query · KPIs · padronização de dados · melhoria contínua.",
    "technicalText": "Excel avançado · SQL · Python · SAP · Roadnet · Lean Six Sigma. Estudos em Ciência de Dados e Inteligência Artificial e pesquisa aplicada em roteirização dinâmica.",
    "valueTitle": "Três contribuições da minha trajetória",
    "valueIntro": "Minha experiência conecta informação, planejamento e trabalho na operação.",
    "contributions": [
      [
        "Informação que pode ser acompanhada",
        "Padronização de dados logísticos nacionais e painéis em Power BI para acompanhamento gerencial."
      ],
      [
        "Planejamento da distribuição",
        "Rotas, dimensionamento da frota rural e balanceamento de cargas para La Paz, El Alto e províncias."
      ],
      [
        "Uma operação mais organizada",
        "Programação de viagens, manutenção preventiva e acompanhamento de saídas e retornos."
      ]
    ],
    "projectsTitle": "Projetos que conectam dados e operação",
    "projectsIntro": "Um trabalho aplicado em distribuição e a linha de pesquisa que estou desenvolvendo.",
    "projects": [
      [
        "Embol S.A. · jun. — jul. 2025",
        "Balanceamento de rotas de La Paz e El Alto",
        "Participei do balanceamento de cargas entre centros de distribuição e da redefinição de territórios para ajustar a capacidade operacional e os modelos de atendimento ao cliente.",
        "Planejamento · análise de dados · frotas"
      ],
      [
        "UAGRM · Pesquisa de mestrado em desenvolvimento",
        "Roteirização dinâmica de última milha",
        "Minha pesquisa aplicada se concentra em automatizar a roteirização dinâmica e conectar modelos analíticos às necessidades reais da distribuição.",
        "Python · machine learning · última milha"
      ]
    ],
    "certificationsTitle": "Cursos e certificados selecionados",
    "certifications": [
      [
        "Estatística para análise de dados",
        "LinkedIn Learning",
        "ago. 2023"
      ],
      [
        "Fundamentos de big data",
        "LinkedIn Learning",
        "ago. 2023"
      ],
      [
        "Supply Chain: Gestão da Cadeia de Suprimentos",
        "Udemy",
        "Curso concluído"
      ],
      [
        "Excel Avançado para a Tomada de Decisões",
        "",
        ""
      ],
      [
        "Project 2019 e Project Online Professional essencial",
        "",
        ""
      ],
      [
        "Desenvolva Suas Habilidades em Gestão de Projetos",
        "",
        ""
      ],
      [
        "Fundamentos de Suporte Técnico",
        "",
        ""
      ]
    ],
    "residence": "La Paz, Bolívia",
    "availability": "Disponível para realocação ou trabalho remoto",
    "supplementaryTitle": "Formação complementar",
    "supplementaryTraining": "Excel Skills for Business · Macquarie University",
    "applicationCertifications": [
      [
        "Excel Avançado para a Tomada de Decisões",
        "",
        ""
      ],
      [
        "Project 2019 e Project Online Professional essencial",
        "",
        ""
      ],
      [
        "Estatística para análise de dados",
        "LinkedIn Learning",
        "ago. 2023"
      ],
      [
        "Fundamentos de big data",
        "LinkedIn Learning",
        "ago. 2023"
      ],
      [
        "Supply Chain: Gestão da Cadeia de Suprimentos",
        "Udemy",
        "Curso concluído"
      ]
    ]
  }
};
const companies=[
  "Embol S.A.",
  "Embol S.A.",
  "Embol S.A.",
  "Cervecería Boliviana Nacional",
  "Nutrimentos Maybo S.R.L.",
  "Arbitriumfx",
  "Universidad Católica Boliviana"
];
const institutions=[
  "Universidad Autónoma Gabriel René Moreno",
  "Universidad Católica Boliviana “San Pablo”",
  "Universidad Privada Boliviana"
];
const categories=[
  [
    "data",
    "operations"
  ],
  [
    "data",
    "operations"
  ],
  [
    "operations"
  ],
  [
    "data",
    "operations"
  ],
  [],
  [],
  [
    "data"
  ]
];
const chapterRoles=[
  [
    6,
    5,
    4
  ],
  [
    3,
    2
  ],
  [
    1
  ],
  [
    0
  ]
];
