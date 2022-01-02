import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavLink as BootLink } from 'react-bootstrap';

type RouteLinkProps = { to: string; children: string };

export default function RouteLink({ to, children }: RouteLinkProps) {
    return (
        <NavLink to={to}>
            <BootLink as="span">{children}</BootLink>
        </NavLink>
    );
}
