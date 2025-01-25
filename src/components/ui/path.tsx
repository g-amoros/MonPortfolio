'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import House from '@/public/house.png';
import Card from '@/components/ui/card';

interface PathProps {
    projectName?: string;
}

export default function Path({ projectName }: PathProps) {
    const router = useRouter();

    return (
        <>
            <div className="flex gap-4 items-end justify-start mb-7">
                <button
                    style={{ all: 'unset' }}
                    onClick={() => router.push('/')}
                >
                    <Card width={0} height={0} borderRadius={15}>
                        <div className="px-5 py-3">
                            <Image
                                src={House}
                                alt="House"
                                width={25}
                                height={25}
                                onClick={() => router.push('/')}
                            />
                        </div>
                    </Card>
                </button>
                <button
                    style={{ all: 'unset' }}
                    onClick={() => router.push('/projects')}
                >
                    <Card width={0} height={0} borderRadius={15}>
                        <div className="px-5 py-3 ">
                            <h4 className="text-xl font-degular font-bold text-white">
                                Projets
                            </h4>
                        </div>
                    </Card>
                </button>
                {projectName && (
                    <>
                        <button style={{ all: 'unset' }}>
                            <Card width={0} height={25} borderRadius={15}>
                                <div className="px-5 py-3">
                                    <h4 className="text-xl font-degular font-bold text-white">
                                        {projectName}
                                    </h4>
                                </div>
                            </Card>
                        </button>
                    </>
                )}
            </div>
        </>
    );
}
