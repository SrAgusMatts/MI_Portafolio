import {
  SiReact, SiJavascript, SiTypescript, SiDotnet, SiSqlite,
  SiNodedotjs, SiExpress, SiPython, SiAngular, SiMongodb
} from 'react-icons/si';
import { MdCheckCircleOutline, MdFlashOn, MdRocketLaunch } from 'react-icons/md';
import { FaCode } from 'react-icons/fa';

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
  "C#": SiDotnet,
  ".NET": SiDotnet
};

export const ColumnIconsMap = {
  established: MdCheckCircleOutline,
  learning: MdFlashOn,
  future: MdRocketLaunch
};

export const DATA = {
  ES: {
    profile: {
      name: "Agustín Mattos",
      role: "Desarrollador Web · Técnico en Programación",
      summary: "Estudiante de Ingeniería en Sistemas (UTN San Francisco) y técnico en programación. Enfocado en construir aplicaciones web modernas, mantenibles y eficientes con React, .NET/C# y SQLite.",
      github: "https://github.com/SrAgusMatts",
      linkedin: "https://linkedin.com/in/agustinmattos",
      photoPath: "avatar-logo.jpeg",
    },
    projects: [
      {
        title: "Semi-Clon de Trello",
        description: "Aplicación web que simula las funcionalidades básicas de Trello, permitiendo a los usuarios crear tableros, listas y tarjetas para organizar tareas de manera visual e intuitiva.",
        tech: ["React", "Vite", "CSS"],
        link: "https://kanban-trello-redesing.vercel.app"
      },
      {
        title: "Buscador de Películas",
        description: "Sitio de búsqueda de películas para ver información breve sobre cualquier tipo de filmografía con un estilo sencillo y adaptable para el usuario.",
        tech: ["React", "JavaScript", "Zustand", "React Query", "Vite"],
        link: "https://buscador-peliculas-eta.vercel.app"
      },
      {
        title: "TO-DO List",
        description: "Herramienta sencilla de anotador de tareas simples y recordatorios, guardados en el sistema local para no perder ninguna tarea.",
        tech: ["React", "JavaScript", "Zustand", "Vite"],
        link: "https://todo-zustand-two.vercel.app/"
      }
    ],
    experience: [
      { year: "2025 - Actual", role: "Estudiante de Ingeniería en Sistemas", place: "UTN San Francisco" },
      { year: "2018 - 2024", role: "Técnico en Programación", place: "Escuela PROA" },
      { year: "2025", role: "Desarrollador Web Full Stack", place: "Trizap" }
    ],
    skills: {
      established: ["React", "JavaScript", "TypeScript", "C#", ".NET", "SQLite"],
      learning: ["Node", "Express", "Zustand", "Python"],
      future: ["Angular", "NoSQL", "Vue"]
    }
  },

  EN: {
    profile: {
      name: "Agustín Mattos",
      role: "Web Developer · Programming Technician",
      summary: "Systems Engineering student (UTN San Francisco) and programming technician. Focused on building modern, maintainable, and efficient web applications with React, .NET/C#, and SQLite.",
      github: "https://github.com/SrAgusMatts",
      linkedin: "https://linkedin.com/in/agustinmattos",
      photoPath: "avatar-logo.jpeg",
    },
    projects: [
      {
        title: "Trello Semi-Clone",
        description: "Web application simulating basic Trello functionalities, allowing users to create boards, lists, and cards to organize tasks visually and intuitively.",
        tech: ["React", "Vite", "CSS"],
        link: "https://kanban-trello-redesing.vercel.app"
      },
      {
        title: "Movie Searcher",
        description: "Movie search site to view brief information about any type of film with a simple and responsive style for the user.",
        tech: ["React", "JavaScript", "Zustand", "React Query", "Vite"],
        link: "https://buscador-peliculas-eta.vercel.app"
      },
      {
        title: "TO-DO List",
        description: "Simple task note tool for reminders, saved in the local system so no task is ever lost.",
        tech: ["React", "JavaScript", "Zustand", "Vite"],
        link: "https://todo-zustand-two.vercel.app/"
      }
    ],
    experience: [
      { year: "2025 - Present", role: "Systems Engineering Student", place: "UTN San Francisco" },
      { year: "2018 - 2024", role: "Programming Technician", place: "PROA School" },
      { year: "2025", role: "Full Stack Web Developer", place: "Trizap" }
    ],
    skills: {
      established: ["React", "JavaScript", "TypeScript", "C#", ".NET", "SQLite"],
      learning: ["Node", "Express", "Zustand", "Python"],
      future: ["Angular", "NoSQL", "Vue"]
    }
  },

  PT: {
    profile: {
      name: "Agustín Mattos",
      role: "Desenvolvedor Web · Técnico em Programação",
      summary: "Estudante de Engenharia de Sistemas (UTN San Francisco) e técnico em programação. Focado na construção de aplicações web modernas, sustentáveis e eficientes com React, .NET/C# e SQLite.",
      github: "https://github.com/SrAgusMatts",
      linkedin: "https://linkedin.com/in/agustinmattos",
      photoPath: "avatar-logo.jpeg",
    },
    projects: [
      {
        title: "Semi-Clone do Trello",
        description: "Aplicação web que simula as funcionalidades básicas do Trello, permitindo aos usuários criar quadros, listas e cartões para organizar tarefas visualmente.",
        tech: ["React", "Vite", "CSS"],
        link: "https://kanban-trello-redesing.vercel.app"
      },
      {
        title: "Buscador de Filmes",
        description: "Site de busca de filmes para ver informações breves sobre qualquer tipo de filme com um estilo simples e adaptável para o usuário.",
        tech: ["React", "JavaScript", "Zustand", "React Query", "Vite"],
        link: "https://buscador-peliculas-eta.vercel.app"
      },
      {
        title: "Lista de Tarefas (TO-DO)",
        description: "Ferramenta simples de anotação de tarefas como lembrete, salvas no sistema local para não perder nenhuma tarefa.",
        tech: ["React", "JavaScript", "Zustand", "Vite"],
        link: "https://todo-zustand-two.vercel.app/"
      }
    ],
    experience: [
      { year: "2025 - Atual", role: "Estudante de Engenharia", place: "UTN San Francisco" },
      { year: "2018 - 2024", role: "Técnico em Programação", place: "Escola PROA" },
      { year: "2025", role: "Desenvolvedor Web Full Stack", place: "Trizap" }
    ],
    skills: {
      established: ["React", "JavaScript", "TypeScript", "C#", ".NET", "SQLite"],
      learning: ["Node", "Express", "Zustand", "Python"],
      future: ["Angular", "NoSQL", "Vue"]
    }
  }
};