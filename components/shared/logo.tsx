'use client';

import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/' className='block w-36 max-md:w-28'>
      <Image
        src='/identity/logo.png'
        alt='IQ Hub'
        width={100}
        height={100}
        className='w-full max-w-full'
      />
    </Link>
  );
};
export default Logo;
