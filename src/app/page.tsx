import Link from 'next/link';
import { TextAnimate } from '@/components/ui/text-animate';
import { PulsatingButton } from '@/components/ui/pulsating-button';

export default function RootPage() {
    return (
        <>
            <div className="flex flex-col min-h-full h-screen">
                <div className="flex flex-col items-center justify-center h-full gap-10">
                    <TextAnimate
                        animation="blurInUp"
                        by="character"
                        className="text-[#FFF] font-degular text-7xl font-black"
                    >
                        Bienvenue sur mon Portfolio
                    </TextAnimate>
                    <Link href="/projects">
                        <PulsatingButton>Découvrir qui je suis</PulsatingButton>
                    </Link>
                </div>
            </div>
        </>
    );
}
