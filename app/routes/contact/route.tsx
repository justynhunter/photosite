import { MetaFunction, useLoaderData } from "@remix-run/react"
import { getContact } from "~/lib/strapiUtil";
import styles from "./style.module.css";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export const loader = async () => {
    return await getContact();
}

export const meta: MetaFunction = () => {
    return [
        { title: "contact | justynhunter.com" },
        { name: "description", content: "contact justyn hunter" }
    ]
}

export default function Contact() {
    const content = useLoaderData<typeof loader>();

    return (
        <div className={styles.container}>
            {content.content &&
                <BlocksRenderer content={content.content} />
            }
            <div className={styles.contactForm}>
            </div>
            {content.successContent &&
                <div className={styles.success}>
                    <BlocksRenderer content={content.successContent} />
                </div>
            }
        </div>
    );
}
