import { BlocksContent } from "@strapi/blocks-react-renderer";

export type PublishedItem = {
    title: string;
    url: string;
    description: string;
};

export type Social = {
    text: string;
    url: string;
};

export type AboutContent = {
    __component: "Bio";
    bio: BlocksContent;
    socials: Social[];
    publishedItems: PublishedItem[];
};

export type ProjectContent = {
    slug: string;
    title: string;
    description: BlocksContent;
    photographs: object[];
};
