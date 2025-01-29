import projectsData from '@/data/projects.json';
import Card from '@/components/ui/card';
import Image from 'next/image';
import Frame from '@/public/frame.svg';
import Langages from '@/public/langages.svg';
import Outils from '@/public/outils.svg';
import Frameworks from '@/public/frameworks.svg';
import GithubIcon from '@/public/githubIcon.svg';
import { Suspense } from 'react';
import { list } from '@vercel/blob';
import BackButton from '@/components/ui/back-button';
import "react-photo-album/rows.css";
import LightGallery from '@/components/ui/lightgallery';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
// Pré-génération des pages statiques, pour chaque projet du fichier projects.json
export async function generateStaticParams() {
    // Pour chaque projet, on retourne un objet avec la clé project
    return projectsData.map((project) => ({
        project: project.id.toString(),
    }));
}

async function VideoComponent({ fileName }: { fileName: string }) {
    const { blobs } = await list();

    const { url } = blobs.find((blob) => blob.pathname === fileName) || {};

    if (!url) {
        return <div>Video not found</div>;
    }

    return (
        <video
            controls
            preload="none"
            aria-label="Project video"
            autoPlay
            loop
            muted
            className="w-full h-full rounded-[20px]"
        >
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}

interface ToolsProps {
    langages?: string[] | null;
    frameworks?: string[] | null;
    base_de_donnees?: string[] | null;
}

const Tools = ({ langages, frameworks, base_de_donnees }: ToolsProps) => {
    const toolCategories = {
        Langages: langages,
        Frameworks: frameworks,
        "Bases de données": base_de_donnees,
    };

    return (
        <div>
            {Object.entries(toolCategories).map(([category, items]) => (
                items && (
                    <div key={category} className="mb-4">
                        <h5 className="text-[#EFEFEF80] font-degular text-sm font-light">
                            {category}
                        </h5>
                        <div className="flex items-center gap-4 mt-1">
                            <Image
                                src={category === "Langages" ? Langages : category === "Frameworks" ? Frameworks : Outils}
                                alt={category}
                                width={35}
                                height={35}
                            />
                            <span className="font-roberto text-lg font-light text-[#FFF]">
                                {items}
                            </span>
                        </div>
                    </div>
                )
            ))}
        </div>
    );
};



// Détails de chacun des projets
export default async function ProjectDetail(props: {
    params: Promise<{ project: string }>;
}) {
    const params = await props.params;
    const project = projectsData.find(
        (p) => p.id.toString() === params.project,
    );

    //! Mettre en place une page d'erreur 404
    if (!project) {
        return <div>Projet non trouvé</div>;
    }



    return (
        <>
            <div>
                <Card width={100} height={0} borderRadius={20}>
                    <div className="grid justify-center items-center h-auto py-4 relative">
                        <BackButton />
                        <h1
                            className="text-[#FFF] font-degular font-bold text-3xl text-center"
                            style={{
                                textShadow:
                                    '6.41px 6.41px 9.1px rgba(0, 0, 0, 0.11)',
                            }}
                        >
                            {project.name}
                        </h1>
                        <h6 className="text-sm font-degular font-light text-[#EFEFEFCC] italic text-center mt-2">
                            {project.subtitle}
                        </h6>
                    </div>
                </Card>
            </div>
            <div className="xl:flex justify-between items-start gap-8 mt-8 grow">
                <div className="xl:w-1/2 w-full flex flex-col gap-8">
                    <div className="w-full rounded-xl relative">
                        <Suspense fallback={<Skeleton className='w-full h-full' />}>
                            <VideoComponent fileName={project.video} />
                        </Suspense>
                    </div>
                    <LightGallery photos={project.images} />
                    <div className="w-full flex justify-center items-center mb-6">
                        <h1
                            className="text-base text-[#efefefcc] opacity-70 font-degular font-semibold"
                            style={{
                                textShadow:
                                    '6.41px 6.41px 9.1px rgba(0, 0, 0, 0.11)',
                            }}
                        >
                            Projet réalisé le {project.date}
                        </h1>
                    </div>
                </div>
                <div className="xl:w-1/2 w-full flex h-auto">
                    <Card width={100} height={0} borderRadius={20}>
                        <div className="p-12 grid grid-rows-[1fr,auto] h-full">
                            <div className="flex gap-4 items-center">
                                <Image
                                    src={Frame}
                                    alt="Frame"
                                    width={35}
                                    height={35}
                                />
                                <h1 className="text-[#FFF] font-degular font-bold text-xl">
                                    Résumé du projet :
                                </h1>
                            </div>
                            <div>
                                <p className="text-[#EFEFEF] font-roberto font-light text-base mt-8 leading-7 text-pretty">
                                    {project.description}
                                </p>
                            </div>
                            <div className="my-8">
                                <Tools langages={project.langages} frameworks={project.frameworks} base_de_donnees={project.base_de_donnees} />
                            </div>
                            {project.url && (
                                <div className="flex justify-center w-full my-6 text-base">
                                    <h4 className="font-degular font-normal text-[#EFEFEF80]">
                                        Site :{' '}
                                        <a
                                            className="text-[#FFF] link"
                                            href={project.url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {project.url}
                                        </a>{' '}
                                    </h4>
                                </div>
                            )}
                            <a
                                className="flex items-center gap-4 w-full"
                                href={project.github}
                            >
                                <button className="button-animate flex justify-center w-full items-center px-6 py-4 font-degular font-semibold text-white text-lg gap-4">
                                    <Image
                                        src={GithubIcon}
                                        alt="Github"
                                        width={25}
                                        height={25}
                                    />
                                    <span>Lien du projet GitHub</span>
                                </button>
                            </a>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}
