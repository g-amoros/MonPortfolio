import Link from 'next/link';
import { TextAnimate } from '@/components/ui/text-animate';

export default function RootPage() {
    return (
        <>
            <div className="h-[calc(100dvh)] w-full flex items-center justify-center bg-primary-background ">
                <div className="flex flex-col items-center justify-center h-full gap-10">
                    <TextAnimate
                        animation="blurInUp"
                        by="character"
                        once={false}
                        className="text-[#FFF] font-degular text-2xl lg:text-7xl font-black"
                    >
                        Bienvenue sur mon Portfolio
                    </TextAnimate>
                    <Link href="/projects">
                        <button className="animate__animated !text-[#FFF] animate__fadeIn animate__delay-3s relative flex cursor-pointer items-center justify-center font-degular font-semibold text-xl rounded-[15px] px-10 py-4 text-center text-primary-foreground">
                            Découvrir qui je suis
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
