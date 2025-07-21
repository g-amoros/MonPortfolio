import { BsArrowReturnLeft } from 'react-icons/bs';
import React from 'react';
import Card from '../components/ui/card';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import WavingHand from '@/public/wavinghand.png';
import Polygon from '@/public/polygon.svg';
import Laptop from '@/public/Laptop.svg';
import Cabinet from '@/public/cabinet.svg';
import Palette from '@/public/palette.svg';
import Enveloppe from '@/public/enveloppe.png';
import Linkedin from '@/public/linkedin.svg';
import Github from '@/public/github.svg';
import Twitter from '@/public/x.svg';
import Instagram from '@/public/instagram.svg';
import Youtube from '@/public/youtube.svg';
import Pp from './pp.png';
import Tiktok from '@/public/tiktok.svg';
import { TextAnimate } from '@/components/ui/text-animate';
import { AnimatedSubscribeButton } from '@/components/ui/animated-subscribe-button';

const socials = [
    {
        name: 'Linkedin',
        icon: Linkedin,
        link: 'https://www.linkedin.com/in/gael-amoros/',
    },
    {
        name: 'Github',
        icon: Github,
        link: 'https://github.com/MisterGawel',
    },
    {
        name: 'Twitter',
        icon: Twitter,
        link: 'https://x.com/asgael13',
    },
    {
        name: 'Instagram',
        icon: Instagram,
        link: 'https://www.instagram.com/as.gael13/',
    },
    {
        name: 'Youtube',
        icon: Youtube,
        link: 'https://www.youtube.com/@as.gael13',
    },
    {
        name: 'Tiktok',
        icon: Tiktok,
        link: 'https://www.tiktok.com/@as.gael13',
    },
];

interface profileItemProps {
    text: string;
    image: StaticImageData;
    size: number;
}

const profileItem = ({ text, image, size }: profileItemProps) => {
    return (
        <>
            <div className="flex items-center">
                <div className="relative">
                    <Image
                        src={Polygon}
                        alt="Polygon"
                        width={60}
                        height={60}
                        className="min-w-14"
                    />
                    <Image
                        src={image}
                        alt="Image"
                        width={size}
                        style={{ width: size, height: size }}
                        height={size}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                </div>
                <div className="ml-4">
                    <span className="font-roberto font-semibold text-white text-sm">
                        {text}
                    </span>
                </div>
            </div>
        </>
    );
};

const profileItems = [
    {
        text: 'Creation de site web dynamiques et performants.',
        image: Laptop,
        size: 20,
    },
    {
        text: 'Des fondations solides avec un backend fiable et évolutif.',
        image: Cabinet,
        size: 20,
    },
    {
        text: "Création d'interfaces intuitives pour une expérience optimale.",
        image: Palette,
        size: 25,
    },
];

export default function Profile() {
    return (
        <>
            <div className="h-full animate__fadeIn animate__duration-1s animate__animated w-full md:w-1/2 lg:w-full">
                <Card width={100} height={100}>
                    <div className="flex items-start justify-center relative w-full">
                        <Image
                            src={Pp.src}
                            alt="profile picture"
                            width={Pp.width}
                            height={Pp.height}
                            loading="lazy"
                            quality={100}
                            className="absolute -top-16 w-48"
                        />
                    </div>
                    <div className="flex flex-col justify-center flex-shrink-0 px-12 mt-[10.5rem]">
                        <div className="flex items-end">
                            <h1
                                className="text-2xl text-[#efefefcc] font-degular font-bold"
                                style={{
                                    textShadow:
                                        '6.41px 6.41px 9.1px rgba(0, 0, 0, 0.11)',
                                }}
                            >
                                <TextAnimate delay={3} animation="blurInDown">
                                    Hello,
                                </TextAnimate>
                            </h1>
                            <Image
                                src={WavingHand}
                                alt="Waving Hand"
                                width={40}
                                height={40}
                                className="ml-2 pb-2"
                            />
                        </div>
                        <h2 className="text-4xl text-[#efefef] font-degular font-black">
                            <TextAnimate animation="blurInDown">
                                I&apos;m Gaël Amoros
                            </TextAnimate>
                        </h2>
                        <p className="text-[#efefef] text-sm font-roberto font-normal mt-3">
                            Basé à Avignon, je conçois et développe{' '}
                            <br className="hidden lg:block" />
                            des solutions web sur mesure pour répondre{' '}
                            <br className="hidden sm:block" />à vos besoins
                            numériques.
                        </p>
                        <p className="text-[#efefef] text-sm font-roberto mt-8 font-bold">
                            Découvrez ce que je peux vous offrir :
                        </p>
                    </div>
                    <div className="flex flex-col justify-center flex-shrink-0 px-12 gap-4 mb-10 my-8">
                        {profileItems.map((item, index) => (
                            <div key={index}>{profileItem(item)}</div>
                        ))}
                    </div>
                </Card>
            </div>
            <div className="h-fit animate__fadeIn animate__duration-1s w-full md:w-1/2 lg:w-full">
                <Card width={100} height={100}>
                    <div className="h-full flex flex-col justify-between gap-8 px-12 py-12">
                        <div className="flex items-center">
                            <h1
                                className="text-2xl text-[#fff] font-degular font-bold"
                                style={{
                                    textShadow:
                                        '6.41px 6.41px 9.1px rgba(0, 0, 0, 0.11)',
                                }}
                            >
                                Contactez-moi ici :
                                <span className="ml-2">
                                    <BsArrowReturnLeft className="inline-block text-[#fff] text-2xl -rotate-90" />
                                </span>
                            </h1>
                        </div>
                        <div className="flex items-center flex-col gap-4">
                            <AnimatedSubscribeButton className="w-36">
                                <span className="group inline-flex items-center text-xl font-degular font-semibold text-[#FFF]">
                                    <Image
                                        src={Enveloppe}
                                        alt="Enveloppe"
                                        width={20}
                                        height={20}
                                        className="mr-3"
                                    />
                                    <TextAnimate className="mr-3">
                                        pro@gael-amoros.fr
                                    </TextAnimate>
                                </span>
                                <span className="group inline-flex items-center text-xl font-degular font-semibold text-[#FFF]">
                                    <TextAnimate
                                        animation="slideLeft"
                                        duration={0.1}
                                        className="mr-3"
                                    >
                                        Mail copié !
                                    </TextAnimate>
                                </span>
                            </AnimatedSubscribeButton>
                        </div>
                        <div className="flex relative justify-between w-full gap-3">
                            {socials.map((social, index) => (
                                <a
                                    href={social.link}
                                    key={index}
                                    target="_blank"
                                    data-aos="zoom-in"
                                    rel="noopener noreferrer"
                                    className=" h-fit hover:!scale-90 transform transition-all duration-300"
                                >
                                    <Image
                                        src={social.icon}
                                        alt={social.name}
                                        className="bottom-0"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </Card>
            </div>
        </>
    );
}
