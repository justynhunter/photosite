import { getContact } from "@lib/strapiUtil";
import { ContactContent } from "@lib/types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import clsx from "clsx";
import { FormEvent, useEffect, useState } from "react";
import styles from "./style.module.css";

export function Contact() {
    const [content, setContent] = useState<ContactContent | null>(null);

    useEffect(() => {
        const fetch = async () => {
            const data = await getContact();
            setContent(data);
        };

        fetch();
    }, []);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const response = await fetch("/api/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        return data;
        // TODO: do something with form submission
    }

    return (
        <>
            <div className={styles.formContainer}>
                {content?.content
                    && <BlocksRenderer content={content.content} />}
                <form className={styles.form} onSubmit={onSubmit}>
                    <div className={styles.formItem}>
                        <label htmlFor="name">name</label>
                        <input className={styles.formInput} name="name" />
                    </div>
                    <div className={styles.formItem}>
                        <label htmlFor="message">message</label>
                        <textarea
                            className={clsx(styles.formInput, styles.textarea)}
                            name="message"
                        />
                    </div>
                    <button className={styles.formButton} type="submit">
                        send
                    </button>
                </form>
            </div>
            {content?.successContent
                ? (
                    <div className={styles.successContainer}>
                        <BlocksRenderer content={content?.successContent} />
                    </div>
                )
                : <div>Thank you</div>}
        </>
    );
}
