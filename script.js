let currentLanguage = "es";
let activeProjectKey = null;


/* ============================================================
   UI TRANSLATIONS
============================================================ */

const translations = {

    /* ========================================================
       ESPAÑOL
    ======================================================== */

    es: {

        document: {
            title: "Joshua Góngora | Portafolio de Ingeniería Mecatrónica",
            description:
                "Portafolio profesional de Joshua Emmanuel Góngora Álvarez, estudiante de Ingeniería Mecatrónica enfocado en automatización, visión artificial, software, robótica y desarrollo tecnológico."
        },

        nav: {
            about: "Sobre mí",
            projects: "Proyectos",
            awards: "Reconocimientos",
            stack: "Habilidades",
            contact: "Contacto"
        },

        hero: {
            status: "Disponible para nuevos proyectos",

            title: `
                Ingeniería para

                <span class="gradient-text">
                    construir ideas
                </span>

                que funcionan.
            `,

            description: `
                Estudiante de Ingeniería Mecatrónica enfocado en
                desarrollar soluciones donde convergen

                <strong>
                    software, automatización, electrónica,
                    visión artificial y diseño mecánico.
                </strong>
            `,

            projectsButton: "Ver mis proyectos",
            scroll: "DESPLÁZATE PARA EXPLORAR"
        },

        profile: {
            profile: "PERFIL",
            discipline: "DISCIPLINA",
            mechatronics: "MECATRÓNICA",
            location: "UBICACIÓN",
            focus: "ENFOQUE",
            mantra: "CONSTRUIR · PROBAR · MEJORAR"
        },

        stats: {
            projects: "Proyectos<br>seleccionados",
            awards: "Proyectos<br>premiados",
            research: "Experiencia de<br>investigación",
            training: "Capacitaciones"
        },

        about: {
            section: "SOBRE MÍ",
            miniLabel: "INGENIERÍA MECATRÓNICA",

            title: `
                No quiero solamente

                <span>
                    diseñarlo.
                </span>

                Quiero construirlo.
            `,

            main:
                "Soy Joshua Emmanuel Góngora Álvarez y me interesa convertir problemas reales en sistemas tecnológicos funcionales.",

            paragraph1:
                "Mi forma de trabajar combina diferentes áreas de ingeniería: diseño mecánico, programación, electrónica, sensores, automatización y análisis de datos.",

            paragraph2:
                "Me interesa especialmente desarrollar proyectos donde el software pueda interactuar directamente con el mundo físico.",

            tags: [
                "Robótica",
                "Visión por computadora",
                "Automatización",
                "Python",
                "Sistemas embebidos",
                "Flutter",
                "FastAPI",
                "CAD"
            ]
        },

        projects: {
            section: "PROYECTOS SELECCIONADOS",

            title: `
                Algunos problemas merecen

                <span class="gradient-text">
                    algo más que una idea.
                </span>
            `,

            intro:
                "Una selección de proyectos donde convergen software, automatización, electrónica, visión por computadora, diseño mecánico e investigación.",

            explore: "Explorar proyecto",
            awarded: "Proyecto premiado",
            development: "EN DESARROLLO"
        },

        awards: {
            section: "RECONOCIMIENTOS",

            title: `
                Cuando la ingeniería

                <span class="gradient-text">
                    genera resultados.
                </span>
            `,

            intro:
                "Reconocimientos obtenidos durante mi formación universitaria y preparación tecnológica.",

            projectAward: "Proyecto premiado",

            kinetechCategory:
                "VISIÓN POR COMPUTADORA · BIOMECÁNICA",

            aramisCategory:
                "AUTOMATIZACIÓN · INVESTIGACIÓN",

            cubesatTitle:
                "Diseño y realización de CubeSats",

            certification:
                "Certificación y capacitación",

            cubesatDescription:
                "Diseño y desarrollo de sistemas CubeSat",

            cubesatCategory:
                "SISTEMAS ESPACIALES · CUBESAT",
                
            pythonTitle:
                "100 Days of Code: Python",

            pythonStatus:
                "Curso completado",

            pythonDescription:
                "Formación intensiva en programación y desarrollo con Python",

            pythonCategory:
                "PYTHON · PROGRAMACIÓN · DESARROLLO",

            javaTitle:
                "Java Bootcamp",

            javaStatus:
                "EN PROCESO",

            javaDescription:
                "Formación en programación orientada a objetos y desarrollo con Java",

            javaCategory:
                "JAVA · OOP · DESARROLLO DE SOFTWARE"
        },

        experience: {
            section: "EXPERIENCIA DESTACADA",

            research: "Investigación",
            development: "Desarrollo",
            training: "Formación",

            cicyTitle:
                "Centro de Investigación Científica de Yucatán",

            cicyRole:
                "Unidad de Materiales · Desarrollo de sistema mecatrónico",

            cicyDescription:
                "Desarrollo e integración de una plataforma automatizada para apoyar procesos experimentales de calibración óptica con el sistema GOM ARAMIS.",

            developmentTitle:
                "Desarrollo multidisciplinario",

            developmentRole:
                "Mecatrónica · Software · Automatización",

            developmentDescription:
                "Desarrollo de soluciones integrando programación, visión artificial, sensores, sistemas embebidos, diseño mecánico e instrumentación.",

            spaceTitle:
                "Sistemas CubeSat",

            spaceRole:
                "Diseño y realización de CubeSats",

            spaceDescription:
                "Capacitación orientada a comprender el diseño, integración y desarrollo de sistemas CubeSat y tecnologías aplicadas a pequeñas plataformas satelitales."
        },

        stack: {
            section: "HABILIDADES Y TECNOLOGÍAS",

            title: `
                Del código al

                <span class="gradient-text">
                    mundo físico.
                </span>
            `,

            software: "Software",
            vision: "Visión e IA",
            electronics: "Electrónica",
            engineering: "Ingeniería"
        },

        github: {
            label: "CÓDIGO FUENTE",

            title:
                "También puedes ver lo que estoy construyendo.",

            description:
                "Proyectos, experimentos y desarrollo de software disponibles en mi perfil de GitHub."
        },

        contact: {
            label: "CONSTRUYAMOS ALGO",

            title: `
                Hagamos algo

                <span class="gradient-text">
                    increíble.
                </span>
            `,

            description:
                "Abierto a oportunidades profesionales, proyectos de ingeniería, colaboración tecnológica e investigación."
        },

        footer: {
            portfolio: "/ PORTAFOLIO",
            degree: "INGENIERÍA MECATRÓNICA",
            back: "VOLVER ARRIBA"
        },

        modal: {
            objective: "OBJETIVO",
            technologies: "TECNOLOGÍAS",
            close: "Cerrar"
        }
    },


    /* ========================================================
       ENGLISH
    ======================================================== */

    en: {

        document: {
            title:
                "Joshua Góngora | Mechatronics Engineering Portfolio",

            description:
                "Professional portfolio of Joshua Emmanuel Góngora Álvarez, a Mechatronics Engineering student focused on automation, computer vision, software, robotics and technological development."
        },

        nav: {
            about: "About me",
            projects: "Projects",
            awards: "Recognition",
            stack: "Skills",
            contact: "Contact"
        },

        hero: {
            status: "Open to new projects",

            title: `
                Engineering to

                <span class="gradient-text">
                    build ideas
                </span>

                that work.
            `,

            description: `
                Mechatronics Engineering student focused on
                developing solutions where

                <strong>
                    software, automation, electronics,
                    computer vision and mechanical design converge.
                </strong>
            `,

            projectsButton: "View my projects",
            scroll: "SCROLL TO EXPLORE"
        },

        profile: {
            profile: "PROFILE",
            discipline: "DISCIPLINE",
            mechatronics: "MECHATRONICS",
            location: "LOCATION",
            focus: "FOCUS",
            mantra: "BUILD · TEST · IMPROVE"
        },

        stats: {
            projects: "Selected<br>projects",
            awards: "Award-winning<br>projects",
            research: "Research<br>experience",
            training: "Technical<br>training"
        },

        about: {
            section: "ABOUT ME",
            miniLabel: "MECHATRONICS ENGINEERING",

            title: `
                I don't just want to

                <span>
                    design it.
                </span>

                I want to build it.
            `,

            main:
                "I am Joshua Emmanuel Góngora Álvarez, and I am interested in turning real-world problems into functional technological systems.",

            paragraph1:
                "My approach combines different engineering areas: mechanical design, programming, electronics, sensors, automation and data analysis.",

            paragraph2:
                "I am especially interested in projects where software can interact directly with the physical world.",

            tags: [
                "Robotics",
                "Computer Vision",
                "Automation",
                "Python",
                "Embedded Systems",
                "Flutter",
                "FastAPI",
                "CAD"
            ]
        },

        projects: {
            section: "SELECTED PROJECTS",

            title: `
                Some problems deserve

                <span class="gradient-text">
                    more than just an idea.
                </span>
            `,

            intro:
                "A selection of projects where software, automation, electronics, computer vision, mechanical design and research converge.",

            explore: "Explore project",
            awarded: "Award-winning project",
            development: "IN DEVELOPMENT"
        },

        awards: {

            section:
                "RECOGNITION",

            title: `
                When engineering

                <span class="gradient-text">
                    delivers results.
                </span>
            `,

            intro:
                "Recognition and training completed throughout my university education and technical development.",

            projectAward:
                "Award-winning project",

            kinetechCategory:
                "COMPUTER VISION · BIOMECHANICS",

            aramisCategory:
                "AUTOMATION · RESEARCH",

            cubesatTitle:
                "CubeSat design and development",

            certification:
                "Certification and training",

            cubesatDescription:
                "CubeSat systems design and development",

            cubesatCategory:
                "SPACE SYSTEMS · CUBESAT",

            pythonTitle:
                "100 Days of Code: Python",

            pythonStatus:
                "Course completed",

            pythonDescription:
                "Intensive training in Python programming and software development",

            pythonCategory:
                "PYTHON · PROGRAMMING · DEVELOPMENT",

            javaTitle:
                "Java Bootcamp",

            javaStatus:
                "IN PROGRESS",

            javaDescription:
                "Training in object-oriented programming and software development with Java",

            javaCategory:
                "JAVA · OOP · SOFTWARE DEVELOPMENT"

        },

        experience: {
            section: "SELECTED EXPERIENCE",

            research: "Research",
            development: "Development",
            training: "Training",

            cicyTitle:
                "Yucatán Center for Scientific Research",

            cicyRole:
                "Materials Unit · Mechatronic system development",

            cicyDescription:
                "Development and integration of an automated platform to support optical calibration experiments using the GOM ARAMIS system.",

            developmentTitle:
                "Multidisciplinary development",

            developmentRole:
                "Mechatronics · Software · Automation",

            developmentDescription:
                "Development of solutions integrating programming, computer vision, sensors, embedded systems, mechanical design and instrumentation.",

            spaceTitle:
                "CubeSat Systems",

            spaceRole:
                "CubeSat design and development",

            spaceDescription:
                "Training focused on understanding the design, integration and development of CubeSat systems and technologies applied to small satellite platforms."
        },

        stack: {
            section: "SKILLS & TECHNOLOGIES",

            title: `
                From code to the

                <span class="gradient-text">
                    physical world.
                </span>
            `,

            software: "Software",
            vision: "Vision & AI",
            electronics: "Electronics",
            engineering: "Engineering"
        },

        github: {
            label: "SOURCE CODE",

            title:
                "You can also see what I'm building.",

            description:
                "Projects, experiments and software development available on my GitHub profile."
        },

        contact: {
            label: "LET'S BUILD SOMETHING",

            title: `
                Let's build something

                <span class="gradient-text">
                    incredible.
                </span>
            `,

            description:
                "Open to professional opportunities, engineering projects, technology collaboration and research."
        },

        footer: {
            portfolio: "/ PORTFOLIO",
            degree: "MECHATRONICS ENGINEERING",
            back: "BACK TO TOP"
        },

        modal: {
            objective: "OBJECTIVE",
            technologies: "TECHNOLOGIES",
            close: "Close"
        }
    }
};


/* ============================================================
   PROJECT DATA
============================================================ */

const projectData = {

    /* ========================================================
       01 - KINETECH
    ======================================================== */

    kinetech: {

        es: {
            category:
                "VISIÓN POR COMPUTADORA / BIOMECÁNICA",

            title:
                "KineTech",

            cardCategory:
                "VISIÓN POR COMPUTADORA · BIOMECÁNICA",

            cardDescription:
                "Sistema inteligente para evaluación biomecánica y medición del rango de movimiento (ROM).",

            cardTags: [
                "Python",
                "FastAPI",
                "MediaPipe",
                "JavaScript"
            ],

            description:
                "KineTech es un software orientado a la evaluación biomecánica mediante visión artificial. El sistema utiliza detección de pose para identificar puntos anatómicos, calcular ángulos articulares y realizar mediciones de rango de movimiento en tiempo real.",

            objective:
                "Crear una herramienta tecnológica que apoye el trabajo de fisioterapeutas mediante análisis automático de postura y movimiento, permitiendo realizar evaluaciones de rango de movimiento de una forma visual e interactiva.",

            technologies: [
                "Python",
                "FastAPI",
                "JavaScript",
                "MediaPipe",
                "Visión por computadora",
                "HTML",
                "CSS"
            ]
        },

        en: {
            category:
                "COMPUTER VISION / BIOMECHANICS",

            title:
                "KineTech",

            cardCategory:
                "COMPUTER VISION · BIOMECHANICS",

            cardDescription:
                "Intelligent system for biomechanical assessment and range-of-motion (ROM) measurement.",

            cardTags: [
                "Python",
                "FastAPI",
                "MediaPipe",
                "JavaScript"
            ],

            description:
                "KineTech is a software for biomechanical assessment using computer vision. The system uses pose detection to identify anatomical landmarks, calculate joint angles and measure range of motion in real time.",

            objective:
                "Develop a technological tool that supports physical therapists through automatic posture and movement analysis, enabling visual and interactive range-of-motion assessments.",

            technologies: [
                "Python",
                "FastAPI",
                "JavaScript",
                "MediaPipe",
                "Computer Vision",
                "HTML",
                "CSS"
            ]
        }
    },


    /* ========================================================
       02 - GOM ARAMIS
    ======================================================== */

    aramis: {

        es: {
            category:
                "INVESTIGACIÓN / AUTOMATIZACIÓN / CICY",

            title:
                "Sistema de calibración GOM ARAMIS",

            cardCategory:
                "INVESTIGACIÓN · AUTOMATIZACIÓN · CICY",

            cardDescription:
                "Sistema mecatrónico desarrollado para automatizar la rutina de calibración de un equipo de correlación digital de imágenes.",

            cardTags: [
                "Arduino Mega",
                "C#",
                "C++",
                "CAD"
            ],

            description:
                "Sistema mecatrónico desarrollado durante actividades de investigación en el Centro de Investigación Científica de Yucatán. La plataforma automatiza el movimiento del panel utilizado durante el proceso de calibración de un sistema óptico GOM ARAMIS 5M LT.",

            objective:
                "Automatizar la manipulación del panel de calibración mediante una plataforma mecánica controlada electrónicamente, buscando mejorar la repetibilidad y facilitar el procedimiento experimental.",

            technologies: [
                "Arduino Mega",
                "Motores paso a paso",
                "Diseño mecánico"
            ]
        },

        en: {
            category:
                "RESEARCH / AUTOMATION / CICY",

            title:
                "GOM ARAMIS Calibration System",

            cardCategory:
                "RESEARCH · AUTOMATION · CICY",

            cardDescription:
                "Mechatronic system developed to automate the calibration routine for digital image correlation equipment.",

            cardTags: [
                "Arduino Mega",
                "C#",
                "C++",
                "CAD"
            ],

            description:
                "A mechatronic system developed during research activities at the Yucatán Center for Scientific Research. The platform automates the movement of the calibration panel used with a GOM ARAMIS 5M LT optical measurement system.",

            objective:
                "Automate calibration-panel manipulation through an electronically controlled mechanical platform to improve repeatability and facilitate the experimental procedure.",

            technologies: [
                "Arduino Mega",
                "Stepper Motors",
                "Mechanical Design"
            ]
        }
    },


    /* ========================================================
       03 - MONT & CO.
    ======================================================== */

    montco: {

        es: {
            category:
                "FLUTTER / SOFTWARE DE GESTIÓN",

            title:
                "MONT & CO.",

            cardCategory:
                "FLUTTER · SOFTWARE DE GESTIÓN",

            cardDescription:
                "Sistema integral diseñado para digitalizar y centralizar la operación de una florería.",

            cardTags: [
                "Flutter",
                "Dart",
                "SQLite",
                "Drift"
            ],

            description:
                "Sistema desarrollado para digitalizar y centralizar la operación de una florería. La aplicación permite gestionar pedidos, clientes, destinatarios y pagos desde una interfaz diseñada específicamente alrededor del flujo de trabajo del negocio.",

            objective:
                "Reducir procesos administrativos manuales y centralizar la operación mediante una aplicación rápida y escalable, preparada para integrar posteriormente inventarios, recetas y análisis de utilidad.",

            technologies: [
                "Flutter",
                "Dart",
                "Drift",
                "SQLite",
                "Provider",
                "GoRouter"
            ]
        },

        en: {
            category:
                "FLUTTER / BUSINESS SOFTWARE",

            title:
                "MONT & CO.",

            cardCategory:
                "FLUTTER · BUSINESS SOFTWARE",

            cardDescription:
                "Integrated system designed to digitize and centralize the operation of a flower shop.",

            cardTags: [
                "Flutter",
                "Dart",
                "SQLite",
                "Drift"
            ],

            description:
                "A system developed to digitize and centralize flower-shop operations. The application manages orders, customers, recipients and payments through an interface specifically designed around the business workflow.",

            objective:
                "Reduce manual administrative processes and centralize operations through a fast and scalable application prepared for future inventory, recipe and profit-analysis features.",

            technologies: [
                "Flutter",
                "Dart",
                "Drift",
                "SQLite",
                "Provider",
                "GoRouter"
            ]
        }
    },


    /* ========================================================
       04 - NEUROSILLA
    ======================================================== */

    neurosilla: {

        es: {
            category:
                "TECNOLOGÍA ASISTIVA / BIOSEÑALES",

            title:
                "NeuroSilla",

            cardCategory:
                "TECNOLOGÍA ASISTIVA · BIOSEÑALES",

            cardDescription:
                "Investigación de una interfaz alternativa para controlar una silla de ruedas mediante señales biológicas.",

            cardTags: [
                "Python",
                "Bioseñales",
                "Procesamiento de señales",
                "Sistemas embebidos"
            ],

            description:
                "Proyecto actualmente en investigación y desarrollo enfocado en crear una interfaz alternativa para controlar una silla de ruedas mediante la adquisición y procesamiento de señales biológicas.",

            objective:
                "Investigar e integrar sensores, procesamiento digital de señales, sistemas embebidos y control para desarrollar una plataforma experimental de movilidad asistida.",

            technologies: [
                "Python",
                "Bioseñales",
                "Procesamiento de señales",
                "Sistemas embebidos",
                "Electrónica",
                "Control"
            ]
        },

        en: {
            category:
                "ASSISTIVE TECHNOLOGY / BIOSIGNALS",

            title:
                "NeuroSilla",

            cardCategory:
                "ASSISTIVE TECHNOLOGY · BIOSIGNALS",

            cardDescription:
                "Research into an alternative interface for controlling a wheelchair through biological signals.",

            cardTags: [
                "Python",
                "Biosignals",
                "Signal Processing",
                "Embedded Systems"
            ],

            description:
                "A project currently under research and development focused on creating an alternative interface for controlling a wheelchair through the acquisition and processing of biological signals.",

            objective:
                "Research and integrate sensors, digital signal processing, embedded systems and control to develop an experimental assisted-mobility platform.",

            technologies: [
                "Python",
                "Biosignals",
                "Signal Processing",
                "Embedded Systems",
                "Electronics",
                "Control"
            ]
        }
    },


    /* ========================================================
       05 - SISTEMA EMBEBIDO DE INTERFACES DIGITALES
    ======================================================== */

    "sistema-embebido": {

        es: {
            category:
                "SISTEMAS EMBEBIDOS / INTERFACES DIGITALES",

            title:
                "Sistema embebido de interfaces digitales",

            cardCategory:
                "SISTEMAS EMBEBIDOS · INTERFACES DIGITALES",

            cardDescription:
                "Sistema interactivo con autenticación, navegación por joystick, control pan-tilt y barra de LEDs mediante lógica de estados.",

            cardTags: [
                "LCD",
                "Teclado matricial",
                "Joystick",
                "Servomotores"
            ],

            description:
                "Sistema embebido interactivo que integra pantalla LCD, teclado matricial, joystick, dos servomotores y una barra de LEDs dentro de una interfaz de control basada en estados. Incluye autenticación por contraseña, navegación entre modos y control proporcional pan-tilt.",

            objective:
                "Integrar distintos periféricos dentro de una sola lógica de operación para construir una interfaz funcional de control y navegación mediante programación estructurada y una máquina de estados.",

            technologies: [
                "Pantalla LCD",
                "Teclado matricial",
                "Joystick",
                "Servomotores",
                "Barra de LEDs",
                "Máquina de estados",
                "Programación estructurada"
            ]
        },

        en: {
            category:
                "EMBEDDED SYSTEMS / DIGITAL INTERFACES",

            title:
                "Digital Interfaces Embedded System",

            cardCategory:
                "EMBEDDED SYSTEMS · DIGITAL INTERFACES",

            cardDescription:
                "Interactive system with authentication, joystick navigation, pan-tilt control and an LED bar using state-based logic.",

            cardTags: [
                "LCD",
                "Matrix Keypad",
                "Joystick",
                "Servomotors"
            ],

            description:
                "Interactive embedded system integrating an LCD, matrix keypad, joystick, two servomotors and an LED bar into a state-based control interface. It includes password authentication, mode navigation and proportional pan-tilt control.",

            objective:
                "Integrate multiple peripherals into a single operating logic to build a functional control and navigation interface using structured programming and a state machine.",

            technologies: [
                "LCD",
                "Matrix Keypad",
                "Joystick",
                "Servomotors",
                "LED Bar",
                "State Machine",
                "Structured Programming"
            ]
        }
    },


    /* ========================================================
       06 - ENSACADORA DELTA
    ======================================================== */

    "ensacadora-delta": {

        es: {
            category:
                "AUTOMATIZACIÓN INDUSTRIAL / PLC",

            title:
                "Rehabilitación de sistema de ensacado",

            cardCategory:
                "AUTOMATIZACIÓN INDUSTRIAL · PLC",

            cardDescription:
                "Rehabilitación del control de una ensacadora mediante PLC, variador de frecuencia y HMI Delta.",

            cardTags: [
                "PLC Delta",
                "VFD Delta",
                "HMI Delta",
                "Automatización"
            ],

            description:
                "Proyecto de rehabilitación y puesta en operación de una ensacadora mediante la integración de un PLC Delta, un variador de frecuencia Delta y una HMI Delta para recuperar el control, supervisión y operación del sistema.",

            objective:
                "Restablecer la funcionalidad del sistema de ensacado y centralizar la secuencia de control, el accionamiento del motor y la interacción del operador mediante tecnología de automatización Delta.",

            technologies: [
                "PLC Delta",
                "VFD Delta",
                "HMI Delta",
                "Automatización industrial",
                "Control de motores",
                "Interfaz HMI"
            ]
        },

        en: {
            category:
                "INDUSTRIAL AUTOMATION / PLC",

            title:
                "Bagging System Rehabilitation",

            cardCategory:
                "INDUSTRIAL AUTOMATION · PLC",

            cardDescription:
                "Rehabilitation of a bagging machine control system using a Delta PLC, VFD and HMI.",

            cardTags: [
                "Delta PLC",
                "Delta VFD",
                "Delta HMI",
                "Automation"
            ],

            description:
                "Rehabilitation and commissioning project for a bagging machine through the integration of a Delta PLC, Delta variable-frequency drive and Delta HMI to recover system control, supervision and operation.",

            objective:
                "Restore the functionality of the bagging system and centralize the control sequence, motor drive operation and operator interaction using Delta automation technology.",

            technologies: [
                "Delta PLC",
                "Delta VFD",
                "Delta HMI",
                "Industrial Automation",
                "Motor Control",
                "HMI"
            ]
        }
    },


    /* ========================================================
       07 - BANDA TRANSPORTADORA FPGA
    ======================================================== */

    "banda-fpga": {

        es: {
            category:
                "FPGA / AUTOMATIZACIÓN",

            title:
                "Banda transportadora con FPGA",

            cardCategory:
                "FPGA · AUTOMATIZACIÓN",

            cardDescription:
                "Prototipo a pequeña escala controlado con FPGA y sensores IR para detección y secuenciamiento del transporte.",

            cardTags: [
                "FPGA",
                "Sensores IR",
                "Lógica digital",
                "Automatización"
            ],

            description:
                "Prototipo a pequeña escala de una banda transportadora controlada mediante FPGA e instrumentada con sensores infrarrojos para detectar objetos y coordinar la secuencia de operación del sistema.",

            objective:
                "Implementar una solución de control digital que integre lógica programable y sensado infrarrojo para automatizar el movimiento y la detección de objetos sobre una banda transportadora.",

            technologies: [
                "FPGA",
                "Sensores IR",
                "Lógica digital",
                "Automatización",
                "Sistemas digitales"
            ]
        },

        en: {
            category:
                "FPGA / AUTOMATION",

            title:
                "FPGA Conveyor Belt",

            cardCategory:
                "FPGA · AUTOMATION",

            cardDescription:
                "Small-scale conveyor prototype controlled with an FPGA and IR sensors for detection and transport sequencing.",

            cardTags: [
                "FPGA",
                "IR Sensors",
                "Digital Logic",
                "Automation"
            ],

            description:
                "Small-scale conveyor-belt prototype controlled by an FPGA and instrumented with infrared sensors to detect objects and coordinate the system operating sequence.",

            objective:
                "Implement a digital control solution that integrates programmable logic and infrared sensing to automate object movement and detection on a conveyor belt.",

            technologies: [
                "FPGA",
                "IR Sensors",
                "Digital Logic",
                "Automation",
                "Digital Systems"
            ]
        }
    },
    
    /* ========================================================
    08 - DISCO DE GRAY
    ======================================================== */

    "disco-gray": {

        es: {

            category:
                "FPGA / CÓDIGO GRAY / CONTROL DE POSICIÓN",

            title:
                "Codificador de posición con disco Gray",

            cardCategory:
                "FPGA · CÓDIGO GRAY · CONTROL DE POSICIÓN",

            cardDescription:
                "Sistema de control de posición implementado en FPGA mediante código Gray, sensores infrarrojos y control de motor.",

            cardTags: [
                "FPGA",
                "Verilog HDL",
                "Código Gray",
                "Sensores IR"
            ],

            description:
                "Sistema digital de control de posición desarrollado sobre FPGA. El prototipo utiliza un disco codificado en Gray y cuatro sensores infrarrojos para identificar la posición angular del eje. La información obtenida se procesa mediante lógica implementada en Verilog HDL y se visualiza utilizando LEDs y displays de 7 segmentos.",

            objective:
                "Diseñar un sistema capaz de determinar y controlar la posición de un eje mediante codificación absoluta en código Gray, comparando la posición deseada con la posición detectada por sensores infrarrojos para controlar automáticamente el movimiento del motor.",

            technologies: [
                "FPGA",
                "Verilog HDL",
                "Código Gray",
                "Sensores infrarrojos",
                "Displays de 7 segmentos",
                "Control de motor",
                "Electrónica digital"
            ]

        },


        en: {

            category:
                "FPGA / GRAY CODE / POSITION CONTROL",

            title:
                "Gray Code Position Encoder",

            cardCategory:
                "FPGA · GRAY CODE · POSITION CONTROL",

            cardDescription:
                "FPGA-based position control system using Gray code, infrared sensors and motor control.",

            cardTags: [
                "FPGA",
                "Verilog HDL",
                "Gray Code",
                "IR Sensors"
            ],

            description:
                "Digital position control system developed on an FPGA. The prototype uses a Gray-coded disk and four infrared sensors to determine the angular position of the shaft. The acquired information is processed through logic implemented in Verilog HDL and displayed using LEDs and seven-segment displays.",

            objective:
                "Design a system capable of determining and controlling shaft position using absolute Gray-code encoding, comparing the desired position with the position detected by infrared sensors to automatically control motor movement.",

            technologies: [
                "FPGA",
                "Verilog HDL",
                "Gray Code",
                "Infrared Sensors",
                "Seven-Segment Displays",
                "Motor Control",
                "Digital Electronics"
            ]

        }

    }
};


/* ============================================================
   DOM ELEMENTS
============================================================ */

const header =
    document.getElementById("header");

const menuButton =
    document.getElementById("menuButton");

const nav =
    document.getElementById("nav");

const cursorGlow =
    document.getElementById("cursorGlow");

const languageToggle =
    document.getElementById("languageToggle");

const languageToggleText =
    document.getElementById("languageToggleText");

const modal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const modalCategory =
    document.getElementById("modalCategory");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalObjective =
    document.getElementById("modalObjective");

const modalTechnologies =
    document.getElementById("modalTechnologies");


/* ============================================================
   SAFE DOM HELPERS
============================================================ */

function setText(selector, value) {

    const element =
        document.querySelector(selector);

    if (!element) {
        return;
    }

    element.textContent = value;
}


function setHTML(selector, value) {

    const element =
        document.querySelector(selector);

    if (!element) {
        return;
    }

    element.innerHTML = value;
}


/* ============================================================
   UPDATE PROJECT CARDS
============================================================ */

function updateProjectCards() {

    const keys = [
        "kinetech",
        "aramis",
        "montco",
        "neurosilla",
        "sistema-embebido",
        "ensacadora-delta",
        "banda-fpga",
        "disco-gray"
    ];


    keys.forEach(projectKey => {

        const translatedProject =
            projectData[projectKey]?.[currentLanguage];

        const card =
            document.querySelector(
                `.project[data-project="${projectKey}"]`
            );


        if (!translatedProject || !card) {
            return;
        }


        const category =
            card.querySelector(
                ".project-card-category"
            );

        const title =
            card.querySelector(
                ".project-card-content h3"
            );

        const description =
            card.querySelector(
                ".project-card-content > p"
            );

        const stack =
            card.querySelector(
                ".project-card-stack"
            );

        const button =
            card.querySelector(
                ".project-button"
            );

        const image =
            card.querySelector(
                ".project-card-cover"
            );


        if (category) {
            category.textContent =
                translatedProject.cardCategory;
        }


        if (title) {
            title.textContent =
                translatedProject.title;
        }


        if (description) {
            description.textContent =
                translatedProject.cardDescription;
        }


        if (stack) {

            stack.innerHTML = "";

            translatedProject.cardTags.forEach(
                technology => {

                    const span =
                        document.createElement("span");

                    span.textContent =
                        technology;

                    stack.appendChild(span);
                }
            );
        }


        if (button) {

            button.innerHTML = `
                ${
                    translations[currentLanguage]
                        .projects.explore
                }

                <i class="fa-solid fa-arrow-up-right-from-square"></i>
            `;
        }


        if (image) {

            image.alt =
                currentLanguage === "es"
                    ? `Proyecto: ${translatedProject.title}`
                    : `Project: ${translatedProject.title}`;
        }
    });


    /* ========================================================
       BADGES DE PROYECTOS PREMIADOS
    ======================================================== */

    document
        .querySelectorAll(
            ".project-card-badge.award"
        )
        .forEach(badge => {

            badge.innerHTML = `
                <i class="fa-solid fa-trophy"></i>

                ${
                    translations[currentLanguage]
                        .projects.awarded
                }
            `;
        });


    /* ========================================================
       BADGE EN DESARROLLO
    ======================================================== */

    const developmentBadge =
        document.querySelector(
            ".project-card-badge.development"
        );


    if (developmentBadge) {

        developmentBadge.innerHTML = `
            <span class="development-dot"></span>

            ${
                translations[currentLanguage]
                    .projects.development
            }
        `;
    }
}


/* ============================================================
   APPLY LANGUAGE
============================================================ */

function applyLanguage(language) {

    currentLanguage =
        language === "en"
            ? "en"
            : "es";


    const t =
        translations[currentLanguage];


    /* ========================================================
       DOCUMENT
    ======================================================== */

    document.documentElement.lang =
        currentLanguage;

    document.title =
        t.document.title;


    const metaDescription =
        document.querySelector(
            'meta[name="description"]'
        );


    if (metaDescription) {

        metaDescription.setAttribute(
            "content",
            t.document.description
        );
    }


    /* ========================================================
       LANGUAGE BUTTON
    ======================================================== */

    if (languageToggleText) {

        languageToggleText.textContent =
            currentLanguage === "es"
                ? "EN · English"
                : "ES · Español";
    }


    if (languageToggle) {

        languageToggle.setAttribute(
            "aria-label",
            currentLanguage === "es"
                ? "Cambiar a inglés"
                : "Switch to Spanish"
        );
    }


    /* ========================================================
       NAVIGATION
    ======================================================== */

    setText(
        '.nav-link[href="#sobre-mi"]',
        t.nav.about
    );

    setText(
        '.nav-link[href="#proyectos"]',
        t.nav.projects
    );

    setText(
        '.nav-link[href="#reconocimientos"]',
        t.nav.awards
    );

    setText(
        '.nav-link[href="#habilidades"]',
        t.nav.stack
    );

    setHTML(
        ".nav-contact",
        `
            ${t.nav.contact}
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
        `
    );


    /* ========================================================
       HERO
    ======================================================== */

    setHTML(
        ".status-pill",
        `
            <span class="status-dot"></span>
            ${t.hero.status}
        `
    );

    setHTML(
        ".hero h1",
        t.hero.title
    );

    setHTML(
        ".hero-description",
        t.hero.description
    );

    setHTML(
        ".hero-buttons .button-primary",
        `
            ${t.hero.projectsButton}
            <i class="fa-solid fa-arrow-down"></i>
        `
    );

    setHTML(
        '.hero-links a[href="#contacto"]',
        `
            ${t.nav.contact}
            <i class="fa-solid fa-arrow-right"></i>
        `
    );

    setHTML(
        ".profile-tech-label",
        `
            <span>
                ${t.profile.profile}
            </span>

            01
        `
    );

    setText(
        ".profile-data > div:nth-child(1) span",
        t.profile.discipline
    );

    setText(
        ".profile-data > div:nth-child(1) strong",
        t.profile.mechatronics
    );

    setText(
        ".profile-data > div:nth-child(2) span",
        t.profile.location
    );

    setText(
        ".profile-floating-card small",
        t.profile.focus
    );

    setText(
        ".profile-floating-card strong",
        t.profile.mantra
    );

    setText(
        ".hero-scroll span",
        t.hero.scroll
    );


    /* ========================================================
       STATS
    ======================================================== */

    setHTML(
        ".stat:nth-child(1) .stat-text",
        t.stats.projects
    );

    setHTML(
        ".stat:nth-child(2) .stat-text",
        t.stats.awards
    );

    setHTML(
        ".stat:nth-child(3) .stat-text",
        t.stats.research
    );

    setHTML(
        ".stat:nth-child(4) .stat-text",
        t.stats.training
    );


    /* ========================================================
       ABOUT
    ======================================================== */

    setHTML(
        "#sobre-mi .section-label",
        `
            <span>01</span>
            ${t.about.section}
        `
    );

    setText(
        "#sobre-mi .mini-label",
        t.about.miniLabel
    );

    setHTML(
        "#sobre-mi .about-title h2",
        t.about.title
    );

    setText(
        "#sobre-mi .about-main",
        t.about.main
    );

    setText(
        "#sobre-mi .about-content > p:nth-of-type(2)",
        t.about.paragraph1
    );

    setText(
        "#sobre-mi .about-content > p:nth-of-type(3)",
        t.about.paragraph2
    );


    const aboutTags =
        document.querySelectorAll(
            "#sobre-mi .about-tags span"
        );


    aboutTags.forEach(
        (tag, index) => {

            if (t.about.tags[index]) {
                tag.textContent =
                    t.about.tags[index];
            }
        }
    );


    /* ========================================================
       PROJECTS
    ======================================================== */

    setHTML(
        "#proyectos .section-label",
        `
            <span>02</span>
            ${t.projects.section}
        `
    );

    setHTML(
        "#proyectos .section-title",
        t.projects.title
    );

    setText(
        "#proyectos .projects-intro",
        t.projects.intro
    );

    updateProjectCards();


    /* ========================================================
       AWARDS
    ======================================================== */

    setHTML(
        "#reconocimientos .section-label",
        `
            <span>03</span>
            ${t.awards.section}
        `
    );

    setHTML(
        "#reconocimientos .recognition-heading h2",
        t.awards.title
    );

    setText(
        "#reconocimientos .recognition-heading p",
        t.awards.intro
    );

    setText(
        "#reconocimientos .award-card:nth-child(1) p",
        t.awards.projectAward
    );

    setText(
        "#reconocimientos .award-card:nth-child(1) .award-category",
        t.awards.kinetechCategory
    );

    setText(
        "#reconocimientos .award-card:nth-child(2) p",
        t.awards.projectAward
    );

    setText(
        "#reconocimientos .award-card:nth-child(2) .award-category",
        t.awards.aramisCategory
    );

    setText(
        "#reconocimientos .award-card:nth-child(3) h3",
        t.awards.cubesatTitle
    );

    setText(
        "#reconocimientos .award-card:nth-child(3) p",
        t.awards.certification
    );

    setText(
        "#reconocimientos .award-card:nth-child(3) strong",
        t.awards.cubesatDescription
    );

    setText(
        "#reconocimientos .award-card:nth-child(3) .award-category",
        t.awards.cubesatCategory
    );
    /* ========================================================
    PYTHON COURSE
    ======================================================== */

    setText(
        "#reconocimientos .award-card:nth-child(4) h3",
        t.awards.pythonTitle
    );

    setText(
        "#reconocimientos .award-card:nth-child(4) p",
        t.awards.pythonStatus
    );

    setText(
        "#reconocimientos .award-card:nth-child(4) strong",
        t.awards.pythonDescription
    );

    setText(
        "#reconocimientos .award-card:nth-child(4) .award-category",
        t.awards.pythonCategory
    );


    /* ========================================================
    JAVA BOOTCAMP
    ======================================================== */

    setText(
        "#reconocimientos .award-card:nth-child(5) h3",
        t.awards.javaTitle
    );

    setHTML(
        "#reconocimientos .award-card:nth-child(5) .training-progress",
        `
            <span class="training-progress-dot"></span>
            ${t.awards.javaStatus}
        `
    );

    setText(
        "#reconocimientos .award-card:nth-child(5) strong",
        t.awards.javaDescription
    );

    setText(
        "#reconocimientos .award-card:nth-child(5) .award-category",
        t.awards.javaCategory
    );


    /* ========================================================
       EXPERIENCE
    ======================================================== */

    setHTML(
        ".timeline-section .section-label",
        `
            <span>04</span>
            ${t.experience.section}
        `
    );


    /* CICY */

    setText(
        ".timeline-item:nth-child(1) .timeline-date",
        t.experience.research
    );

    setText(
        ".timeline-item:nth-child(1) .timeline-content h3",
        t.experience.cicyTitle
    );

    setText(
        ".timeline-item:nth-child(1) .timeline-role",
        t.experience.cicyRole
    );

    setText(
        ".timeline-item:nth-child(1) .timeline-content > p:last-child",
        t.experience.cicyDescription
    );


    /* MULTIDISCIPLINARY */

    setText(
        ".timeline-item:nth-child(2) .timeline-date",
        t.experience.development
    );

    setText(
        ".timeline-item:nth-child(2) .timeline-content h3",
        t.experience.developmentTitle
    );

    setText(
        ".timeline-item:nth-child(2) .timeline-role",
        t.experience.developmentRole
    );

    setText(
        ".timeline-item:nth-child(2) .timeline-content > p:last-child",
        t.experience.developmentDescription
    );


    /* CUBESAT */

    setText(
        ".timeline-item:nth-child(3) .timeline-date",
        t.experience.training
    );

    setText(
        ".timeline-item:nth-child(3) .timeline-content h3",
        t.experience.spaceTitle
    );

    setText(
        ".timeline-item:nth-child(3) .timeline-role",
        t.experience.spaceRole
    );

    setText(
        ".timeline-item:nth-child(3) .timeline-content > p:last-child",
        t.experience.spaceDescription
    );


    /* ========================================================
       STACK
    ======================================================== */

    setHTML(
        "#habilidades .section-label",
        `
            <span>05</span>
            ${t.stack.section}
        `
    );

    setHTML(
        "#habilidades .skills-header h2",
        t.stack.title
    );

    setText(
        "#habilidades .skill-column:nth-child(1) h3",
        t.stack.software
    );

    setText(
        "#habilidades .skill-column:nth-child(2) h3",
        t.stack.vision
    );

    setText(
        "#habilidades .skill-column:nth-child(3) h3",
        t.stack.electronics
    );

    setText(
        "#habilidades .skill-column:nth-child(4) h3",
        t.stack.engineering
    );


    /* VISIÓN / IA */

    setText(
        "#habilidades .skill-column:nth-child(2) li:nth-child(3)",
        currentLanguage === "es"
            ? "Visión por computadora"
            : "Computer Vision"
    );

    setText(
        "#habilidades .skill-column:nth-child(2) li:nth-child(4)",
        currentLanguage === "es"
            ? "Procesamiento de señales"
            : "Signal Processing"
    );


    /* ELECTRÓNICA */

    setText(
        "#habilidades .skill-column:nth-child(3) li:nth-child(6)",
        currentLanguage === "es"
            ? "Sensores"
            : "Sensors"
    );


    /* INGENIERÍA */

    setText(
        "#habilidades .skill-column:nth-child(4) li:nth-child(2)",
        currentLanguage === "es"
            ? "Diseño mecánico"
            : "Mechanical Design"
    );

    setText(
        "#habilidades .skill-column:nth-child(4) li:nth-child(3)",
        currentLanguage === "es"
            ? "Automatización"
            : "Automation"
    );

    setText(
        "#habilidades .skill-column:nth-child(4) li:nth-child(4)",
        currentLanguage === "es"
            ? "Impresión 3D"
            : "3D Printing"
    );

    setText(
        "#habilidades .skill-column:nth-child(4) li:nth-child(5)",
        currentLanguage === "es"
            ? "Instrumentación"
            : "Instrumentation"
    );


    /* ========================================================
       GITHUB
    ======================================================== */

    setText(
        ".github-content > span",
        t.github.label
    );

    setText(
        ".github-content h3",
        t.github.title
    );

    setText(
        ".github-content p",
        t.github.description
    );


    /* ========================================================
       CONTACT
    ======================================================== */

    setText(
        ".cta-small",
        t.contact.label
    );

    setHTML(
        ".cta-content h2",
        t.contact.title
    );

    setText(
        ".cta-content > p",
        t.contact.description
    );


    /* ========================================================
       FOOTER
    ======================================================== */

    setText(
        ".footer > div:nth-child(1) span",
        t.footer.portfolio
    );


    const footerMiddle =
        document.querySelector(
            ".footer > div:nth-child(2)"
        );


    if (footerMiddle) {

        footerMiddle.innerHTML = `
            ${t.footer.degree} ·

            <span id="currentYear">
                ${new Date().getFullYear()}
            </span>
        `;
    }


    setHTML(
        '.footer a[href="#inicio"]',
        `
            ${t.footer.back}
            <i class="fa-solid fa-arrow-up"></i>
        `
    );


    /* ========================================================
       MODAL
    ======================================================== */

    setText(
        ".modal-grid > div:nth-child(1) .modal-label",
        t.modal.objective
    );

    setText(
        ".modal-grid > div:nth-child(2) .modal-label",
        t.modal.technologies
    );


    if (modalClose) {

        modalClose.setAttribute(
            "aria-label",
            t.modal.close
        );
    }



    if (
        activeProjectKey &&
        modal?.classList.contains("active")
    ) {

        populateProjectModal(
            activeProjectKey
        );
    }
}


/* ============================================================
   LANGUAGE BUTTON
============================================================ */

if (languageToggle) {

    languageToggle.addEventListener(
        "click",
        () => {

            const nextLanguage =
                currentLanguage === "es"
                    ? "en"
                    : "es";

            applyLanguage(nextLanguage);
        }
    );
}


/* ============================================================
   CURRENT YEAR
============================================================ */

const currentYearElement =
    document.getElementById(
        "currentYear"
    );


if (currentYearElement) {

    currentYearElement.textContent =
        new Date().getFullYear();
}


/* ============================================================
   HEADER SCROLL
============================================================ */

window.addEventListener(
    "scroll",
    () => {

        if (!header) {
            return;
        }


        if (window.scrollY > 40) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );
        }
    }
);


/* ============================================================
   MOBILE MENU
============================================================ */

if (menuButton && nav) {

    menuButton.addEventListener(
        "click",
        () => {

            nav.classList.toggle(
                "open"
            );

            menuButton.classList.toggle(
                "active"
            );
        }
    );
}


document
    .querySelectorAll(
        ".nav a"
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                nav?.classList.remove(
                    "open"
                );

                menuButton?.classList.remove(
                    "active"
                );
            }
        );
    });


/* ============================================================
   CURSOR GLOW
============================================================ */

if (
    cursorGlow &&
    window
        .matchMedia(
            "(pointer: fine)"
        )
        .matches
) {

    window.addEventListener(
        "mousemove",
        event => {

            cursorGlow.style.left =
                `${event.clientX}px`;

            cursorGlow.style.top =
                `${event.clientY}px`;
        }
    );
}


/* ============================================================
   REVEAL DE ELEMENTOS
============================================================ */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );
                    }
                });
            },

            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(
            element
        );
    });

} else {

    revealElements.forEach(element => {

        element.classList.add(
            "visible"
        );
    });
}


/* ============================================================
   PROJECT MODAL
============================================================ */

const projectButtons =
    document.querySelectorAll(
        ".project-button"
    );


projectButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const project =
                button.closest(
                    ".project"
                );


            if (!project) {
                return;
            }


            const projectKey =
                project.dataset.project;


            openProject(
                projectKey
            );
        }
    );
});


/* ============================================================
   POPULATE MODAL
============================================================ */

function populateProjectModal(
    projectKey
) {

    const project =
        projectData[projectKey];


    if (!project) {
        return;
    }


    const translatedProject =
        project[currentLanguage];


    if (!translatedProject) {
        return;
    }


    if (modalCategory) {

        modalCategory.textContent =
            translatedProject.category;
    }


    if (modalTitle) {

        modalTitle.textContent =
            translatedProject.title;
    }


    if (modalDescription) {

        modalDescription.textContent =
            translatedProject.description;
    }


    if (modalObjective) {

        modalObjective.textContent =
            translatedProject.objective;
    }


    if (modalTechnologies) {

        modalTechnologies.innerHTML =
            "";


        translatedProject
            .technologies
            .forEach(technology => {

                const span =
                    document.createElement(
                        "span"
                    );

                span.textContent =
                    technology;

                modalTechnologies.appendChild(
                    span
                );
            });
    }
}


/* ============================================================
   OPEN PROJECT
============================================================ */

function openProject(
    projectKey
) {

    if (
        !projectData[projectKey] ||
        !modal
    ) {
        return;
    }


    activeProjectKey =
        projectKey;


    populateProjectModal(
        projectKey
    );


    modal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";
}


/* ============================================================
   CLOSE MODAL
============================================================ */

function closeModal() {

    if (!modal) {
        return;
    }


    modal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";


    activeProjectKey =
        null;
}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );
}


const modalOverlay =
    modal?.querySelector(
        ".modal-overlay"
    );


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeModal
    );
}


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal?.classList.contains(
                "active"
            )
        ) {

            closeModal();
        }
    }
);


/* ============================================================
   NAV SCROLL SPY
============================================================ */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection =
            "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;


            if (
                window.scrollY >=
                sectionTop
            ) {

                currentSection =
                    section.getAttribute(
                        "id"
                    );
            }
        });


        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute(
                    "href"
                ) ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active"
                );
            }
        });
    }
);


/* ============================================================
   PROFILE PARALLAX
============================================================ */

const profileFrame =
    document.querySelector(
        ".profile-frame"
    );


if (
    profileFrame &&
    window
        .matchMedia(
            "(pointer: fine)"
        )
        .matches
) {

    profileFrame.addEventListener(
        "mousemove",
        event => {

            const rect =
                profileFrame
                    .getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const rotateY =
                (
                    x /
                    rect.width -
                    0.5
                ) * 5;


            const rotateX =
                -(
                    y /
                    rect.height -
                    0.5
                ) * 5;


            profileFrame.style.transform = `
                perspective(1200px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
            `;
        }
    );


    profileFrame.addEventListener(
        "mouseleave",
        () => {

            profileFrame.style.transform = `
                perspective(1200px)
                rotateX(0deg)
                rotateY(0deg)
            `;
        }
    );
}


/* ============================================================
   INITIAL LANGUAGE

   LA PÁGINA SIEMPRE INICIA EN ESPAÑOL
============================================================ */

applyLanguage("es");