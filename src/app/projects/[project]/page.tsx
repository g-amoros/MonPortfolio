import projectsData from '@/data/projects.json';
import Card from '@/components/ui/card';
import Image from 'next/image';
import Frame from '@/public/frame.svg';
import Langages from '@/public/langages.svg';
import Outils from '@/public/outils.svg';
import Frameworks from '@/public/frameworks.svg';
import ImageE from '@/public/Projet3.png';
import GithubIcon from '@/public/githubIcon.svg';
import { Suspense } from 'react';
import { list } from '@vercel/blob';
import LightGallery from '@/components/ui/lightgallery';
import Path from '@/components/ui/path';

// Pré-génération des pages statiques, pour chaque projet du fichier projects.json
export async function generateStaticParams() {
    // Pour chaque projet, on retourne un objet avec la clé project
    return projectsData.map((project) => ({
        project: project.id.toString(),
    }));
}

async function VideoComponent({ fileName }: { fileName: string }) {
    const { blobs } = await list();

    console.log(blobs[0].url);
    const { url } = blobs[0];

    if (!url) {
        return <div>Video not found</div>;
    }

    return (
        <video
            controls
            preload="none"
            aria-label="Video player"
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

// Détails de chacun des projets
export default function ProjectDetail({
    params,
}: {
    params: { project: string };
}) {
    const project = projectsData.find(
        (p) => p.id.toString() === params.project,
    );

    //! Mettre en place une page d'erreur 404
    if (!project) {
        return <div>Projet non trouvé</div>;
    }

    return (
        <>
            <div className="w-[80%] mx-auto flex flex-col min-h-full justify-between">
                <Path projectName={project.name} />
                <Card width={100} height={0} borderRadius={20}>
                    <div className="grid justify-center items-center h-auto py-4">
                        <div>
                            <h1
                                className="text-[#FFF] font-degular font-bold text-3xl"
                                style={{
                                    textShadow:
                                        '6.41px 6.41px 9.1px rgba(0, 0, 0, 0.11)',
                                }}
                            >
                                Portfolio de BANKAI-PSD
                            </h1>
                            <h6 className="text-sm font-degular font-light text-[#EFEFEFCC] italic text-center mt-2">
                                Un site vitrine pour un graphiste freelance.
                            </h6>
                        </div>
                    </div>
                </Card>
                <div className="flex justify-between gap-8 mt-8">
                    <div className="w-1/2 flex flex-col gap-8 h-full max-h-full">
                        <div className="w-full rounded-xl">
                            <Suspense fallback={<div>Loading...</div>}>
                                <VideoComponent fileName="Projet3.mp4" />
                            </Suspense>
                        </div>
                        <div className="flex flex-wrap w-full gap-2 justify-between">
                            {project.images &&
                                project.images.map((image, index) => (
                                    <div
                                        className="w-[calc(33.33%-8px)]"
                                        key={index}
                                    >
                                        <Image
                                            src={ImageE}
                                            alt="Image"
                                            className="w-full h-auto rounded-[15px]"
                                            width={66}
                                            height={66}
                                        />
                                    </div>
                                ))}
                            {/* <LightGallery photos={project.images || []} /> */}
                        </div>
                        <div>
                            <Card width={100} height={0} borderRadius={20}>
                                <div className="flex justify-between w-full items-center px-8 py-6">
                                    <span className="font-roberto font-normal text-[#EFEFEFCC]">
                                        Réalisation le :
                                    </span>
                                    <span className="font-roberto font-normal text-[#EFEFEFCC]">
                                        10/20/2023
                                    </span>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="w-1/2 flex grow h-auto">
                        <Card width={100} height={0} borderRadius={20}>
                            <div className="p-12 grid grid-rows-[1fr,auto] h-full">
                                <div>
                                    <div className="flex gap-4 items-center">
                                        <Image
                                            src={Frame}
                                            alt="Frame"
                                            width={40}
                                            height={40}
                                        />
                                        <h1 className="text-[#FFF] font-degular font-bold text-xl">
                                            Résumé du projet :
                                        </h1>
                                    </div>
                                    <div>
                                        <p className="text-[#EFEFEF] font-roberto font-light text-base mt-8 leading-7 text-pretty">
                                            Conception d&apos;un portfolio
                                            responsive pour un graphiste
                                            freelance, visant à présenter ses
                                            créations et attirer de nouveaux
                                            clients. Le site met l&apos;accent
                                            sur l&apos;accessibilité et la
                                            performance.
                                        </p>
                                    </div>
                                    <div className="mt-8">
                                        <div>
                                            <h5 className="text-[#EFEFEF80] font-degular text-sm font-light">
                                                Langages
                                            </h5>
                                            <div className="flex items-center gap-4 mt-1">
                                                <Image
                                                    src={Langages}
                                                    alt="Frame"
                                                    width={40}
                                                    height={40}
                                                />
                                                <span className="font-roberto text-lg font-light text-[#FFF]">
                                                    HTML, CSS, JavaScript,
                                                    Python
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <h5 className="text-[#EFEFEF80] font-degular text-sm font-light">
                                                Frameworks
                                            </h5>
                                            <div className="flex items-center gap-4 mt-1">
                                                <Image
                                                    src={Frameworks}
                                                    alt="Frame"
                                                    width={40}
                                                    height={40}
                                                />
                                                <span className="font-roberto text-lg font-light text-[#FFF]">
                                                    React, Vue, Angular, NodeJS
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <h5 className="text-[#EFEFEF80] font-degular text-sm font-light">
                                                Outils
                                            </h5>
                                            <div className="flex items-center gap-4 mt-1">
                                                <Image
                                                    src={Outils}
                                                    alt="Frame"
                                                    width={40}
                                                    height={40}
                                                />
                                                <span className="font-roberto text-lg font-light text-[#FFF]">
                                                    Git, Webpack, DockerA
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-center w-full mb-6">
                                        <h4 className="font-roberto font-normal text-[#EFEFEF80]">
                                            Site :{' '}
                                            <span className="text-[#FFF] underline underline-offset-4 ">
                                                https://bankai-psd.fr
                                            </span>{' '}
                                        </h4>
                                    </div>
                                    <div className="flex items-center gap-4 w-full">
                                        <button className="flex justify-center w-full items-center px-6 py-3 font-degular font-normal text-white text-lg gap-4">
                                            <Image
                                                src={GithubIcon}
                                                alt="Github"
                                                width={25}
                                                height={25}
                                            />
                                            <span>Lien du projet GitHub</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
