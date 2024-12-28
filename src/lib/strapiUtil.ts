import { strapiSDK } from "@strapi/sdk-js";
import { BioComponent } from "./types";

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
            bioComponent: {
                populate: "*",
            },
        },
    });

    return { ...aboutContent.data.bioComponent } as BioComponent;
}
