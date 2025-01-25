import React from 'react';
import { cn } from '@/lib/utils';

interface PulsatingButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    pulseColor?: string;
    duration?: string;
}

export const PulsatingButton = React.forwardRef<
    HTMLButtonElement,
    PulsatingButtonProps
>(
    (
        {
            className,
            children,
            pulseColor = '#EFEFEF',
            duration = '2s',
            ...props
        },
        ref,
    ) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'animate__animated animate__fadeIn animate__delay-3s relative flex cursor-pointer items-center justify-center font-degular font-semibold text-xl rounded-[15px] px-10 py-4 text-center text-primary-foreground',
                    className,
                )}
                style={
                    {
                        '--pulse-color': pulseColor,
                        '--duration': duration,
                    } as React.CSSProperties
                }
                {...props}
            >
                <div className="relative z-10">{children}</div>
                <div className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-lg bg-inherit" />
            </button>
        );
    },
);

PulsatingButton.displayName = 'PulsatingButton';
