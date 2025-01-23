import Background from '../../components/ui/animated-grid-pattern';
import Card from '../../components/ui/card';
import Profile from '.././profile';
import Image from 'next/image';

export default function Home() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <Background />
            <div className="flex">
                <div className="grid grid-rows-[5fr_3fr_1fr] gap-8 h-screen max-w-[32rem] pb-12 pt-20 px-12 ">
                    <Profile />
                </div>
                <div className="pt-20 h-screen w-2/3 ">
                    <div className="flex flex-wrap gap-8 w-full mt-24 justify-center">
                        <div className="h-[20rem] w-[20rem] relative">
                            <div className="flex gap-4 items-end justify-center absolute top-[-4rem]">
                                <Image
                                    src={'/house.svg'}
                                    alt="House"
                                    width={25}
                                    height={25}
                                />
                                <h4 className="text-xl font-roberto font-bold text-white">
                                    Accueil / Projets / Portfolio
                                </h4>
                            </div>
                            <Card width={100} height={85} borderRadius={20}>
                                <div className="flex justify-center items-center h-full">
                                    <Image
                                        src={'/image.png'}
                                        alt="Image"
                                        width={300}
                                        height={300}
                                    />
                                </div>
                            </Card>
                        </div>
                        <div className="h-[20rem] w-[20rem]">
                            <Card width={100} height={85} borderRadius={20}>
                                <div className="flex justify-center items-center h-full">
                                    <Image
                                        src={'/image.png'}
                                        alt="Image"
                                        width={300}
                                        height={300}
                                    />
                                </div>
                            </Card>
                        </div>
                        <div className="h-[20rem] w-[20rem]">
                            <Card width={100} height={85} borderRadius={20}>
                                <div className="flex justify-center items-center h-full">
                                    <Image
                                        src={'/image.png'}
                                        alt="Image"
                                        width={300}
                                        height={300}
                                    />
                                </div>
                            </Card>
                        </div>
                        <div className="h-[20rem] w-[20rem]">
                            <Card width={100} height={85} borderRadius={20}>
                                <div className="flex justify-center items-center h-full">
                                    <Image
                                        src={'/image.png'}
                                        alt="Image"
                                        width={300}
                                        height={300}
                                    />
                                </div>
                            </Card>
                        </div>
                        <div className="h-[20rem] w-[20rem]">
                            <Card width={100} height={85} borderRadius={20}>
                                <div className="flex justify-center items-center h-full">
                                    <Image
                                        src={'/image.png'}
                                        alt="Image"
                                        width={300}
                                        height={300}
                                    />
                                </div>
                            </Card>
                        </div>
                        <div className="h-[20rem] w-[20rem]">
                            <Card width={100} height={85} borderRadius={20}>
                                <div className="flex justify-center items-center h-full">
                                    <Image
                                        src={'/image.png'}
                                        alt="Image"
                                        width={300}
                                        height={300}
                                    />
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="absolute bottom-8">
                            <h6 className="text-base font-roberto font-light text-[#EFEFEF80] mt-8">
                                Tous droits réservés - {currentYear}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
