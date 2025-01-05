import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import clsx from "clsx";
import { Gallery } from "~/components/gallery";
import { getProject } from "~/lib/strapiUtil";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    return await getProject(params.slug ?? "");
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    return [
        { title: `${data?.title.toLowerCase()} | justynhunter.com` },
        { name: "description", content: data?.description }
    ]
}

export default function Project() {
    const project = useLoaderData<typeof loader>();
    return (
        <div>
            <h1 className={clsx("center", "lower")}>{project.title}</h1>
            <Gallery {...project} />
        </div>
    )
}
