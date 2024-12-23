import { PROGRAMMES } from '@/lib/constants';
import Marquee from 'react-fast-marquee';

const MarqueeText = () => {
  return (
    <div className='flex flex-nowrap items-center bg-primary py-6 lg:py-8 text-custom-beige'>
      <Marquee speed={50} gradient={false} pauseOnHover>
        {PROGRAMMES.map(programme => (
          <p
            key={programme.slug}
            className='mx-6 text-xl font-semibold lg:text-3xl'
          >
            • {programme.title}
          </p>
        ))}
      </Marquee>
    </div>
  );
};
export default MarqueeText;
