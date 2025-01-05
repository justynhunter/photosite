import { strapiSDK } from "@strapi/sdk-js";
import { AboutContent, ContactContent, HomeContent, ProjectContent } from "./types";

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

export async function getHome() {
    const client = getStrapiClient();
    const homeContent = await client.single("about").find();

    return { projectSlug: homeContent.data.project_slug } as HomeContent;
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

    return aboutContent.data as unknown as AboutContent;
}

export async function getContact() {
    const client = getStrapiClient();
    const contactContent = await client.single("contact").find({
        populate: "*",
    });

    return contactContent.data as unknown as ContactContent;
}

export async function getProjects() {
    const client = getStrapiClient();
    const projects = await client.collection("projects").find();

    return projects.data as unknown[] as ProjectContent[];
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

    const projectContent = matches.data[0] as unknown as ProjectContent;
    return {
        ...projectContent,
        photographs: projectContent.photographs.map((photo) => {
            return {
                ...photo,
            };
        }),
    };
}
