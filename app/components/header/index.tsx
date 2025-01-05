import { Nav } from "~/components/nav";
import styles from "./style.module.css";
import { ProjectContent } from "~/lib/types";
import { Link } from "@remix-run/react";

export type HeaderProps = {
    projects: ProjectContent[]
}

export function Header({ projects }: HeaderProps) {
    return (
        <div className={styles.container}>
            <Link to="/" className={styles.link}><h1>justyn hunter</h1></Link>
            <Nav projects={projects} />
        </div>
    );
}
