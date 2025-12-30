import HeroImage from "/assets/hero-img.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/python.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/flask.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/postgresql.svg";
import Tools10 from "/assets/tools/postman.png";
import Tools11 from "/assets/tools/java.png";
import Tools12 from "/assets/tools/typescript.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Python",
    ket: "Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Flask",
    ket: "Framework",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "PostgreSQL",
    ket: "Database",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Postman",
    ket: "API Testing",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Java",
    ket: "Language",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Typescript",
    ket: "Language",
    dad: "1200",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.png";
import Proyek6 from "/assets/proyek/proyek6.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Global Green",
    desk: "In this project, I handled the backend development using Python and Flask, focusing on database schema design, REST API development, authentication, and transaction management.",
    tools: ["Python", "Flask", "PostgreSQL", "Postman"],
    dad: "200",
    link: "https://github.com/andikazulprisa/GlobalGreen-BackEnd",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Web Portfolio 2.0",
    desk: "A single-page personal portfolio website developed with React.js, featuring smooth navigation, animations, and responsive layout to present my profile, tools, and project experience.",
    tools: ["ReactJS", "TailwindCSS", "Javascript", "AOS"],
    dad: "300",
    link: "https://github.com/andikazulprisa/React-Portfolio",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Kamart",
    desk: "Kamart is an e-commerce website inspired by modern retail platforms, built with Next.js, TypeScript, and Tailwind CSS to provide a clean, fast, and responsive shopping experience.",
    tools: ["NextJS", "TypeScript", "TailwindCSS"],
    dad: "400",
    link: "https://github.com/andikazulprisa/Kamart",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Market Backend API",
    desk: "Market Backend API is a backend service for a marketplace platform, currently under development. This project focuses on API design, database schema, and core business logic for an e-commerce system.",
    tools: ["Python", "Flask", "PostgreSQL", "Postman"],
    dad: "500",
    link: "https://github.com/andikazulprisa/market-backend",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Web Portfolio",
    desk: "Personal Web Portfolio (v1) is my first portfolio website built using only HTML, CSS, and JavaScript. This project represents my initial step into web development before transitioning to a React-based architecture.",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "600",
    link: "https://kazuha.online/",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Backend API — Java Spring Boot",
    desk: "A backend service built with Java Spring Boot, focusing on RESTful API implementation, epoch time conversion (seconds-based), and robust error handling to ensure clear and human-readable API responses.",
    tools: ["Java", "Spring Boot"],
    dad: "700",
    link: "https://github.com/andikazulprisa/Jasamedika-Backend",
  },
];
