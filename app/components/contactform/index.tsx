import styles from "./style.module.css";
import clsx from "clsx";
import { Form } from "@remix-run/react";
import { ActionFunctionArgs } from "@remix-run/node";
import { Resend } from "resend";

export const action = async ({ request }: ActionFunctionArgs) => {
    const body = await request.formData();
    const name = body.get("name");
    const message = body.get("message");

    const resend = new Resend(import.meta.env.RESEND_KEY ?? "no key found");
    resend.emails.send({
        from: "noone@example.com",
        to: "cjhunter@me.com",
        subject: "Website Message!",
        html: `<p>${name ?? "no name"}</p><p>${message ?? "no message"}</p>`
    })
}

export const ContactForm = () => {
    return (
        <Form className={styles.form}>
            <div className={styles.formItem}>
                <label htmlFor="name">name</label>
                <input className={styles.formInput} name="name" />
            </div>
            <div className={styles.formItem}>
                <label htmlFor="message">message</label>
                <textarea className={clsx(styles.formInput, styles.textarea)} name="message" />
            </div>
            <button className={styles.formButton} type="submit">send</button>
        </Form>
    );
}
