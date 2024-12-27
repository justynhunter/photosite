import { Nav } from "@components/nav";
import styles from "./style.module.css";

export function Header() {
    return (
        <div className={styles.container}>
            <h1>justyn hunter</h1>
            <Nav />
        </div>
    );
}
