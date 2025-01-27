"use client";

import { TransitionRouter } from "next-transition-router";


export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <TransitionRouter
            leave={(next) => {
            }}
            enter={(next) => {
            }}
        >
            {children}
        </TransitionRouter>
    );
}