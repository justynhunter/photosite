import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
    route("/", "pages/index.tsx"),
    route("project/:slug", "pages/project.tsx"),
    route("about", "pages/about.tsx"),
    route("contact", "pages/contact.tsx")
] satisfies RouteConfig;
