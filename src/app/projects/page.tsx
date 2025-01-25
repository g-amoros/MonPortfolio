'use client';

import Card from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import projectsData from '@/data/projects.json';
import Path from '@/components/ui/path';
import { BlurFade } from '@/components/ui/blur-fade';

const images = Array.from({ length: 9 }, (_, i) => {
    const isLandscape = i % 2 === 0;
    const width = isLandscape ? 800 : 600;
    const height = isLandscape ? 600 : 800;
    return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

export default function Projects() {
    return (
        <>
            <div className="w-[80%] mx-auto flex flex-col min-h-full">
                <Path />
                <div className="flex flex-wrap -mx-4">
                    {projectsData.map((project, index) => (
                        <div
                            key={project.id}
                            className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8"
                        >
                            <BlurFade delay={0.25 + index * 0.2} inView>
                                <Card
                                    width={0}
                                    height={0}
                                    borderRadius={20}
                                    css={'hover:bg-custom-gradient-card'}
                                >
                                    <Link
                                        href={`/projects/${project.id}`}
                                        className="cursor-pointer"
                                    >
                                        <div className="flex justify-center items-center p-4">
                                            <Image
                                                src={project.image}
                                                alt="Image"
                                                width={100}
                                                height={100}
                                                className="w-full h-auto rounded-xl"
                                                layout="responsive"
                                            />
                                        </div>
                                    </Link>
                                </Card>
                            </BlurFade>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
