export interface ProjectCaseStudy {
  id: string;
  title: string;
  role: string;
  period: string;
  featured: boolean;
  problem: string;
  architecture: string;
  impact: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  isPrivateEnterprise?: boolean;
}

export const PROFILE = {
  name: "Boris Puentes",
  headline: "Ingeniero Civil Informático (Último Semestre) | FullStack & AI Engineer",
  availability: "Disponible Full-Time desde Enero 2027 (Práctica / Junior)",
  bio: "Construyo aplicaciones web escalables de extremo a extremo, arquitecturas backend multitenant y soluciones impulsadas por Inteligencia Artificial. Enfocado en código limpio, seguridad DevSecOps y desarrollo asistido por IA.",
  location: "Santiago, Chile",
  email: "boris.puentes.93@gmail.com",
  github: "https://github.com/BoroJin",
  linkedin: "https://www.linkedin.com/in/boris-puentes",
  cvPath: "/CV_Boris_Puentes.pdf",
};

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: "camiongo",
    title: "CamiónGO: Arquitectura Backend Multi-Tenant",
    role: "Desarrollador Backend",
    period: "Abr 2025 – Jul 2025",
    featured: true,
    problem:
      "Múltiples empresas logísticas necesitaban operar sobre la misma plataforma garantizando aislamiento estricto de datos y permisos granulares por organización.",
    architecture:
      "Backend en Node.js con enrutamiento por subdominios, esquemas de base de datos independientes por tenant y middleware de control de acceso basado en roles (RBAC).",
    impact:
      "Aislamiento completo entre clientes corporativos y optimización de consultas SQL relacionales para reducir tiempos de respuesta.",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "RBAC", "Multi-Tenancy"],
    isPrivateEnterprise: true,
  },
  {
    id: "sentinel",
    title: "Sentinel: Plataforma Institucional con IA",
    role: "Product Owner & FullStack Developer",
    period: "Ago 2025 – Nov 2025",
    featured: true,
    problem:
      "Los canales tradicionales de reporte en instituciones carecen de priorización temprana y análisis emocional de los casos ingresados.",
    architecture:
      "Frontend web en Next.js y app móvil en Flutter conectados a Firebase, integrando pipelines de NLP y análisis de audio para clasificación automática de emociones.",
    impact:
      "Entrega de producto completo (web + móvil) bajo metodologías ágiles con triage asistido por IA.",
    stack: ["Next.js", "React", "Flutter", "Firebase", "NLP & Audio AI"],
    isPrivateEnterprise: true,
  },
  {
    id: "devsecops-orchestrator",
    title: "Orquestador Predictivo DevSecOps con IA",
    role: "Proyecto de Título (En desarrollo)",
    period: "2026 – Actualidad",
    featured: true,
    problem:
      "Los escáneres tradicionales generan cientos de alertas estáticas sin distinguir cuáles tienen probabilidad real de ser explotadas en producción.",
    architecture:
      "Motor en Python que combina escaneo de contenedores/dependencias (Trivy) con datos dinámicos de explotación (API EPSS) y clasificación inteligente.",
    impact:
      "Priorización automatizada de vulnerabilidades críticas en pipelines CI/CD antes del despliegue.",
    stack: ["Python", "Trivy", "EPSS API", "Docker", "IA / Clasificación"],
    githubUrl: "https://github.com/BoroJin", // Reemplazar con el repo público
  },
  {
    id: "desconexion-civica",
    title: "Desconexión Cívica: Traductor Legislativo con IA",
    role: "Creador & FullStack Developer",
    period: "Ago 2026 – Oct 2026",
    featured: false,
    problem:
      "El lenguaje jurídico y legislativo dificulta el acceso ciudadano a proyectos de ley y discusiones públicas.",
    architecture:
      "Aplicación web en Next.js y TypeScript desplegada en Vercel con asistente conversacional conectado a LLMs para síntesis y traducción contextual.",
    impact:
      "Interfaz responsiva con respuestas en tiempo real y experiencia optimizada para lectura rápida.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "LLM APIs", "Vercel"],
    liveUrl: "https://desconexioncivica2doproto.vercel.app",
    githubUrl: "https://github.com/BoroJin",
  },
  {
    id: "aisys",
    title: "AIsys: Gestión Urbana con Computer Vision",
    role: "The Agent Hackathon (Hub Providencia)",
    period: "Oct 2025",
    featured: false,
    problem:
      "Los reportes ciudadanos de incidencias urbanas suelen contener imágenes inválidas o carecer de retroalimentación inmediata.",
    architecture:
      "App móvil en Flutter conectada a un backend en Python con validación de imágenes por Computer Vision y síntesis de voz conversacional vía ElevenLabs.",
    impact:
      "Prototipo funcional construido en formato hackathon con validación visual automatizada y guía por voz.",
    stack: ["Python", "Flutter", "Computer Vision", "ElevenLabs API"],
    githubUrl: "https://github.com/BoroJin",
  },
  {
    id: "ipg-automation",
    title: "Sincronización de Sistemas y Servicios Backend",
    role: "Analista de Automatización @ IPG",
    period: "Mar 2026 – Jun 2026",
    featured: false,
    problem:
      "Procesos operativos desconectados requerían conciliación constante e integridad transaccional entre bases de datos.",
    architecture:
      "Servicios y agentes autónomos en Python para sincronización programada de datos y monitoreo operacional.",
    impact:
      "Eliminación de carga manual y consistencia de datos en tiempo real.",
    stack: ["Python", "SQL", "APIs REST", "Automatización"],
    isPrivateEnterprise: true,
  },
];

export const SKILL_GROUPS = [
  {
    category: "Backend, APIs & Arquitectura",
    skills: ["Python", "FastAPI", "Django / DRF", "Node.js", "PostgreSQL", "MySQL", "Multi-Tenancy", "RBAC"],
  },
  {
    category: "Frontend & Mobile",
    skills: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "Flutter", "Dart"],
  },
  {
    category: "Inteligencia Artificial & DevSecOps",
    skills: ["LLM APIs / RAG", "NLP & Computer Vision", "Cline / AI Workflows", "Docker", "Trivy", "Linux (Arch/Kali)", "Git / GitHub Actions"],
  },
];