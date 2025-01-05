import { ProjectContent } from "~/lib/types";
import { useRef, useState } from "react";
import styles from "./style.module.css";
import { Link } from "@remix-run/react";

export type NavProps = {
    projects: ProjectContent[];
};

export function Nav({ projects }: NavProps) {
    const navMenuRef = useRef<HTMLElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    function onNavClick() {
        if (menuOpen) {
            navMenuRef.current?.classList.remove(styles.show);
        } else {
            navMenuRef.current?.classList.add(styles.show);
        }

        setMenuOpen(!menuOpen);
    }

    return (
        <div className={styles.container}>
            <button
                type="button"
                className={styles.navButton}
                onClick={onNavClick}
            >
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </button>
            <nav className={styles.nav} ref={navMenuRef}>
                work
                <div className={styles.projectMenu}>
                    {projects
                        && projects.map((project) => (
                            <Link key={project.slug} to={`/${project.slug}`}>
                                {project.title}
                            </Link>
                        ))}
                </div>
                <Link to="/about">about</Link>
                <Link to="/contact">contact</Link>
            </nav>
        </div>
    );
}
