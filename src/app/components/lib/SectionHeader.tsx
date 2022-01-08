import React from 'react';

type SectionHeaderProps = { children: React.ReactNode };

export default function SectionHeader({ children }: SectionHeaderProps) {
    return <header>{children}</header>;
}
