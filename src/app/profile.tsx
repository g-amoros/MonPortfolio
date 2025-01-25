import React from 'react';
import Card from '../components/ui/card';
import Image from 'next/image';
import Pp from '../../public/pp.svg';
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

const skills = [
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
        name: 'Php',
        icon: Php,
        width: 45,
        height: 45,
    },
    {
        name: 'C++',
        icon: C,
        width: 45,
        height: 45,
    },
];

export default function Profile() {
    return (
        <>
            <div className="h-full">
                <Card width={100} height={100}>
                    <div className="flex items-start justify-center relative w-full">
                        <Image
                            src={Pp}
                            alt="Profile Picture"
                            width={200}
                            height={200}
                            className="absolute -top-16"
                        />
                    </div>
                    <div className="flex flex-col justify-center flex-shrink-0 px-12 mt-[9.5rem]">
                        <div className="flex items-end">
                            <h1
                                className="text-2xl text-[#efefefcc] font-degular font-bold"
                                style={{
                                    textShadow:
                                        '6.41px 6.41px 9.1px rgba(0, 0, 0, 0.11)',
                                }}
                            >
                                Hello,
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
                            I&apos;m Gaël Amoros
                        </h2>
                        <div className="w-full h-[0.0625rem] bg-[#FFF] my-8" />
                        <p className="text-[#efefef] text-sm font-roberto font-normal">
                            Actuellement étudiant en informatique & développeur
                            Web basé à Avignon,{' '}
                            <span className="font-bold font-roberto">
                                voici ce que je peux vous proposer :
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col justify-center flex-shrink-0 px-12 gap-4 my-8">
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
                                    src={Laptop}
                                    alt="Laptop"
                                    width={20}
                                    height={20}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                />
                            </div>
                            <div className="ml-4">
                                <span className="font-roberto font-black text-white text-sm">
                                    Creation de site web dynamiques et
                                    performants
                                </span>
                            </div>
                        </div>
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
                                    src={Cabinet}
                                    alt="Cabinet"
                                    width={20}
                                    height={20}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                />
                            </div>
                            <div className="ml-4">
                                <span className="font-roberto font-black text-white text-sm">
                                    Fondation solide avec backend fiable et
                                    évolutif
                                </span>
                            </div>
                        </div>
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
                                    src={Palette}
                                    alt="Palette"
                                    width={25}
                                    height={25}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                />
                            </div>
                            <div className="ml-4">
                                <span className="font-roberto font-black text-white text-sm">
                                    Interfaces centrées sur l’utilisateur pour
                                    expérience exceptionnelle
                                </span>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="h-auto">
                <Card width={100} height={100}>
                    <div className="h-full flex flex-col justify-between gap-8 px-12 py-12">
                        <div className="flex flex-wrap justify-between items-center gap-4">
                            {skills.map((skill, index) => (
                                <div key={index}>
                                    <Image
                                        src={skill.icon}
                                        alt={skill.name}
                                        width={skill.width}
                                        height={skill.height}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center flex-col gap-4">
                            <button className="flex w-full justify-center items-center px-8 py-4 font-roberto font-bold text-white text-xl gap-4">
                                <Image
                                    src={Enveloppe}
                                    alt="Enveloppe"
                                    width={20}
                                    height={20}
                                />
                                <span className="mb-1">Contactez-moi</span>
                            </button>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    );
}
