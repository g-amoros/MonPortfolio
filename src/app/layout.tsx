import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Background from '../components/ui/animated-grid-pattern';
import React from 'react';
import { AOSInit } from '@/components/ui/aos';
import 'animate.css';
import Profile from './profile';
import Footer from './footer';
import Providers from './providers';

export const metadata: Metadata = {
    title: 'Portfolio - Gaël Amoros | Développeur Web',
    description: 'Portfolio de Gaël Amoros, développeur web fullstack. Découvrez mes projets, mes compétences et mon parcours.',
}

const Roberto = localFont({
    src: [
        {
            path: 'fonts/Roberto/RobertoSans-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: 'fonts/Roberto/RobertoSans-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: 'fonts/Roberto/RobertoSans-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-roberto',
});

const Degular = localFont({
    src: [
        {
            path: 'fonts/Degular/Degular-Bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: 'fonts/Degular/Degular-Semibold.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: 'fonts/Degular/Degular-Black.otf',
            weight: '900',
            style: 'normal',
        },
        {
            path: 'fonts/Degular/Degular-Medium.otf',
            weight: '500',
            style: 'normal',
        },
    ],
    variable: '--font-degular',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <AOSInit />
            <body
                className={`${Roberto.variable} ${Degular.variable} relative `}
            >
                <Background />
                <div className="px-0 sm:px-12 md:px-0 animate__fadeIn animate__animated">
                    <div className="grid lg:flex px-3 sm:px-16 gap-16 pb-8 pt-20 items-stretch">
                        <div className="grid md:flex lg:grid gap-8 h-fit lg:max-w-[25rem] sm:min-w-[25rem]">
                            <Profile />
                        </div>
                        <div className="h-auto w-full mx-auto flex flex-col min-h-full justify-between">
                            <Providers>
                                <div className="2xl:w-[80%] xl:w-full mx-auto flex flex-col min-h-full">
                                    {children}
                                </div>
                            </Providers>
                        </div>
                    </div>
                    <div className="flex gap-16 pb-8 items-stretch ">
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
