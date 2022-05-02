import HTMLIcon from "../../../assets/images/html_icon.svg";
import MarkdownIcon from "../../../assets/images/markdown_icon.svg";
import CSSIcon from "../../../assets/images/css_icon.svg";
import JSIcon from "../../../assets/images/js_icon.svg";
import { routes } from "../../../routes";

const files = [
  {
    icon: HTMLIcon,
    name: "Home.html",
    route: routes.HOME,
  },
  {
    icon: MarkdownIcon,
    name: "About.md",
    route: routes.ABOUT,
  },
  {
    icon: CSSIcon,
    name: "Contact.css",
    route: routes.CONTACT,
  },
  {
    icon: JSIcon,
    name: "Project.js",
    route: routes.PROJECTS,
  },
];

export default files;
