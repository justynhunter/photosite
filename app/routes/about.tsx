import { Bio } from "~/components/bio";
import { getAbout } from "~/lib/strapiUtil";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
    return (await getAbout());
}

export default function About() {
    return <Bio {...useLoaderData<typeof loader>()} />;
}
