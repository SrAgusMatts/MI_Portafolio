import {
  SiReact, SiJavascript, SiTypescript, SiDotnet ,SiSqlite,
  SiNodedotjs, SiExpress, SiPython, SiAngular, SiMongodb
} from 'react-icons/si';
import { MdCheckCircleOutline, MdFlashOn, MdRocketLaunch } from 'react-icons/md';
import { FaCode } from 'react-icons/fa'; 

export const PROFILE = {
  name: "Agustín Mattos",
  role: "Desarrollador Web · Técnico en Programación",
  summary:
    "Estudiante de Ingeniería en Sistemas (UTN San Francisco) y técnico en programación. Enfocado en construir aplicaciones web modernas, mantenibles y eficientes con React, .NET/C# y SQLite.",
  // email: "agustingustavomattos@gmail.com",
  github: "https://github.com/SrAgusMatts",
  linkedin: "https://linkedin.com/in/agustinmattos",
  photoPath: "avatar-logo.jpeg",
};

export const PROJECTS = [
  {
    title: "Semi-Clon de trello",
    description:
      "Aplicación web que simula las funcionalidades básicas de Trello, permitiendo a los usuarios crear tableros, listas y tarjetas para organizar tareas de manera visual e intuitiva junto a un inicio de sesión para permitir la personalización de cada usuario.",
    tech: ["React", "Vite", "CSS"],
    link: "https://kanban-trello-redesing.vercel.app"
  },
  {
    title: "Buscador de Películas",
    description:
      "Sitio de busqueda de peliculas para ver informacion breve sobre cualquier tipo de peliculas con un estilo sencillo y adaptable para el usuario.",
    tech: ["React", "JavaScript", "Zustand", "React Query", "Vite"],
    link: "https://buscador-peliculas-eta.vercel.app"
  },
  {
    title: "TO-DO List",
    description:
      "Herramienta sencilla de anotador de tareas simples y sencillas como recordatorio y guardados en el sistema local para no perder ninguna tarea.",
    tech: ["React", "JavaScript", "Zustand", "Vite"],
    link: "https://todo-zustand-two.vercel.app/"
  },
];

export const SkillIconsMap = {
  "React": SiReact,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript, 
  "SQLite": SiSqlite,
  "Node": SiNodedotjs,
  "Express": SiExpress,
  "Zustand": FaCode,
  "Python": SiPython,
  "Angular": SiAngular,
  "NoSQL": SiMongodb,
  "Vue": FaCode,
};

export const KnowSkills = ["React", "JavaScript", "TypeScript", "C#", ".NET", "SQLite"];

export const InProccess = ["Node", "Express", "Zustand","Python"];

export const TryStartKnow = ["Angular", "NoSQL", "Vue"];

export const EXPERIENCE = [
  { year: "2025 - Actual", role: "Estudiante de Ingeniería en Sistemas", place: "UTN San Francisco" },
  { year: "2018 - 2024", role: "Técnico en Programación", place: "Escuela PROA" },
  { year: "2025", role: "Desarrollador Web Full Stack", place: "Trizap" }
];

export const ColumnIconsMap = {
    established: MdCheckCircleOutline,
    learning: MdFlashOn,
    future: MdRocketLaunch
};
