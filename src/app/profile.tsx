import React from 'react';
import Card from '../components/ui/card';
import Image from 'next/image';
import Pp from '../../public/pp.svg';
import WavingHand from '../../public/WavingHand.svg';
import Polygon from '../../public/polygon.svg';
import Laptop from '../../public/Laptop.svg';
import Cabinet from '../../public/cabinet.svg';
import Palette from '../../public/palette.svg';

export default function Profile() {

    return (
        <>
            <div className="grid grid-rows-[5fr_3fr_1fr] gap-8 h-screen w-1/3 pb-12 pt-20 px-12">
                <div className="h-full relative">
                    <Card width={100} height={100} >
                        <div className="flex items-start justify-center relative w-full">
                            <Image
                                src={Pp}
                                alt="Profile Picture"
                                width={200}
                                height={200}
                                className="absolute -top-16"
                            />
                        </div>
                        <div className='flex flex-col justify-center flex-shrink-0 px-12 mt-24'>
                            <div className='flex items-end'>
                                <h1 className='text-2xl text-[#efefefcc] font-degular font-bold' style={{ textShadow: '6.41px 6.41px 9.1px rgba(0, 0, 0, 0.11)' }}>Hello,</h1>
                                <Image src={WavingHand} alt="Waving Hand" width={50} height={50} className='ml-2 pb-2' />
                            </div>
                            <h2 className='text-4xl text-[#efefef] font-degular font-black'>I&apos;m Gaël Amoros</h2>
                            <div className='w-full h-[0.0625rem] bg-[#FFF] my-8' />
                            <p className='text-[#efefef] text-sm font-roberto font-light'>
                                Actuellement étudiant en informatique & développeur
                                Web basé à Avignon, <span className='font-bold font-roberto'>voici ce que je peux vous proposer :</span>
                            </p>
                        </div>
                        <div className='flex flex-col justify-center flex-shrink-0 px-12 gap-4 my-6'>
                            <div className='flex justify-between'>
                                <div className='relative'>
                                    <Image src={Polygon} alt="Polygon" width={60} height={60} className='min-w-14' />
                                    <Image src={Laptop} alt="Laptop" width={15} height={15} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                                </div>
                                <div className='ml-4'>
                                    <span className='font-roberto font-black text-white text-sm'>Creation de site web dynamiques et performants</span>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='relative'>
                                    <Image src={Polygon} alt="Polygon" width={60} height={60} className='min-w-14' />
                                    <Image src={Cabinet} alt="Cabinet" width={15} height={15} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                                </div>
                                <div className='ml-4'>
                                    <span className='font-roberto font-black text-white text-sm'>Fondation solide avec backend fiable et évolutif</span>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='relative'>
                                    <Image src={Polygon} alt="Polygon" width={60} height={60} className='min-w-14' />
                                    <Image src={Palette} alt="Palette" width={15} height={15} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                                </div>
                                <div className='ml-4'>
                                    <span className='font-roberto font-black text-white text-sm'>Interfaces centrées sur l’utilisateur pour expérience exceptionnelle</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="h-full">
                    <Card width={100} height={100} >a</Card>
                </div>
                <div className="h-full">
                </div>
            </div>
        </>
    )
}