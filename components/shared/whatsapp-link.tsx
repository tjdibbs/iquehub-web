'use client';

import icon from '@/assets/whatsapp-8.svg';
import Image from 'next/image';

const WhatsAppLink = () => {
  return (
    <a
      href='https://api.whatsapp.com/send?phone=2349063321869'
      target='_blank'
      rel='noreferrer noopener'
      role='button'
      className='fixed right-8 top-[87.5%] z-[9999999] grid h-12 w-12 animate-bounce cursor-pointer place-items-center rounded-full bg-green-400 shadow duration-1000 hover:bg-green-500'
    >
      <Image
        src={icon}
        alt='whatsapp'
        width={20}
        height={20}
        className='h-10 w-10 object-contain'
      />
    </a>
  );
};
export default WhatsAppLink;
