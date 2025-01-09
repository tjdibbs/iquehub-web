import PageHero from '@/components/shared/hero';
import { Button } from '@/components/ui/button';
import { NEXTGENCODER } from '@/lib/constants';
import { MotionDiv, MotionH2 } from '@/lib/motion';
import { PreloadNextGenCoderResources } from '@/lib/preload-resources';
import { Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  hover: {
    y: -8,
    transition: {
      duration: 0.2,
    },
  },
};

const imageVariants: Variants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
    },
  },
};

export default function Page() {
  return (
    <main>
      <PreloadNextGenCoderResources />
      <PageHero text='Next Gen Coder' imageUrl='/images/19.webp' />
      <section className='space-y-12 py-8'>
        <MotionH2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className='text-center text-xl font-bold text-custom-darkBlue lg:text-3xl'
        >
          Programmes For Kids
        </MotionH2>
        <MotionDiv
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.25 }}
          className='center grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'
        >
          {NEXTGENCODER.map((course, index) => (
            <MotionDiv
              key={index}
              variants={cardVariants}
              className='overflow-hidden border'
            >
              <MotionDiv variants={imageVariants} className='overflow-hidden'>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={300}
                  className='aspect-[1.5] w-full max-w-full object-cover'
                />
              </MotionDiv>
              <div className='flex flex-col items-center justify-center gap-y-2 px-2 py-4 text-center'>
                <h3 className='text-lg font-semibold text-custom-darkBlue'>
                  {course.title}
                </h3>
                <p className='text-custom-darkGray text-sm'>
                  {course.description}
                </p>
                <Button className='hover:bg-white hover:text-primary' asChild>
                  <Link href='/register'>Enroll now</Link>
                </Button>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      </section>
    </main>
  );
}
