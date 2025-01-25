import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    width?: number;
    height?: number;
    borderRadius?: number;
}

export default function Card({
    children,
    width = 0,
    height = 0,
    borderRadius = 35,
}: CardProps) {
    return (
        <>
            <div
                className="bg-clip-padding backdrop-filter backdrop-blur-[3px] relative border-[2px] border-[#ffffff4e]"
                style={{
                    width: width === 0 ? 'auto' : `${width}%`,
                    borderRadius: `${borderRadius}px`,
                    height: height === 0 ? 'auto' : `${height}%`,
                }}
            >
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `linear-gradient(337deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.35) 91.9%)`,
                        zIndex: -1,
                        borderRadius: `${borderRadius}px`,
                    }}
                />
                {children}
            </div>
        </>
    );
}
