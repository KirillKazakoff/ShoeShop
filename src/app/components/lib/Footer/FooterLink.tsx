import React from 'react';

type FooterLinkProps = { cls: string } & React.HTMLProps<HTMLAnchorElement>;

export default function FooterLink({ cls, href, children }: FooterLinkProps) {
    return (
        <a href={href} className={`footer-contacts-${cls}`}>
            {children}
        </a>
    );
}
