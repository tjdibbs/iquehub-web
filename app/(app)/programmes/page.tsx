import ProgrammesHero from '@/components/programmes/hero';
import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { PROGRAMMES } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <ProgrammesHero />
      <section className='space-y-12 py-8'>
        <h2 className='text-center text-xl font-bold text-custom-darkBlue lg:text-3xl'>
          Tech Training for Long-Term Career Success
        </h2>
        <Container className='mx-auto max-w-4xl space-y-8'>
          {PROGRAMMES.map(programme => (
            <div
              key={programme.slug}
              className='flex flex-col gap-8 rounded-2xl border max-md:pb-4 md:p-8 lg:flex-row lg:items-start'
            >
              <Link
                href={`/programmes/${programme.slug}`}
                className='flex items-center justify-center max-md:h-40 md:w-28'
              >
                <Image
                  src={programme.image}
                  alt={programme.title}
                  height={100}
                  width={100}
                  priority
                  className='w-full object-cover max-md:h-full md:aspect-square md:rounded-md'
                />
              </Link>
              <div className='space-y-4 max-md:px-6 lg:flex-1'>
                <div className='space-y-1'>
                  <Link
                    href={`/programmes/${programme.slug}`}
                    className='block text-xl font-bold tracking-wide text-custom-darkBlue lg:text-2xl'
                  >
                    {programme.title}
                  </Link>
                  <p>4 months</p>
                </div>
                <p>
                  {programme.description}{' '}
                  <Link
                    href={`/programmes/${programme.slug}`}
                    className='text-custom-beige'
                  >
                    Learn More
                  </Link>{' '}
                </p>
              </div>
              <div className='items-center justify-center max-lg:flex lg:w-40'>
                <Button
                  className='rounded-3xl bg-green-500 hover:bg-green-800 max-lg:w-[60%] lg:w-full'
                  asChild
                >
                  <Link href='/register'>Apply Now</Link>
                </Button>
              </div>
            </div>
          ))}
        </Container>
      </section>
    </main>
  );
}
