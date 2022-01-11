import React from 'react';
import { Status } from '../../redux/statusSlice';

type PreloaderProps = { status: Status };

export default function Preloader({ status }: PreloaderProps) {
  if (status === 'failed') return <div>Error!!!</div>;
  return (
    <div className="preloader">
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}
