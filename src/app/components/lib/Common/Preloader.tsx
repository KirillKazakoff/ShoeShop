import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Status } from '../../../redux/slices/statusSlice';

type PreloaderProps = { status: Status };

export default function Preloader({ status }: PreloaderProps) {
    const navigate = useNavigate();
    useEffect(() => {
        if (status === 'failed') navigate('/error');
    }, [status]);

    return (
        <div className='preloader-container'>
            <div className='preloader'>
                <span />
                <span />
                <span />
                <span />
            </div>
        </div>
    );
}
