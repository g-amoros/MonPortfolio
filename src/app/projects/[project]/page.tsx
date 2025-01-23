import projectsData from '@/data/projects.json';
import Card from '@/components/ui/card';
import Image from 'next/image';
import Frame from '@/public/frame.svg';
import Langages from '@/public/langages.svg';
import Outils from '@/public/outils.svg';
import Frameworks from '@/public/frameworks.svg';
import ImageE from '@/public/image.png';
import GithubIcon from '@/public/githubIcon.svg';

// Pré-génération des pages statiques, pour chaque projet du fichier projects.json
export async function generateStaticParams() {
    // Pour chaque projet, on retourne un objet avec la clé project
    return projectsData.map(project => ({
        project: project.id.toString(),
    }));
}

// Détails de chacun des projets
export default function ProjectDetail({ params }: { params: { project: string } }) {
    const project = projectsData.find(p => p.id.toString() === params.project);

    //! Mettre en place une page d'erreur 404
    if (!project) {
        return <div>Projet non trouvé</div>;
    }

    return (
        <>
            <div className='h-full'>
                <div className='h-[15%]'>
                    <Card width={100} height={100} borderRadius={20}>
                        <div className='grid justify-center items-center h-full'>
                            <div>
                                <h1 className='text-[#FFF] font-degular font-bold text-3xl'
                                    style={{ textShadow: "6.41px 6.41px 9.1px rgba(0, 0, 0, 0.11)" }}
                                >Portfolio de BANKAI-PSD</h1>
                                <h6 className='text-sm font-degular font-light text-[#EFEFEFCC] italic text-center'>Un site vitrine pour un graphiste freelance.</h6>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='flex justify-between gap-8 pt-8 h-[85%]'>
                    <div className='w-1/2 flex flex-col gap-8'>
                        <div className='w-full'>
                            <Image src={ImageE} alt='Image' className='w-full' />
                        </div>
                        <div className='flex flex-wrap'>
                            <Image src={ImageE} alt='Image' className='w-28 h-28' />
                            <Image src={ImageE} alt='Image' className='w-28 h-28' />
                            <Image src={ImageE} alt='Image' className='w-28 h-28' />
                            <Image src={ImageE} alt='Image' className='w-28 h-28' />
                            <Image src={ImageE} alt='Image' className='w-28 h-28' />
                            <Image src={ImageE} alt='Image' className='w-28 h-28' />
                        </div>
                        <div>
                            <Card width={100} height={100} borderRadius={20}>
                                aa
                            </Card>
                        </div>
                    </div>
                    <div className='w-1/2 h-full'>
                        <Card width={100} height={100} borderRadius={20}>
                            <div className="p-8 grid grid-rows-[1fr,auto] h-full">
                                <div>
                                    <div className='flex gap-4'>
                                        <Image src={Frame} alt='Frame' />
                                        <h1 className='text-[#FFF] font-degular font-bold text-lg'>Résumé du projet :</h1>
                                    </div>
                                    <div>
                                        <p className='text-[#EFEFEF] font-roberto font-light text-sm mt-8 leading-6 text-pretty'>
                                            Conception d'un portfolio responsive pour un graphiste freelance, visant à présenter ses créations et attirer de nouveaux clients. Le site met l'accent sur l'accessibilité et la performance.
                                        </p>
                                    </div>
                                    <div className='mt-8'>
                                        <div>
                                            <h5 className='text-[#EFEFEF80] font-degular text-xs font-light'>Langages</h5>
                                            <div className='flex items-center gap-4 mt-1'>
                                                <Image src={Langages} alt='Frame' />
                                                <span className='font-roberto text-base font-light text-[#FFF]'>HTML, CSS, JavaScript, Python</span>
                                            </div>
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='text-[#EFEFEF80] font-degular text-xs font-light'>Frameworks</h5>
                                            <div className='flex items-center gap-4 mt-1'>
                                                <Image src={Frameworks} alt='Frame' />
                                                <span className='font-roberto text-base font-light text-[#FFF]'>React, Vue, Angular, NodeJS</span>
                                            </div>
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='text-[#EFEFEF80] font-degular text-xs font-light'>Outils</h5>
                                            <div className='flex items-center gap-4 mt-1'>
                                                <Image src={Outils} alt='Frame' />
                                                <span className='font-roberto text-base font-light text-[#FFF]'>Git, Webpack, DockerA</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-center w-full mb-6'>
                                        <h4 className='font-roberto font-normal text-[#EFEFEF80]'>Site : <span className='text-[#FFF] underline underline-offset-4 '>https://bankai-psd.fr</span> </h4>
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