'use client';

import icon from '@/assets/whatsapp-8.svg';
import Image from 'next/image';

const WhatsAppLink = () => {
  return (
    <div
      role='button'
      className='fixed right-8 top-[80%] z-[9999999] grid h-14 w-14 animate-bounce cursor-pointer place-items-center rounded-full bg-green-400 shadow duration-1000 hover:bg-green-500'
    >
      <Image
        src={icon}
        alt='whatsapp'
        width={20}
        height={20}
        className='h-10 w-10 object-contain'
      />
    </div>
  );
};
export default WhatsAppLink;
