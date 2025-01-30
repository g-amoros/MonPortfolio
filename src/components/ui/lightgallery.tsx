'use client';

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export default function Gallery({ projectId, photos }: { projectId: string, photos: string[] }) {
    return (
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
                        href={`Projects/Project${projectId}${photo}`}
                        className="w-[calc(33.33%-8px)] max-w-[50%] hover:scale-105 transition-all grow"
                    >
                        <img
                            src={`Projects/Project${projectId}${photo}`}
                            alt="Image"
                            className="w-full h-auto rounded-[15px]"
                            width={70}
                            height={70}
                        />
                    </a>
                ))}
        </LightGallery>
    );
}