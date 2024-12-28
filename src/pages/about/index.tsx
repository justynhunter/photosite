import { Bio } from "@components/bio";
import { getAbout } from "@lib/strapiUtil";
import { About as AboutContent } from "@lib/types";
import { useEffect, useState } from "react";

export function About() {
    const [content, setContent] = useState<AboutContent | null>(null);

    useEffect(() => {
        const fetch = async () => {
            const aboutContent = await getAbout();
            setContent(aboutContent);
        };

        fetch();
    }, []);

    return content && <Bio {...content} />;
}
