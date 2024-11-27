import type { CSSProperties } from 'react';
import Header from '../layout/header';
import Container from '../shared/container';

const style: CSSProperties = {
  backgroundImage: `linear-gradient(rgba(6, 51, 84, 0.90), rgba(6, 51, 84, 0.90)), url('/about.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const AboutHero = () => {
  return (
    <div style={style} className='grid min-h-screen grid-rows-[auto_1fr]'>
      <Header />
      <Container className='jusify-center flex items-center gap-12 pb-8 text-white'>
        <div className='mx-auto space-y-6 text-center lg:max-w-4xl xl:max-w-5xl'>
          <h2 className='text-7xl font-bold leading-snug tracking-wide max-lg:text-6xl max-md:text-4xl'>
            Who We Are
          </h2>
          <p className='text-center lg:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio
            enim, ea quam quae delectus sint quis amet eveniet accusamus, cum
            praesentium corrupti quibusdam sed.
          </p>
        </div>
      </Container>
    </div>
  );
};
export default AboutHero;
