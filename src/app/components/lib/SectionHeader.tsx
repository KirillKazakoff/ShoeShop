import React from 'react';
import SectionTitle from './SectionTitle';

type SectionHeaderProps = { children: React.ReactNode; title: string };

export default function SectionHeader({ children, title }: SectionHeaderProps) {
    return (
        <header>
            <SectionTitle>{title}</SectionTitle>
            {children}
        </header>
    );
}
