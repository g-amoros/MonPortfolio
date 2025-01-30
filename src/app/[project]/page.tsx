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
import { BackButton, BackButtonMobile } from '@/components/ui/back-button';
import 'react-photo-album/rows.css';
import LightGallery from '@/components/ui/lightgallery';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from '@mui/material/Skeleton';
import Globe from '@/public/globe.png';
import { TextAnimate } from '@/components/ui/text-animate';

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
        'Base de données': base_de_donnees,
    };

    return (
        <div>
            {Object.entries(toolCategories).map(
                ([category, items]) =>
                    items ? (
                        <div key={category} className="mb-4">
                            <h5 className="text-[#EFEFEF80] font-degular text-base font-light">
                                {category}
                            </h5>
                            <div className="flex items-center gap-4 mt-1">
                                <Image
                                    src={
                                        category === 'Langages'
                                            ? Langages
                                            : category === 'Frameworks'
                                                ? Frameworks
                                                : Outils
                                    }
                                    alt={category}
                                    width={35}
                                    height={35}
                                />
                                <span className="font-roberto text-base font-light text-[#FFF]">
                                    {items.join(', ')}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div key={category} className="mb-4">
                            <h5 className="text-[#EFEFEF80] font-degular text-base font-light">
                                {category}
                            </h5>
                            <div className="flex items-center gap-4 mt-1">
                                <Image
                                    src={
                                        category === 'Langages'
                                            ? Langages
                                            : category === 'Frameworks'
                                                ? Frameworks
                                                : Outils
                                    }
                                    alt={category}
                                    width={35}
                                    height={35}
                                />
                                <span className="font-roberto text-base font-light text-[#FFF]">
                                    Aucun{category === 'Base de données' ? 'e' : null} {category.toLowerCase()} utilisé{category === 'Base de données' ? 'e' : null}
                                </span>
                            </div>
                        </div>
                    )
            )}
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

    if (!project) {
        return (
            <>
                <Card
                    width={0}
                    height={0}
                    borderRadius={20}
                    css="mb-6 block md:hidden"
                >
                    <BackButtonMobile />
                </Card>
                <Card borderRadius={20} width={100} height={0}>
                    <div className="relative flex w-full h-full items-center justify-center">
                        <BackButton />
                        <div className=" px-6 py-4 text-center flex flex-col items-center justify-center">
                            <h1 className="text-xl 2xl:text-3xl font-degular font-semibold text-[#EFEFEF] flex items-center gap-3">
                                <span className="text-[#ef4444] text-2xl">⚠️</span> Erreur : Projet non trouvé
                            </h1>
                            <p className="text-[#efefefcc] text-sm 2xl:text-lg mt-2 font-light font-roberto">
                                Le projet que vous cherchez <br className='hidden lg:block xl:hidden' />n&apos;existe pas ou a été supprimé.
                            </p>
                        </div>
                    </div>
                </Card>
            </>
        );
    }

    return (
        <>
            <Card
                width={0}
                height={0}
                borderRadius={20}
                css="mb-6 block md:hidden"
            >
                <BackButtonMobile />
            </Card>
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
            <div className="xl:flex justify-between items-start gap-8 mt-8 grow">
                <div className="2xl:w-[60%] w-full flex flex-col gap-8">
                    <div className="w-full rounded-xl relative">
                        <Suspense
                            fallback={
                                <Skeleton
                                    width={'100%'}
                                    height={300}
                                    variant="rounded"
                                    className="!rounded-xl"
                                    style={{
                                        backgroundColor: 'rgba(0,0,0,0.30)',
                                    }}
                                />
                            }
                        >
                            <VideoComponent fileName={project.video} />
                        </Suspense>
                    </div>
                    <LightGallery photos={project.images} projectId={project.id} />
                </div>
                <div className="2xl:w-[40%] w-full flex h-auto mt-8 xl:mt-0">
                    <Card width={100} height={0} borderRadius={20}>
                        <div className="p-12 grid grid-rows-[1fr,auto] h-full">
                            <div className="flex gap-4 items-center">
                                <Image
                                    src={Frame}
                                    alt="Frame"
                                    width={41}
                                    height={41}
                                />
                                <h1
                                    className="text-2xl text-[#fff] font-degular font-bold"
                                    style={{
                                        textShadow:
                                            '6.41px 6.41px 9.1px rgba(0, 0, 0, 0.11)',
                                    }}
                                >
                                    Résumé du projet
                                </h1>
                            </div>
                            <div>
                                <p className="text-[#EFEFEF] font-roberto font-light text-base mt-8 leading-7 text-balance">
                                    {project.description}
                                </p>
                            </div>
                            <div className="my-8">
                                <Tools
                                    langages={project.langages}
                                    frameworks={project.frameworks}
                                    base_de_donnees={project.base_de_donnees}
                                />
                            </div>
                            {project.url && (
                                <>
                                    <div className="flex justify-center w-full my-6 text-base">
                                        <h4 className="font-degular font-normal text-[#EFEFEF80]">
                                            <a
                                                className="text-[#FFF] link"
                                                href={project.url || undefined}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {project.url?.includes('github')
                                                    ? null
                                                    : project.url}
                                            </a>{' '}
                                        </h4>
                                    </div>
                                    <a
                                        className="flex items-center gap-4 w-full"
                                        href={project.url || undefined}
                                    >
                                        <button className="button flex justify-center w-full items-center px-6 h-14 font-degular font-semibold text-white text-xl gap-4">
                                            <Image
                                                src={
                                                    (project.url?.includes(
                                                        'github',
                                                    ) ?? false)
                                                        ? GithubIcon
                                                        : Globe
                                                }
                                                alt="Github"
                                                width={25}
                                                className="animate__fadeIn animate__animated animate__faster"
                                                height={25}
                                            />
                                            <span>
                                                <TextAnimate>
                                                    {(project.url?.includes(
                                                        'github',
                                                    ) ?? false)
                                                        ? 'Voir le code'
                                                        : 'Voir le site'}
                                                </TextAnimate>
                                            </span>
                                        </button>
                                    </a>
                                </>
                            )}
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}
