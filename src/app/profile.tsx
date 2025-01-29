import React from 'react';
import Card from '../components/ui/card';
import Image from 'next/image';
import Pp from '../../public/pp.svg';
import type { StaticImageData } from 'next/image';
import WavingHand from '@/public/WavingHand.svg';
import Polygon from '@/public/polygon.svg';
import Laptop from '@/public/Laptop.svg';
import Cabinet from '@/public/cabinet.svg';
import Palette from '@/public/palette.svg';
import Enveloppe from '@/public/enveloppe.png';
import Html from '@/public/html.svg';
import Css from '@/public/css.svg';
import Js from '@/public/js.svg';
import Ts from '@/public/ts.svg';
import Node from '@/public/nodejs.svg';
import ReactIcon from '@/public/react.svg';
import Php from '@/public/php.svg';
import C from '@/public/c.svg';
import Linkedin from '@/public/linkedin.svg';
import Github from '@/public/github.svg';
import Twitter from '@/public/x.svg';
import Instagram from '@/public/instagram.svg';
import Youtube from '@/public/youtube.svg';
import Tiktok from '@/public/tiktok.svg';
import NextJS from '@/public/nextjs.svg';
import Vite from '@/public/vite.svg';
import Expo from '@/public/expo.svg';
import Java from '@/public/java.svg';
import { TextAnimate } from '@/components/ui/text-animate';
import { AnimatedSubscribeButton } from '@/components/ui/animated-subscribe-button';
import Tick from '@/public/tick.png';

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

const skills = {
    langages: [
        {
            name: 'HTML',
            icon: Html,
            width: 45,
            height: 45,
        },
        {
            name: 'CSS',
            icon: Css,
            width: 45,
            height: 45,
        },
        {
            name: 'Javascript',
            icon: Js,
            width: 45,
            height: 45,
        },
        {
            name: 'Typescript',
            icon: Ts,
            width: 55,
            height: 55,
        },

        {
            name: 'Php',
            icon: Php,
            width: 45,
            height: 45,
        },
        {
            name: 'Java',
            icon: Java,
            width: 45,
            height: 45,
        },
        {
            name: 'C++',
            icon: C,
            width: 45,
            height: 45,
        },
    ],
    frameworks: [
        {
            name: 'Node',
            icon: Node,
            width: 45,
            height: 45,
        },
        {
            name: 'React',
            icon: ReactIcon,
            width: 45,
            height: 45,
        },
        {
            name: 'NextJS',
            icon: NextJS,
            width: 45,
            height: 45,
        },
        {
            name: 'Vite',
            icon: Vite,
            width: 45,
            height: 45,
        },
        {
            name: 'Expo',
            icon: Expo,
            width: 45,
            height: 45,
        },
    ],
};

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
                        style={{width: size, height: size}}
                        height={size}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                </div>
                <div className="ml-4">
                    <span className="font-roberto font-black text-white text-sm">
                        {text}
                    </span>
                </div>
            </div>
        </>
    );
};

const profileItems = [
    {
        text: 'Creation de site web dynamiques et performants',
        image: Laptop,
        size: 20,
    },
    {
        text: 'Des fondations solides avec un backend fiable et évolutif',
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
                            src={Pp}
                            alt="Profile Picture"
                            className="absolute -top-16"
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
                                width={50}
                                height={50}
                                className="ml-2 pb-2"
                            />
                        </div>
                        <h2 className="text-4xl text-[#efefef] font-degular font-black">
                            <TextAnimate animation="blurInDown">
                                I&apos;m Gaël Amoros
                            </TextAnimate>
                        </h2>
                        <div className="w-full h-[0.0625rem] bg-[#FFF] my-8" />

                        <p className="text-[#efefef] text-sm font-roberto font-normal mt-3">
                            Actuellement étudiant en informatique & développeur
                            Web basé à Avignon, <br></br>
                            <span className="font-bold font-roberto">
                                voici ce que je peux vous proposer :
                            </span>
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
                        <h1
                            className="text-2xl text-[#efefefcc] font-degular font-bold"
                            style={{
                                textShadow:
                                    '6.41px 6.41px 9.1px rgba(0, 0, 0, 0.11)',
                            }}
                        >
                            Mes préférences
                        </h1>
                        <div>
                            <div>
                                <h5 className="text-[#EFEFEF80] font-degular text-lg font-light">
                                    Langages
                                </h5>
                                <div className="flex flex-wrap items-center gap-2 mt-2">
                                    {skills.langages.map((skill, index) => (
                                        <div key={index} className="w-7 h-7">
                                            <Image
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="w-fit"
                                                width={skill.width}
                                                height={skill.height}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-4 mb-4">
                                <h5 className="text-[#EFEFEF80] font-degular text-lg font-light">
                                    Frameworks
                                </h5>
                                <div className="flex flex-wrap items-center gap-2 mt-2">
                                    {skills.frameworks.map((skill, index) => (
                                        <div key={index} className="w-7 h-7">
                                            <Image
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="w-fit"
                                                width={skill.width}
                                                height={skill.height}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
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
                                    <Image
                                        src={Tick}
                                        alt="Tick"
                                        width={20}
                                        height={20}
                                        className="mr-3 animate__fadeIn animate__animated animate__faster"
                                    />
                                    <TextAnimate
                                        animation="slideLeft"
                                        duration={0.1}
                                        className="mr-3"
                                    >
                                        Mail copié
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
                                    rel="noopener noreferrer"
                                    className=" h-fit hover:scale-90 transform transition-all duration-300"
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
