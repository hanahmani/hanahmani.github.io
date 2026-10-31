/*
 * PORTFOLIO DATA — edit this file to update the site.
 * Text shown to visitors is bilingual: { en: "…", fr: "…" }. A plain string is used for both languages.
 * Rule: only real, confirmed information. Leave a field "" when unknown:
 * the site then shows "to complete" or hides the link instead of inventing it.
 */
window.PORTFOLIO = {

  education: [
    {
      period: { en: "2026 – Present", fr: "2026 – Aujourd'hui" },
      status: { en: "In progress", fr: "En cours" },
      icon: "cap",
      title: { en: "Engineering Degree (Cycle Ingénieur)", fr: "Cycle ingénieur" },
      school: { en: "International Institute of Technology (IIT), Sfax", fr: "Institut International de Technologie (IIT), Sfax" },
      topics: []
    },
    {
      period: "2023 – 2026",
      status: { en: "Obtained · 2026", fr: "Obtenue · 2026" },
      done: true,
      icon: "cap",
      title: { en: "Licence in Software Engineering and Information Systems (GLSI)", fr: "Licence en Génie Logiciel et Systèmes d'Information (GLSI)" },
      school: { en: "International Institute of Technology (IIT), Sfax", fr: "Institut International de Technologie (IIT), Sfax" },
      topics: {
        en: ["Programming", "Software engineering", "Web development", "Databases", "Software design & architecture", "Information systems", "IT project management"],
        fr: ["Programmation", "Génie logiciel", "Développement web", "Bases de données", "Conception et architecture logicielle", "Systèmes d'information", "Gestion de projets informatiques"]
      }
    },
    {
      period: "2023",
      status: { en: "Obtained · 2023", fr: "Obtenu · 2023" },
      done: true,
      icon: "school",
      title: { en: "Baccalaureate", fr: "Baccalauréat" },
      section: "",   // e.g. { en: "Computer Science", fr: "Sciences de l'informatique" } once confirmed
      school: "Lycée Khalij, Sfax",
      topics: []
    }
  ],

  // Complementary training. Unknown fields stay "" → shown as "to complete".
  trainings: [
    {
      icon: "rocket",
      title: { en: "Entrepreneurship training", fr: "Formation en entrepreneuriat" },
      issuer: "",
      date: "",
      description: "",
      skills: { en: ["Entrepreneurship"], fr: ["Entrepreneuriat"] }
    }
  ],

  // Skills: no proficiency levels on purpose. Logos come from assets/logos (see LOGOS in script.js).
  // To show a level, write an item as { name: "Java", level: "…" }.
  skills: [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Angular"] },
    { category: "Backend", items: ["Java", "Spring Boot", "C#", "ASP.NET Core", ".NET", "REST API"] },
    { category: { en: "Databases", fr: "Bases de données" }, items: ["MySQL", "SQL Server", "PL/SQL"] },
    { category: { en: "DevOps & Tools", fr: "DevOps & outils" }, items: ["Git", "GitHub", "Docker", "GitHub Actions", "Swagger / OpenAPI", "Postman"] },
    { category: { en: "Other technologies", fr: "Autres technologies" }, items: ["Python", "C", "Unity", "C#", "Agile / Scrum", "Linux (Ubuntu)"] },
    { category: { en: "Languages", fr: "Langues" }, notTech: true,
      items: { en: ["Arabic — native", "French — intermediate", "English — intermediate"], fr: ["Arabe — langue maternelle", "Français — intermédiaire", "Anglais — intermédiaire"] } }
  ],

  experience: [
    {
      main: true,
      company: "RoboCare",
      type: { en: "End-of-studies project (PFE)", fr: "Projet de fin d'études (PFE)" },
      period: { en: "Feb 2026 – Jul 2026", fr: "Févr. 2026 – juil. 2026" },
      title: { en: "Multichannel notification microservice for the RoboCare platform", fr: "Microservice de notification multicanal pour la plateforme RoboCare" },
      description: {
        en: "Design and development of a microservice that automates and manages notifications for RoboCare platform users. Carried out as a pair project with Yosr Benmoussa.",
        fr: "Conception et développement d'un microservice permettant l'automatisation et la gestion des notifications destinées aux utilisateurs de la plateforme RoboCare. Réalisé en binôme avec Yosr Benmoussa."
      },
      features: {
        en: ["Email, SMS and WhatsApp notifications", "REST API development", "JWT authentication and RBAC role management", "Webhook handling", "Tracking of sent notifications", "Status and reply management", "Notification scheduling", "Escalation and reminder system", "Template management", "External service integration", "Automated tests and deployment"],
        fr: ["Envoi de notifications par Email, SMS et WhatsApp", "Développement d'API REST", "Authentification JWT et gestion des rôles RBAC", "Gestion des webhooks", "Suivi des notifications envoyées", "Gestion des statuts et des réponses", "Planification des notifications", "Système d'escalade et de relance", "Gestion des templates", "Intégration de services externes", "Automatisation des tests et du déploiement"]
      },
      tech: ["Spring Boot", "React", "MySQL", "Docker", "GitHub Actions", "JWT", "REST API", "Brevo", "WhatsApp Business API"]
    },
    {
      company: "Stup Soft",
      type: { en: "Summer internship — Full Stack Developer", fr: "Stage d'été — Développeuse Full Stack" },
      period: { en: "Jun 2025 – Jul 2025", fr: "Juin 2025 – juil. 2025" },
      description: {
        en: "Development of an e-learning website with Angular, .NET and SQL Server: design and integration of platform features, course and user management through a modern interface.",
        fr: "Développement d'un site e-learning avec Angular, .NET et SQL Server : conception et intégration des fonctionnalités, gestion des cours et des utilisateurs via une interface moderne."
      },
      tech: ["Angular", ".NET", "SQL Server"]
    },
    {
      company: "Stup Soft",
      type: { en: "Summer internship — Full Stack Developer", fr: "Stage d'été — Développeuse Full Stack" },
      period: { en: "Jun 2024 – Jul 2024", fr: "Juin 2024 – juil. 2024" },
      description: {
        en: "Web application with a complete CRUD system: Angular and .NET Core, REST API design and integration, SQL Server data management, functional testing and Git versioning.",
        fr: "Application web avec un système CRUD complet : Angular et .NET Core, conception et intégration d'API REST, gestion des données avec SQL Server, tests fonctionnels et versionnement Git."
      },
      tech: ["Angular", ".NET Core", "REST API", "SQL Server", "Git"]
    }
  ],

  // github: "" → "link to confirm". demo: "" → hidden. role: "" → "to confirm".
  // image: a real screenshot path; set illustration: false once you replace the illustration with a real screenshot.
  projects: [
    {
      name: { en: "E-learning Platform", fr: "Plateforme e-learning" },
      kind: { en: "Internship / academic project", fr: "Projet de stage / académique" },
      objective: { en: "Offer complete online training with dedicated spaces for clients, trainers and administrators, from course follow-up to certification and payment.", fr: "Proposer une formation en ligne complète avec des espaces dédiés aux clients, formateurs et administrateurs, du suivi des cours à la certification et au paiement." },
      description: { en: "Online training platform with three user types: client, trainer and administrator.", fr: "Plateforme de formation en ligne avec trois types d'utilisateurs : client, formateur et administrateur." },
      features: {
        en: ["Course management", "User management", "Training progress tracking", "Certificates generated at an 80% pass mark", "Payments with a 70/30 split"],
        fr: ["Gestion des formations", "Gestion des utilisateurs", "Suivi des formations", "Génération de certificats avec un seuil de réussite de 80 %", "Gestion des paiements avec une répartition 70/30"]
      },
      tech: ["Angular", "ASP.NET Core", "SQL Server"],
      role: "", github: "", demo: "",
      image: "assets/illustrations/elearning.svg", illustration: true
    },
    {
      name: { en: "Shared Terminal Reservation", fr: "Réservation de terminaux partagés" },
      kind: { en: "Academic project", fr: "Projet académique" },
      objective: { en: "Organise access to shared terminals through a clear reservation system.", fr: "Organiser l'accès aux terminaux partagés grâce à un système de réservation clair." },
      description: { en: "Application to book and manage shared terminals, focused on reservation handling and resource organisation.", fr: "Application de réservation et de gestion des terminaux partagés, centrée sur la gestion des réservations et l'organisation des ressources." },
      features: { en: ["Reservation management", "Resource organisation"], fr: ["Gestion des réservations", "Organisation des ressources"] },
      tech: [".NET"],
      role: "", github: "", demo: "",
      image: "assets/illustrations/reservation.svg", illustration: true
    },
    {
      name: { en: "Interactive Orrery", fr: "Orrery interactif" },
      kind: "NASA Space Apps Challenge 2024",
      objective: { en: "Explore and visualise the solar system interactively.", fr: "Explorer et visualiser le système solaire de manière interactive." },
      description: { en: "Interactive orrery to explore and visualise the solar system, built during the NASA Space Apps Challenge 2024.", fr: "Orrery interactif pour explorer et visualiser le système solaire, réalisé lors du NASA Space Apps Challenge 2024." },
      features: [],
      tech: [],
      role: "", github: "", demo: "",
      image: "assets/illustrations/orrery.svg", illustration: true
    },
    {
      name: { en: "Unity Game", fr: "Jeu Unity" },
      kind: { en: "Academic project · Dec 2024", fr: "Projet académique · déc. 2024" },
      objective: { en: "Practise game programming: game logic and interactive features with Unity and C#.", fr: "Mettre en pratique la programmation de jeux : logique de jeu et fonctionnalités interactives avec Unity et C#." },
      description: { en: "Video game developed with Unity and C#: game logic and interactive features.", fr: "Jeu vidéo développé avec Unity et C# : logique de jeu et fonctionnalités interactives." },
      features: [],
      tech: ["Unity", "C#"],
      role: "", github: "", demo: "",
      image: "assets/illustrations/game.svg", illustration: true
    },
    {
      name: { en: "E-commerce Website", fr: "Site e-commerce" },
      kind: { en: "Academic project · May 2024", fr: "Projet académique · mai 2024" },
      objective: { en: "Build an online store interface that presents products clearly.", fr: "Créer l'interface d'une boutique en ligne qui présente clairement les produits." },
      description: { en: "Online store with a user interface and product presentation.", fr: "Site de vente en ligne avec interface utilisateur et présentation des produits." },
      features: [],
      tech: ["HTML", "CSS", "JavaScript"],
      role: "", github: "", demo: "",
      image: "assets/illustrations/ecommerce.svg", illustration: true
    },
    {
      name: { en: "Agile Management Application", fr: "Application de gestion Agile" },
      kind: { en: "Academic project · May 2024", fr: "Projet académique · mai 2024" },
      objective: { en: "Manage a project following the Agile approach.", fr: "Gérer un projet selon l'approche Agile." },
      description: { en: "Project management application following an Agile approach.", fr: "Application de gestion de projet suivant une approche Agile." },
      features: [],
      tech: ["Spring Boot"],
      role: "", github: "", demo: "",
      image: "assets/illustrations/agile.svg", illustration: true
    }
  ],

  // Add each certificate here. Never fill a field you can't confirm.
  certifications: [
    {
      name: { en: "Interpersonal skills training certificate (Soft Skills)", fr: "Certificat de formation en compétences interpersonnelles (Soft Skills)" },
      issuer: "",
      date: "",
      skills: ["Soft skills"],
      image: "assets/illustrations/certificate.svg", illustration: true,   // replace with "assets/certs/soft-skills.jpg"
      verifyUrl: ""
    }
  ],

  achievements: [
    {
      name: "NASA Space Apps Challenge 2024",
      year: { en: "October 2024", fr: "Octobre 2024" },
      organizer: "NASA",
      description: { en: "Participant.", fr: "Participante." },
      activity: { en: "Interactive Orrery to explore and visualise the solar system.", fr: "Orrery interactif pour explorer et visualiser le système solaire." },
      result: "",
      photos: ["assets/illustrations/event-nasa.svg"], illustration: true
    },
    {
      name: "MTC – ISET Sfax",
      year: "",
      organizer: "ISET Sfax",
      description: { en: "Participant.", fr: "Participante." },
      activity: "",
      result: "",
      photos: ["assets/illustrations/event-mtc.svg"], illustration: true
    },
    {
      name: "IEEEXtreme",
      year: "",
      organizer: "IEEE IIT Student Branch",
      description: { en: "Participant in the IEEEXtreme programming competition.", fr: "Participation à la compétition de programmation IEEEXtreme." },
      activity: "",
      result: "",
      photos: ["assets/illustrations/event-ieee.svg"], illustration: true
    }
  ],

  associations: {
    en: ["IEEE IIT Student Branch — Member, 2023–2025", "Google Club IIT ISB — Member, 2023–2025"],
    fr: ["IEEE IIT Student Branch — Membre, 2023–2025", "Club Google IIT ISB — Membre, 2023–2025"]
  },

  interests: [
    { icon: "code", label: { en: "Software Development", fr: "Développement logiciel" } },
    { icon: "cpu", label: { en: "New Technologies", fr: "Nouvelles technologies" } },
    { icon: "bulb", label: { en: "Innovation", fr: "Innovation" } },
    { icon: "puzzle", label: { en: "Problem Solving", fr: "Résolution de problèmes" } },
    { icon: "horse", label: { en: "Horse riding", fr: "Équitation" } }
  ],

  linkedin: "https://www.linkedin.com/in/hana-hmani-996b41337/",
  email: "hanahmani3@gmail.com"
};
