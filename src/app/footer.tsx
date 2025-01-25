import Image from 'next/image';
import Linkedin from '@/public/linkedin.svg';
import Github from '@/public/github.svg';
import Twitter from '@/public/x.svg';
import Instagram from '@/public/instagram.svg';
import Youtube from '@/public/youtube.svg';
import Tiktok from '@/public/tiktok.svg';

const socials = [
    {
        name: 'Linkedin',
        icon: Linkedin,
        link: 'https://www.linkedin.com/in/gael-amoros/',
    },
    {
        name: 'Github',
        icon: Github,
        link: 'https://github.com/MisterGawel',
    },
    {
        name: 'Twitter',
        icon: Twitter,
        link: 'https://x.com/asgael13',
    },
    {
        name: 'Instagram',
        icon: Instagram,
        link: 'https://www.instagram.com/as.gael13/',
    },
    {
        name: 'Youtube',
        icon: Youtube,
        link: 'https://www.youtube.com/@as.gael13',
    },
    {
        name: 'Tiktok',
        icon: Tiktok,
        link: 'https://www.tiktok.com/@as.gael13',
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="grid gap-8 h-full w-full max-w-[25rem]">
                <div className="h-fit relative">
                    <div className="flex relative justify-between w-full">
                        {socials.map((social, index) => (
                            <a
                                href={social.link}
                                key={index}
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" h-fit hover:scale-90 transform transition-all duration-300"
                            >
                                <Image
                                    src={social.icon}
                                    alt={social.name}
                                    className="bottom-0"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full h-auto">
                <div className="flex justify-between items-center mx-auto w-[80%] h-full">
                    <h6 className="text-base font-roberto font-light text-[#EFEFEF80]">
                        Tous droits réservés - {currentYear}
                    </h6>
                    <h6 className="text-base font-roberto font-light text-[#EFEFEF80]">
                        Conçu et développé par Gaël Amoros.
                    </h6>
                </div>
            </div>
        </>
    );
}
