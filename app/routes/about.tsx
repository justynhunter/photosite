import { Bio } from "~/components/bio";
import { getAbout } from "~/lib/strapiUtil";
import { useLoaderData } from "@remix-run/react";
import { MetaFunction } from "@remix-run/node";

export async function loader() {
    return (await getAbout());
}

export const meta: MetaFunction = () => {
    return [
        { title: "about | justynhunter.com" },
        { name: "description", content: "about justyn hunter" }
    ]
}

export default function About() {
    return <Bio {...useLoaderData<typeof loader>()} />;
}
