import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Background from '../components/ui/animated-grid-pattern';
import React from 'react';
import { AOSInit } from '@/components/aos';
import 'animate.css';

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

export const metadata: Metadata = {
	title: 'Portfolio - Gaël Amoros | Développeur Web',
	description:
		'Portfolio de Gaël Amoros, étudiant en informatique et développeur Web basé à Avignon.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<AOSInit />
			<body
				className={`${Roberto.variable} ${Degular.variable} relative`}
			>
				<Background />
				{children}
			</body>
		</html>
	);
}
