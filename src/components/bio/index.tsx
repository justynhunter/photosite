import type { PublishedItem, Social } from "@lib/types";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import { NavLink } from "react-router";
import styles from "./style.module.css";

export type BioProps = {
    bio: BlocksContent;
    publishedItems: PublishedItem[];
    socials: Social[];
};

export function Bio({ bio, publishedItems, socials }: BioProps) {
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
                                <NavLink to={social.url} target="_blank">
                                    {social.text}
                                </NavLink>
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
                                <NavLink to={item.url} target="_blank">
                                    {item.title}
                                </NavLink>, {item.description}
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
}
