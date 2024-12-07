import type { CSSProperties } from 'react';
import Header from '../layout/header';
import Container from '../shared/container';

const style: CSSProperties = {
  backgroundImage: `linear-gradient(rgba(6, 51, 84, 0.90), rgba(6, 51, 84, 0.90)), url('/contact.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const ContactHero = () => {
  return (
    <div
      style={style}
      className='grid grid-rows-[auto_1fr] max-md:min-h-screen md:h-screen md:max-h-[600px]'
    >
      <Header />
      <Container className='jusify-center flex items-center gap-12 pb-8 text-white'>
        <div className='mx-auto space-y-6 text-center lg:max-w-4xl xl:max-w-5xl'>
          <h2 className='text-7xl font-bold leading-snug tracking-wide max-lg:text-6xl max-md:text-4xl'>
            We&apos;d Love To Hear From You
          </h2>
          <p className='text-center lg:text-base'>
            Do you have questions about any of our courses, pricing, policies,
            terms of service, benefits of enrolling with us, our team is more
            than willing to be of service.
          </p>
        </div>
      </Container>
    </div>
  );
};
export default ContactHero;
