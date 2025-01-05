import type { AboutContent, PublishedItem, Social } from "~/lib/types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import styles from "./style.module.css";
import { Link } from "@remix-run/react";

export function Bio({ bio, publishedItems, socials }: AboutContent) {
    console.log("bio", bio);
    console.log("pub", publishedItems);
    console.log("socials", socials);
    return (
        <>
            <section className={styles.section}>
                <h1>about</h1>
                <BlocksRenderer content={bio} />
            </section>
            <section className={styles.section}>
                <h2>socials</h2>
                <ul>
                    {socials.map((social: Social) => {
                        return (
                            <li key={social.url}>
                                <Link to={social.url} target="_blank">
                                    {social.text}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </section>
            <section className={styles.section}>
                <h3>published</h3>
                <ul>
                    {publishedItems.map((item: PublishedItem) => {
                        return (
                            <li key={item.url}>
                                <Link to={item.url} target="_blank">
                                    {item.title}
                                </Link>, {item.description}
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
}
