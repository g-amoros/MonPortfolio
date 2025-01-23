"use client"

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import House from '@/public/house.svg';

export default function Path() {
    const pathname = usePathname();
    const router = useRouter();
    const [path, setPath] = useState('');

    useEffect(() => {
        switch (pathname) {
            case '/':
                setPath('Accueil');
                break;
            case '/projects':
                setPath('Accueil / Projets');
                break;
            case '/projects/portfolio':
                setPath('Accueil / Projets / Portfolio');
                break;
            default:
                break;
        }
    }
    ), [pathname];

    return (
        <>
            <div className="flex gap-4 items-end justify-center">
                <Image
                    src={House}
                    alt="House"
                    width={25}
                    height={25}
                    onClick={() => router.push('/')}
                />
                <h4 className="text-xl font-roberto font-bold text-white">
                    {path}
                </h4>
            </div>
        </>
    )
}