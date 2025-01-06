import { Form, MetaFunction, useActionData, useLoaderData } from "@remix-run/react"
import { getContact } from "~/lib/strapiUtil";
import styles from "./style.module.css";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import clsx from "clsx";
import { Resend } from "resend";
import { ActionFunctionArgs } from "@remix-run/node";
import { Turnstile } from "@marsidev/react-turnstile";

export const loader = async () => {
    return await getContact();
}

export async function action({ request }: ActionFunctionArgs) {
    const body = await request.formData();
    const name = body.get("name");
    const message = body.get("message");

    const resend = new Resend(process.env.RESEND_KEY ?? "no key found");
    const response = await resend.emails.send({
        from: "do_not_reply@justynhunter.com",
        to: "cjhunter@me.com",
        subject: "Website Message!",
        html: `<p>${name ?? "no name"}</p><p>${message ?? "no message"}</p>`
    });

    return response;
}

export const meta: MetaFunction = () => {
    return [
        { title: "contact | justynhunter.com" },
        { name: "description", content: "contact justyn hunter" }
    ]
}

export default function Contact() {
    const data = useLoaderData<typeof loader>();
    const formData = useActionData<typeof action>();

    return (<div className={styles.container}>
        {!formData && data.content &&
            <BlocksRenderer content={data.content} />
        }
        {!formData &&
            <Form className={styles.form} method="post" action="?index">
                <div className={styles.formItem}>
                    <label htmlFor="name">name</label>
                    <input className={styles.formInput} name="name" />
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="message">message</label>
                    <textarea className={clsx(styles.formInput, styles.textarea)} name="message" />
                </div>
                <button className={styles.formButton} type="submit">send</button>
                <Turnstile siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY} />
            </Form>}
        {formData &&
            <div>
                <BlocksRenderer content={data.successContent} />
            </div>
        }
    </div>);
}
