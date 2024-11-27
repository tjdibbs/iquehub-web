import AboutHero from '@/components/about/hero';
import Container from '@/components/shared/container';
import { PreloadAboutResources } from '@/lib/preload-resources';
import Image from 'next/image';

export default function Page() {
  return (
    <main>
      <PreloadAboutResources />
      <AboutHero />
      <section className='py-8'>
        <Container className='grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-2 lg:items-center'>
          <div className='space-y-8 max-lg:order-2 max-lg:text-center'>
            <h5 className='text-sm font-bold max-lg:text-center'>
              KNOW US MORE
            </h5>
            <h2 className='text-3xl font-semibold text-custom-darkBlue max-lg:text-center lg:text-5xl'>
              About IQhub
            </h2>
            <div className='space-y-6'>
              <p className='leading-normal'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, quaerat commodi magnam est aperiam nobis itaque
                quibusdam vel ullam in, cum earum delectus aliquam? Suscipit
                dolores veniam expedita vero voluptatem.
              </p>
              <p className='leading-normal'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, quaerat commodi magnam est aperiam nobis itaque
                quibusdam vel ullam in, cum earum delectus aliquam? Suscipit
                dolores veniam expedita vero voluptatem.
              </p>
              <p className='leading-normal'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, quaerat commodi magnam est aperiam nobis itaque
                quibusdam vel ullam in, cum earum delectus aliquam? Suscipit
                dolores veniam expedita vero voluptatem.
              </p>
            </div>
          </div>
          <div className='max-lg:order-1'>
            <Image
              src='/team.png'
              alt='woman smiling'
              height={100}
              width={100}
              className='aspect-[6/5] w-full max-w-full object-contain'
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
