'use client';

import React from 'react';
import { trackConversion } from '@/components/ConversionOptimizer';

interface GoogleMapsCTAProps {
    href: string;
    className?: string;
    section: string;
    label?: string;
    children: React.ReactNode;
}

export default function GoogleMapsCTA({
    href,
    className,
    section,
    label = 'google_maps_cta',
    children
}: GoogleMapsCTAProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            onClick={() => trackConversion({
                action: 'map_click',
                category: 'interaction',
                section: section,
                label: label
            })}
        >
            {children}
        </a>
    );
}
