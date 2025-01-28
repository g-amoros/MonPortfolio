'use client'
import Image from 'next/image';
import Arrow from '@/public/arrow.svg';
import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();
    return (
        <>
            <button className='!absolute !left-8 ' style={{ all: 'unset' }} onClick={() => router.push('/')}>
                    <div className="backbutton flex animate__fadeIn animate__animated transition-transform justify-center items-center p-2 cursor-pointer border-[2px] border-[#ffffff4e] rounded-xl">
                        <Image
                            src={Arrow}
                            alt="Image"
                            width={100}
                            height={100}
                            className="w-7 h-7 rounded-xl"
                        />
                    </div>
            </button>
        </>
    )
}