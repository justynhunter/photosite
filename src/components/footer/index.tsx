import styles from "./style.module.css";

export function Footer() {
    return (
        <footer className={styles.container}>
            copyright {new Date().getFullYear()}, all rights reserved
        </footer>
    );
}
