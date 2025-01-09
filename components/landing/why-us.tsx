import Image from 'next/image';
import Container from '../shared/container';
import { MotionDiv } from '@/lib/motion';
import { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const WhyUs = () => {
  return (
    <section className='bg-custom-beige/20'>
      <Container className='space-y-12 py-16'>
        <div className='space-y-6 text-center'>
          <p className='text-sm font-medium'>Why IQ HUB?</p>
          <h2 className='text-center text-xl font-bold text-custom-darkBlue lg:text-3xl'>
            We Are Customer-Centric
          </h2>
        </div>
        <MotionDiv
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.25 }}
          className='grid grid-cols-1 items-start gap-8 lg:grid-cols-3'
        >
          {['/classroom.png', '/images/11.webp', '/images/7.webp'].map(
            (image, index) => (
              <MotionDiv
                variants={itemVariants}
                key={index}
                className='flex flex-col gap-6'
              >
                <div className='group flex items-center justify-center overflow-hidden rounded-xl'>
                  <Image
                    src={image}
                    alt={`0${index + 1}`}
                    width={100}
                    height={100}
                    priority
                    quality={100}
                    className='aspect-[6/4] w-full max-w-[300px] rounded-xl object-cover transition-transform duration-1000 ease-linear group-hover:scale-105'
                  />
                </div>
                <div className='space-y-4 text-center'>
                  <h3 className='text-lg font-semibold'>
                    {
                      [
                        'Great learning Environment',
                        'Experienced Tutors',
                        'Career Support',
                      ][index]
                    }
                  </h3>
                  <p className='leading-normal text-gray-500 max-lg:text-sm'>
                    {
                      [
                        'We provide exceptional learning facilities with comfortable, en-suite classrooms and high-speed internet',
                        'Our tutors are experienced professionals chosen for their exceptional teaching abilities. They are dedicated to providing top-notch education to our students.',
                        'We provide unparalleled support both during your learning journey and after graduation. Our commitment to your success extends beyond the classroom.',
                      ][index]
                    }
                  </p>
                </div>
              </MotionDiv>
            ),
          )}
        </MotionDiv>
      </Container>
    </section>
  );
};
export default WhyUs;
