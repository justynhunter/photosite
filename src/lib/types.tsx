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
