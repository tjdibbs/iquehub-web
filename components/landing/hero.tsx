import type { CSSProperties } from 'react';
import Header from '../layout/header';
import Container from '../shared/container';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const style: CSSProperties = {
  backgroundImage: `linear-gradient(rgba(6, 51, 84, 0.90), rgba(6, 51, 84, 0.90)), url('/hero.png')`,
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
      <Container className='jusify-center flex items-center gap-12 pb-8 text-white'>
        <div className='mx-auto space-y-8 text-center lg:max-w-4xl xl:max-w-5xl'>
          <div className='space-y-6'>
            <h2 className='text-7xl font-bold leading-snug tracking-wide max-lg:text-6xl max-md:text-4xl'>
              Unlock Your Tech Potentials
            </h2>
            <p className='lg:text-base'>
              Become a professional Fullstack developer! Learn HTML, CSS,
              JavaScript, React, MongoDB, Express, and hosting on Vercel while
              building impressive portfolios.
            </p>
          </div>
          <form className='mx-auto flex w-full max-w-md items-center gap-0'>
            <Input
              type='email'
              placeholder='Enter your email'
              className={cn('flex-1 rounded-br-none rounded-tr-none')}
            />
            <Button
              type='submit'
              className={cn(
                'rounded-bl-none rounded-tl-none bg-custom-beige text-custom-darkBlue hover:bg-white hover:text-custom-darkBlue hover:shadow',
              )}
            >
              Explore
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
