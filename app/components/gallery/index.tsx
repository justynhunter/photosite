import { Photo } from "~/lib/types";
import clsx from "clsx";
import { useState } from "react";
import styles from "./style.module.css";

type GalleryProps = {
    photographs: Photo[];
};

export function Gallery({ photographs }: GalleryProps) {
    const lastImageIndex = photographs.length - 1;
    const [active, setActive] = useState(0);

    return (
        <section className={styles.wrapper}>
            <button
                className={styles.button}
                onClick={() =>
                    setActive(active === 0 ? lastImageIndex : active - 1)}
            />
            {photographs.map((photo, index) => {
                return (
                    <div
                        key={photo.url}
                        className={clsx(
                            styles.imageWrapper,
                            active === index && styles.show,
                        )}
                    >
                        <img
                            className={clsx(styles.image)}
                            src={photo.url}
                            alt=""
                        />
                    </div>
                );
            })}
            <button
                className={styles.button}
                onClick={() =>
                    setActive(active === lastImageIndex ? 0 : active + 1)}
            />
        </section>
    );
}
