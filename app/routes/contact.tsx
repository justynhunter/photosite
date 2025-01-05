import { MetaFunction } from "@remix-run/react"

export const meta: MetaFunction = () => {
    return [
        { title: "contact | justynhunter.com" },
        { name: "description", content: "contact justyn hunter" }
    ]
}

export default function Contact() {
    return <h1>not implemented</h1>;
}
