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
            <div className="flex px-16 gap-16 pb-8 pt-20 items-stretch">
                <div className="grid gap-8 h-auto max-w-[25rem]">
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
