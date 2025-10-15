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
    title: "Generador de contratos",
    description:
      "Aplicacion web sencilla para la creacion de contratos de trabajos y servicios.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://sragusmatts.github.io/Generador-de-contratos-automatizado/"
  }
];

export const SkillIconsMap = {
  "React": SiReact,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript, 
  "SQLite": SiSqlite,
  "Node": SiNodedotjs,
  "Express": SiExpress,
  "Python": SiPython,
  "Angular": SiAngular,
  "NoSQL": SiMongodb, // Usamos MongoDB como ejemplo común de NoSQL
  "Vue": FaCode,
};

export const KnowSkills = ["React", "JavaScript", "TypeScript", "C#", ".NET", "SQLite"];

export const InProccess = ["Node", "Express", "Python"];

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
