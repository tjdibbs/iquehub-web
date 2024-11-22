import type { CSSProperties } from 'react';
import Header from '../layout/header';
import Container from '../shared/container';
import HeroForm from '../forms/landing';

const style: CSSProperties = {
  backgroundImage: `linear-gradient(rgba(6, 51, 84, 0.85), rgba(6, 51, 84, 0.85)), url('/hero.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const Hero = () => {
  return (
    <section
      style={style}
      className='grid min-h-screen grid-rows-[auto_1fr] gap-y-8'
    >
      <Header />
      <Container className='flex flex-col items-center gap-12 pb-8 text-white lg:flex-row'>
        <div className='flex-1 space-y-6 max-lg:text-center'>
          <h2 className='text-2xl font-bold leading-normal tracking-wide text-white md:text-3xl lg:text-5xl'>
            Full Stack Web Development
          </h2>
          <p>
            Become a professional Fullstack developer! Learn HTML, CSS,
            JavaScript, React, MongoDB, Express, and hosting on Vercel while
            building impressive portfolios.
          </p>
        </div>
        <div className='flex flex-1 items-center justify-end'>
          <HeroForm />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
