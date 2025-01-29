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


export async function generateMetadata({
    params,
}: {
    params: { locale: LocaleTypes };
}): Promise<Metadata> {
    const locale = (await params).locale;
    
    const maintitle = {
        en: 'Gaël Amoros | Web Developer Portfolio',
        fr: 'Gaël Amoros | Portfolio Développeur Web',
    };
    
    const maindescription = {
        en: 'Portfolio of Gaël Amoros, a web developer and computer science student based in Avignon.',
        fr: 'Portfolio de Gaël Amoros, étudiant en informatique et développeur Web basé à Avignon.',
    };
    
    const siteUrl = 'https://example.com';  // Remplace par l'URL réelle de ton site
    const socialBanner = '/images/social-banner.jpg'; // Remplace par l'URL de l'image à afficher sur les réseaux sociaux

    return {
        metadataBase: new URL(siteUrl),
        title: {
            default: maintitle[locale],
            template: `${maintitle[locale]} - Portfolio`,
        },
        description: maindescription[locale],
        openGraph: {
            title: maintitle[locale],
            description: maindescription[locale],
            url: siteUrl,
            siteName: maintitle[locale],
            images: [socialBanner],
            locale: locale,
            type: 'website',
        },
        robots: {
            index: true,
            follow: true,
        },
        alternates: {
            canonical: siteUrl,
        },
        types: {
            'application/rss+xml': `${siteUrl}/feed.xml`,
        },
    };
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
