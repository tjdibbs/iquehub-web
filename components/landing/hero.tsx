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
    <section style={style} className='grid min-h-screen grid-rows-[auto_1fr]'>
      <Header />
      <Container className='flex items-center gap-12 text-white'>
        <div className='flex-1 space-y-6'>
          <h2 className='text-5xl font-bold tracking-wide text-white'>
            Full Stack Web Development
          </h2>
          <p>
            Let’s help you become a professional Fullstack web developer. You’ll
            learn all you need to know to become a Fullstack Developer and build
            interesting portfolios while learning the fundamentals of HTML, CSS,
            JavaScript, React, Mongo DB, Express and hosting on Vercel.
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
