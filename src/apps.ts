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
    description: "Personal surveys to collect data about your wellbeing.",
    url: "https://cadence.lanesawyer.dev/",
  },
  {
    name: "Dibs",
    description:
      "A list for couples who want to keep track of all the things to do together.",
    url: "https://dibs.lanesawyer.dev/",
  },
  {
    name: "52 Things",
    description: "Yearly goals. 52 of them. Yes, 52 of them.",
    url: "http://52-things.lanesawyer.dev/",
  },
];
