import { Nav } from "~/components/nav";
import styles from "./style.module.css";
import { ProjectContent } from "~/lib/types";

export type HeaderProps = {
    projects: ProjectContent[]
}

export function Header({ projects }: HeaderProps) {
    return (
        <div className={styles.container}>
            <h1>justyn hunter</h1>
            <Nav projects={projects} />
        </div>
    );
}
