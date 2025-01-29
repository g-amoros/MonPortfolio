'use client';

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export default function Gallery({ photos }: { photos: string[] }) {

    return (
        <>
            <LightGallery
                speed={500}
                licenseKey="0000-0000-000-0000"
                download={false}
                plugins={[lgThumbnail, lgZoom]}
            >
                {photos &&
                    photos.map((photo, index) => (
                        <a
                            key={index}
                            href="Projects/Project1/Projet1.png"
                            className="!w-[calc(33.33%-8px)] hover:scale-105 transition-all"
                        >
                            <img
                                src="Projects/Project1/Projet1.png"
                                alt="Image"
                                className="!w-full h-auto rounded-[15px]"
                                width={70}
                                height={70}
                            />
                        </a>
                    ))}
            </LightGallery>
        </>
    );
}
