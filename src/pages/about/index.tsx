import { Bio } from "@components/bio";
import { getAbout } from "@lib/strapiUtil";
import { BioComponent } from "@lib/types";
import { useEffect, useState } from "react";

export function About() {
    const [content, setContent] = useState<BioComponent | null>(null);

    useEffect(() => {
        const fetch = async () => {
            const aboutContent = await getAbout();
            setContent(aboutContent);
        };

        fetch();
    }, []);

    return content && <Bio {...content} />;
}
