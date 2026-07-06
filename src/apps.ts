export interface App {
  name: string;
  description: string;
  url: string;
}

export const apps: App[] = [
  {
    name: "Auth",
    description: "Single sign-on for the Sawyer Suite.",
    url: "https://auth.lanesawyer.dev/",
  },
  {
    name: "Cadence",
    description: "Keep up with the rhythms of life.",
    url: "https://cadence.lanesawyer.dev/",
  },
  {
    name: "Dibs",
    description: "Call dibs on household treasures.",
    url: "https://dibs.lanesawyer.dev/",
  },
  {
    name: "52 Things",
    description: "One thing a week, all year long.",
    url: "http://52-things.lanesawyer.dev/",
  },
];
