import { strapiSDK } from "@strapi/sdk-js";
import { AboutContent, ProjectContent } from "./types";

function getStrapiClient() {
    const client = strapiSDK({
        baseURL: import.meta.env.VITE_STRAPI_URL as string,
        auth: {
            strategy: "api-token",
            options: {
                token: import.meta.env.VITE_STRAPI_API_TOKEN,
            },
        },
    });

    return client;
}

export async function getAbout() {
    const client = getStrapiClient();
    const aboutContent = await client.single("about").find({
        populate: {
            publishedItems: {
                populate: "*",
            },
            socials: {
                populate: "*",
            },
        },
    });

    console.log("content", aboutContent);

    return aboutContent.data as unknown as AboutContent;
}

export async function getProject(slug: string) {
    const client = getStrapiClient();
    const matches = await client.collection("projects").find({
        filters: {
            slug: {
                eq: slug,
            },
        },
        populate: {
            photographs: {
                populate: "*",
            },
        },
    });

    const projectContent = matches.data[0] as unknown as object;
    return { ...projectContent } as ProjectContent;
}
