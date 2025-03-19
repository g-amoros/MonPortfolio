import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Background from '../components/ui/animated-grid-pattern';
import React from 'react';
import { AOSInit } from '@/components/ui/aos';
import 'animate.css';
import Profile from './profile';
import Footer from './footer';
import { Analytics } from "@vercel/analytics/react"
import Providers from './providers';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
    metadataBase: new URL('https://portfolio-gael-amoros.com/'),
    title: 'Portfolio - Gaël Amoros | Développeur Web',
    description: 'Découvrez le portfolio de Gaël Amoros, développeur web fullstack spécialisé en création d\'applications modernes et performantes. Explorez mes projets, mes compétences en développement front-end et back-end, ainsi que mon parcours professionnel.',
    openGraph: {
        title: "Portfolio - Gaël Amoros",
        description: "Découvrez mes projets et mon expertise en développement web.",
        url: "https://gael-amoros.fr",
        siteName: "Gaël Amoros",
        images: [
          {
            url: "https://gael-amoros.fr/Projects/Project4/Projet4.png",
            width: 1200,
            height: 630,
            alt: "Aperçu du portfolio de Gaël Amoros",
          },
        ],
        type: "website",
        locale: "fr_FR",
      },
};

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
            <SpeedInsights />
            <Analytics />
            <meta name="robots" content="index, follow"/>
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
