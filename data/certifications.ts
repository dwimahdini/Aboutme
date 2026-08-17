import { Layout, Braces } from "lucide-react";

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  url?: string;
  icon?: any;
}

export const certifications: Certification[] = [
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    url: "https://www.freecodecamp.org/certification/dwimahdini12/responsive-web-design",
    icon: Layout
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    url: "https://www.freecodecamp.org/certification/fcc-317e0a09-8e62-485f-9a8c-ad5b3c7359ab/javascript-algorithms-and-data-structures-v8",
    icon: Braces
  }
];
