'use client';

import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import Image from 'next/image';
import ImageE from '@/public/Projet3-DypYubmy.png';

export default function Gallery({ photos }: { photos: string[] }) {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
        >
            {photos &&
                photos.map((photo, index) => (
                    <a
                        key={index}
                        href={photo}
                        className="w-[calc(33.33%-8px)]"
                    >
                        <Image
                            src={ImageE}
                            alt="Image"
                            className="w-full h-auto rounded-[15px]"
                            width={112}
                            height={112}
                        />
                    </a>
                ))}
        </LightGallery>
    );
}
