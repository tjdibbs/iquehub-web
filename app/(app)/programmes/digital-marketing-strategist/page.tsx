import Container from '@/components/shared/container';
import PageHero from '@/components/shared/hero';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <PageHero
        text='Digital Marketing / Strategist'
        description='IQ Hub Digital Marketing programme is beginner-friendly and project based. It is designed to help participants become job-ready'
        showBtn={true}
        linkHref='/register'
        linkText='Get Started'
        imageUrl='/images/12.webp'
      />
      <section className='space-y-12 py-8'>
        <div className='space-y-8'>
          <Container className='space-y-6 text-center'>
            <p className='text-sm font-medium'>CURRICULUM</p>
            <h2 className='text-center text-xl font-bold text-custom-darkBlue lg:text-3xl'>
              Digital Marketing Course Outline
            </h2>
          </Container>
          <div className='space-y-8'>
            {/* <Outline /> */}
            <div className='flex items-center justify-center'>
              <Button
                size='lg'
                className='hover:bg-white hover:text-primary hover:shadow'
                asChild
              >
                <Link href='/register'>Register Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
