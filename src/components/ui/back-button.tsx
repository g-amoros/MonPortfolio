'use client'
import Image from 'next/image';
import Arrow from '@/public/arrow.svg';
import Card from '@/components/ui/card';
import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();
    return (
        <>
            <button className='!absolute !left-8 ' style={{ all: 'unset' }} onClick={() => router.push('/projects')}>
                <Card width={100} height={0} borderRadius={15}>
                    <div className="flex justify-center items-center p-2 cursor-pointer">
                        <Image
                            src={Arrow}
                            alt="Image"
                            width={100}
                            height={100}
                            className="w-7 h-7 rounded-xl"
                        />
                    </div>
                </Card>
            </button>
        </>
    )
}