import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Gallery } from "~/components/gallery";
import { getHome, getProject } from "~/lib/strapiUtil";

export const loader = async () => {
    const home = await getHome();
    return await getProject(home.projectSlug);
}

export const meta: MetaFunction = () => {
    return [
        { title: "justyn hunter | justynhunter.com" },
        { name: "description", content: "justyn hunter's photography website" },
    ];
};

export default function Index() {
    const project = useLoaderData<typeof loader>();

    return (
        <Gallery {...project} />
    );
}
