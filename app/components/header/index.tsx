import { Nav } from "~/components/nav";
import { getProjects } from "~/lib/strapiUtil";
import { ProjectContent } from "~/lib/types";
import { useEffect, useState } from "react";
import styles from "./style.module.css";

export function Header() {
    const [projects, setProjects] = useState<ProjectContent[] | null>(null);

    useEffect(() => {
        const fetch = async () => {
            const projectContent = await getProjects();
            setProjects(projectContent);
        };

        fetch();
    }, []);

    return (
        <div className={styles.container}>
            <h1>justyn hunter</h1>
            {projects && <Nav projects={projects} />}
        </div>
    );
}
