import Profile from '../profile';
import React from 'react';
import Footer from '../footer';

export default function ProjectsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div className="grid lg:flex px-16 gap-16 pb-8 pt-20 items-stretch">
                <div className="grid md:flex lg:grid gap-8 h-auto lg:max-w-[25rem] min-w-[25rem]">
                    <Profile />
                </div>
                <div className="h-auto w-full">{children}</div>
            </div>
            <div className="flex px-16 gap-16 pb-8 items-stretch ">
                <Footer />
            </div>
        </div>
    );
}
