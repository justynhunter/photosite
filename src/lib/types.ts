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

export type Photograph = {
    caption: string;
    url: string;
};

export type Project = {
    title: string;
    slug: string;
    photographs: Photograph[];
};

export type BioComponent = {
    __component: "Bio";
    bio: BlocksContent;
    socials: Social[];
    publishedItems: PublishedItem[];
};
