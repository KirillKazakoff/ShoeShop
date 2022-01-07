import React, { HTMLProps } from 'react';

type SectionHeaderProps = HTMLProps<HTMLDivElement>;

export default function SectionTitle({ children }: SectionHeaderProps) {
    return <h2 className='h2 text-center'>{children}</h2>;
}
