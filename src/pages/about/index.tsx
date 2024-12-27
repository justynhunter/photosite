import { Bio, BioProps } from "@components/bio";

export type AboutProps = {
    bio: BioProps;
};

export function About({ bio }: AboutProps) {
    return <Bio {...bio} />;
}
