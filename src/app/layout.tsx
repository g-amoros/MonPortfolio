import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Background from '../components/ui/animated-grid-pattern';
import Profile from './profile';
import React from 'react';
import Footer from './footer';

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


export const metadata: Metadata = {
    title: 'Portfolio - Gaël Amoros | Développeur Web',
    description: 'Portfolio de Gaël Amoros, étudiant en informatique et développeur Web basé à Avignon.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${Roberto.variable} ${Degular.variable} relative`}
            >
                <Background />
                <div>
                    <div className="flex px-16 gap-16 pb-6 pt-20 items-stretch">
                        <div className="grid gap-8 h-auto max-w-[25rem]">
                            <Profile />
                        </div>
                        <div className="h-auto w-full">
                            {children}
                            {/* <div className="flex justify-center items-center">
											<div className="absolute bottom-14">
												<h6 className="text-base font-roberto font-light text-[#EFEFEF80] mt-8">
												Tous droits réservés - {currentYear}
												</h6>
											</div>
											</div> */}
                        </div>
                    </div>
                    <div className="flex px-16 gap-16 py-4 items-stretch">
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
