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
    bio: BlocksContent;
    socials: Social[];
    publishedItems: PublishedItem[];
};

export type ContactContent = {
    content: BlocksContent;
    successContent: BlocksContent;
};

export type Photo = {
    url: string;
    caption: string;
};

export type ProjectContent = {
    slug: string;
    title: string;
    description: BlocksContent;
    photographs: Photo[];
};

export type HomeContent = {
    projectSlug: string;
}
