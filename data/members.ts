export type Member = {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  github: string;
};

export const companyEmail = "bytedevtech@gmail.com";

const members: Member[] = [
  {
    id: "01",
    name: "Hans Marcus Roberto V. Lacuesta",
    role: "Full Stack Developer",
    bio: "Builds across BYTE's stack, connecting application logic, data, and the interfaces people use.",
    skills: ["REACT", "NODE.JS", "SQL", "GIT"],
    github: "https://github.com/hamsoool",
  },
  {
    id: "02",
    name: "Icon Zeus R. Gonzales",
    role: "Full Stack Developer",
    bio: "Works across the front end and back end at BYTE, turning product requirements into complete web features.",
    skills: ["REACT", "NODE.JS", "SQL", "GIT"],
    github: "https://github.com/icz3us",
  },
  {
    id: "03",
    name: "Sander John Custodio",
    role: "Frontend Developer",
    bio: "Focuses on BYTE's front end, shaping responsive interfaces and the details that make them clear to use.",
    skills: ["REACT", "NODE.JS", "SQL", "GIT"],
    github: "https://github.com/sanjooo-wav",
  },
];

export default members;
