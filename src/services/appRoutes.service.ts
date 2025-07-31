import type { appRoutes } from "@/types/project.type";

const routes: { [key: string]: appRoutes } = {
  home: {
    name: "Home",
    route: "/my-portfolio/home",
  },
  projects: {
    name: "Projects",
    route: "/my-portfolio/projects",
  },
  about: {
    name: "About Me",
    route: "/my-portfolio/about",
  },
};

export default routes;
