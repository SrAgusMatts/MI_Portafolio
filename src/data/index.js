// src/data/index.js
export const PROFILE = {
  name: "Agustín Mattos",
  role: "Desarrollador Web · Técnico en Programación",
  summary:
    "Estudiante de Ingeniería en Sistemas (UTN San Francisco) y técnico en programación. Enfocado en construir aplicaciones web modernas, mantenibles y eficientes con React, .NET/C# y SQLite.",
  email: "agustingustavomattos@gmail.com",
  github: "https://github.com/SrAgusMatts",
  linkedin: "https://linkedin.com/in/agustinmattos",
};

export const PROJECTS = [
  {
    title: "Gestor de Tareas",
    description:
      "Aplicación web para administrar tareas y eventos con persistencia local y vistas filtradas.",
    tech: ["React", ".NET", "SQLite"],
    link: "#"
  },
  {
    title: "E-commerce de Velas",
    description:
      "Sitio minimalista para venta de velas aromáticas con catálogo, carrito y checkout básico.",
    tech: ["React", "PHP", "SQLite"],
    link: "#"
  }
];

export const SKILLS = ["React", "JavaScript", "TypeScript", "C#", ".NET", "SQLite", "PHP"];

export const EXPERIENCE = [
  { year: "2025", role: "Estudiante de Ingeniería en Sistemas", place: "UTN San Francisco" },
  { year: "2024", role: "Técnico en Programación", place: "Escuela PROA" },
  { year: "2024", role: "Prácticas Laborales – Mantenimiento de sitios web", place: "Trizap" }
];
