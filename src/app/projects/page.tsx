"use client"

import Card from '@/components/ui/card';
import Image from 'next/image';
import ImageE from '@/public/image.png';
import Link from 'next/link';
import projectsData from '@/data/projects.json';

export default function Projects() {
    return (
        <>

            <div className="flex flex-wrap gap-8 w-full mt-24 justify-center">
                {
                    projectsData.map((project) => (
                        <div key={project.id} className="h-fit w-fit">
                            <Card width={80} height={67} borderRadius={20}>
                                <Link href={`/projects/${project.id}`}>
                                    <div className="flex justify-center items-center h-full p-4" >
                                        <Image
                                            src={ImageE}
                                            alt="Image"
                                            width={250}
                                            height={250}
                                        />
                                    </div>
                                </Link>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </>
    );
}
