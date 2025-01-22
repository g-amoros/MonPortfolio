
import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    width?: number;
    height?: number;
}

export default function Card({ children, width = 50, height = 50 }: CardProps) {

    return (
        <>
            <div
                className="h-[100vh] rounded-[35px] bg-clip-padding backdrop-filter backdrop-blur-[8px] relative border-[2px] border-[#ffffff4e]"
                style={{
                    width: `${width}%`,
                    height: `${height}%`,
                }}
            >
                <div
                    className="absolute inset-0 rounded-[35px] opacity-30"
                    style={{
                        backgroundImage: `linear-gradient(337deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.35) 91.9%)`,
                        zIndex: -1,
                    }}
                />
                {children}
            </div>
        </>
    );

}