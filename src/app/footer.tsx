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
        link: 'https://www.linkedin.com/in/gaelamoros/',
    },
    {
        name: 'Github',
        icon: Github,
        link: 'https://www.linkedin.com/in/gaelamoros/',
    },
    {
        name: 'Twitter',
        icon: Twitter,
        link: 'https://www.linkedin.com/in/gaelamoros/',
    },
    {
        name: 'Instagram',
        icon: Instagram,
        link: 'https://www.linkedin.com/in/gaelamoros/',
    },
    {
        name: 'Youtube',
        icon: Youtube,
        link: 'https://www.linkedin.com/in/gaelamoros/',
    },
    {
        name: 'Tiktok',
        icon: Tiktok,
        link: 'https://www.linkedin.com/in/gaelamoros/',
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="grid gap-8 h-full max-w-96 w-full">
                <div className="h-fit relative">
                    <div className="flex relative justify-between w-full h-20">
                        {socials.map((social, index) => (
                            <a
                                href={social.link}
                                key={index}
                                className="w-full h-full"
                            >
                                <Image
                                    src={social.icon}
                                    alt={social.name}
                                    className="absolute bottom-0"
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
