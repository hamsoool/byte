export type Member = {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  link: string;
};

// The three BYTE members. Bios, skill tags, and email links below are
// placeholders — replace with whatever each of you actually wants shown.
// Nothing else in the site needs to change: every section on the page is
// generated from this array, in the order listed here.
const members: Member[] = [
  {
    id: "01",
    name: "Hans Marcus Roberto V. Lacuesta",
    role: "Full Stack Developer",
    bio: "Works across the stack at BYTE, from schema to shipped interface. Add a proper bio here.",
    skills: ["REACT", "NODE.JS", "SQL", "GIT"],
    link: "mailto:hans@byte.dev",
  },
  {
    id: "02",
    name: "Icon Zeus R. Gonzales",
    role: "Full Stack Developer",
    bio: "Works across the stack at BYTE, from schema to shipped interface. Add a proper bio here.",
    skills: ["REACT", "NODE.JS", "SQL", "GIT"],
    link: "mailto:icon@byte.dev",
  },
  {
    id: "03",
    name: "Sander John Custodio",
    role: "Full Stack Developer",
    bio: "Works across the stack at BYTE, from schema to shipped interface. Add a proper bio here.",
    skills: ["REACT", "NODE.JS", "SQL", "GIT"],
    link: "mailto:sander@byte.dev",
  },
];

export default members;
