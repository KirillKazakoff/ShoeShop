import React from 'react';

type HeaderBannerProps = React.HTMLProps<HTMLDivElement>;

export default function HeaderBanner({ children }: HeaderBannerProps) {
    return (
        <div className='banner'>
            <img
                src='http://localhost:9000/img/banner.jpg'
                className='img-fluid w-100'
                alt='К весне готовы!'
            />
            <h2 className='banner-header'>{children}</h2>
        </div>
    );
}
