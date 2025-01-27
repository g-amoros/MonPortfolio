
import Profile from '../profile';
import React from 'react';
import Footer from '../footer';
import Navbar from '@/components/ui/navbar';

export default function ProjectsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='px-0 sm:px-12 md:px-0'>
            <div className="grid lg:flex px-3 sm:px-16 gap-16 pb-8 pt-20 items-stretch">
                <div className="grid md:flex lg:grid gap-8 h-fit lg:max-w-[25rem] sm:min-w-[25rem]">
                    <Profile />
                </div>
                <div className="h-auto w-full mx-auto flex flex-col min-h-full justify-between">
                    <div className="2xl:w-[80%] mx-auto flex flex-col min-h-full">
                        {children}
                    </div>
                </div>
            </div>
            <div className="flex gap-16 pb-8 items-stretch ">
                <Footer />
            </div>
        </div>
    );
}
