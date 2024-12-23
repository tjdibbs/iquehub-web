import Container from '@/components/shared/container';
import PageHero from '@/components/shared/hero';
import { Button } from '@/components/ui/button';
import { NEXTGENCODER } from '@/lib/constants';
import { PreloadNextGenCoderResources } from '@/lib/preload-resources';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <PreloadNextGenCoderResources />
      <PageHero text='Next Gen Coder' imageUrl='/nextgencoder.jpg' />
      <section className='space-y-12 py-8'>
        <h2 className='text-center text-xl font-bold text-custom-darkBlue lg:text-3xl'>
          Programmes For Kids
        </h2>
        <Container className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {NEXTGENCODER.map((course, index) => (
            <div key={index} className='border'>
              <div className='overflow-hidden'>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={300}
                  className='aspect-[1.5] w-full max-w-full object-cover'
                />
              </div>
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
            </div>
          ))}
        </Container>
      </section>
    </main>
  );
}
