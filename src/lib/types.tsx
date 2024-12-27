export type Photograph = {
    caption: string;
    url: string;
};

export type Project = {
    title: string;
    slug: string;
    photographs: Photograph[];
};
