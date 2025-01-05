import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Gallery } from "~/components/gallery";
import { getProject } from "~/lib/strapiUtil";

export async function loader({ params }: LoaderFunctionArgs) {
    return await getProject(params.slug ?? "");
}

export default function Project() {
    const project = useLoaderData<typeof loader>();
    return (
        <div>
            <h1>{project.title}</h1>
            <Gallery {...project} />
        </div>
    )
}
