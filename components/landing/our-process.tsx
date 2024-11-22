import Container from '../shared/container';
import one from '@/assets/01.png';
import two from '@/assets/02.png';
import three from '@/assets/03.png';
import Image from 'next/image';

const OurProcess = () => {
  return (
    <section>
      <Container className='space-y-12 py-16'>
        <h2 className='text-center text-4xl font-bold text-custom-darkBlue'>
          Our Process
        </h2>
        <div className='grid grid-cols-1 items-start gap-8 md:grid-cols-3'>
          <div className='flex flex-col items-center justify-center gap-4'>
            <div className='w-16'>
              <Image
                src={one}
                alt='01'
                width={100}
                height={100}
                className='w-full object-contain'
              />
            </div>
            <p className='w-full text-center'>
              In 24 weeks, you’ll be a professional Fullstack developer, able to
              build real-time interactive and dynamic applications. We teach
              Fullstack JavaScript because growing in popularity every day and
              it’s here to stay.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center gap-4'>
            <div className='w-16'>
              <Image
                src={two}
                alt='02'
                width={100}
                height={100}
                className='w-full object-contain'
              />
            </div>
            <p className='w-full text-center'>
              You’ll get your hands dirty by building real life websites, APIs,
              and data-driven apps to gain confidence and sharpen your skills.
              You’ll also collaborate with classmates on a range of projects to
              add to your portfolio.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center gap-4'>
            <div className='w-16'>
              <Image
                src={three}
                alt='03'
                width={100}
                height={100}
                className='w-full object-contain'
              />
            </div>
            <p className='w-full text-center'>
              You graduate with a valued portfolio required to launch your
              career. All our students receive career guidance and mentorship
              with the support of our career counselors through every step of
              their job search
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default OurProcess;
