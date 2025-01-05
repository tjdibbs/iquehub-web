import Container from '@/components/shared/container';
import PageHero from '@/components/shared/hero';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Outline from './outline';

export default function Page() {
  return (
    <main>
      <PageHero
        text='UI/UX Design'
        description='IQ Hub UI/UX programme is beginner-friendly and project based. It is designed to help participants become job-ready'
        showBtn={true}
        linkHref='/register'
        linkText='Get Started'
        imageUrl='/ui-ux.png'
      />
      <section className='space-y-12 py-8'>
        <div className='space-y-8'>
          <Container className='space-y-6 text-center'>
            <p className='text-sm font-medium'>CURRICULUM</p>
            <h2 className='text-center text-xl font-bold text-custom-darkBlue lg:text-3xl'>
              UI/UX Course Outline
            </h2>
          </Container>
          <div className='space-y-8'>
            <Outline />
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
