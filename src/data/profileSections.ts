import AboutMe from "../components/AboutMe.astro";
import Articles from "../components/Articles.astro";
import Experience from "../components/Experience.astro";
import BriefcaseIcon from "../components/icons/Briefcase.astro";
import CodeIcon from "../components/icons/Code.astro";
import ArticleIcon from "../components/icons/Article.astro";
import Projects from "../components/Projects.astro";
import type { IProfileSection } from "../types/profile";
import ProfileCheckIcon from "../components/icons/ProfileCheck.astro";

export const PROFILE_SECTIONS: IProfileSection[] = [
  {
    title: "Experiencia",
    label: "experiencia",
    url: "/#experiencia",
    component: Experience,
    icon: BriefcaseIcon,
  },
  {
    title: "Proyectos",
    label: "proyectos",
    url: "/#proyectos",
    component: Projects,
    icon: CodeIcon,
  },
  {
    title: "Artículos",
    label: "articulos",
    url: "/#articulos",
    component: Articles,
    icon: ArticleIcon,
  },
  {
    title: "Sobre mí",
    label: "sobre-mi",
    url: "/#sobre-mi",
    component: AboutMe,
    icon: ProfileCheckIcon,
  },
];
