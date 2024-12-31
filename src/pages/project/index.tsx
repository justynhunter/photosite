import { Gallery } from "@components/gallery";
import { getProject } from "@lib/strapiUtil";
import { ProjectContent } from "@lib/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export function Project() {
    const { slug } = useParams();

    const [content, setContent] = useState<ProjectContent | null>(null);

    useEffect(() => {
        const fetch = async () => {
            const data = await getProject(slug ?? "");
            console.log("data", data);
            setContent(data);
        };

        fetch();
    }, []);

    return content && (
        <div>
            <h1>{content.title}</h1>
            <Gallery {...content} />
        </div>
    );
}
