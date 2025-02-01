'use client';

import Card from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import projectsData from '@/data/projects.json';
import { BlurFade } from '@/components/ui/blur-fade';

export default function Projects() {
    return (
        <>

            <div className="flex flex-wrap sm:-mx-4">
                {projectsData.map((project, index) => (
                    <div
                        key={project.id}
                        className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/3 sm:px-4 mb-8"
                    >
                        <BlurFade delay={0.15 + index * 0.15} inView>
                            <Card
                                width={0}
                                height={0}
                                borderRadius={20}
                                css={
                                    'hover:bg-custom-gradient-card transform hover:scale-[1.02] hover:opacity-80 transition-transform !border-none shadow-xl'
                                }
                            >
                                <Link
                                    href={`/${project.id}`}
                                    className="cursor-pointer"
                                >
                                    <div className="flex justify-center items-center">
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
        </>
    );
}
