'use client';
import Image from 'next/image';
import Arrow from '@/public/arrow.svg';
import Link from 'next/link';

function BackButton() {
    return (
        <>
            <Link
                className="!absolute !left-8 !hidden md:!block"
                style={{ all: 'unset' }}
                href={'/'}
            >
                <div className="backbutton flex animate__fadeIn animate__animated transition-transform justify-center items-center p-2 cursor-pointer rounded-xl">
                    <Image
                        src={Arrow}
                        alt="Image"
                        width={100}
                        height={100}
                        className="w-12 h-12 rounded-xl"
                    />
                </div>
            </Link>
        </>
    );
}

function BackButtonMobile() {
    return (
        <>
            <Link className="w-fit mx-auto !block md:!hidden" href={'/'}>
                <div className="backbutton flex animate__fadeIn animate__animated transition-transform justify-center items-center p-2 cursor-pointer rounded-xl">
                    <Image
                        src={Arrow}
                        alt="Image"
                        width={100}
                        height={100}
                        className="w-12 h-12 rounded-xl"
                    />
                    <div className="p-4">
                        <h2 className="text-xl text-center font-degular font-bold text-white">
                            Retour à l&apos;accueil
                        </h2>
                    </div>
                </div>
            </Link>
        </>
    );
}

export { BackButton, BackButtonMobile };
