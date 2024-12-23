import Container from '@/components/shared/container';
import Logo from '@/components/shared/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className='grid min-h-screen grid-rows-[auto_1fr] bg-custom-beige'>
      <header className='bg-primary py-4'>
        <Container>
          <Logo />
        </Container>
      </header>
      <div className='center grid place-items-center p-8 text-center'>
        <div className='space-y-6'>
          <h1 className='text-4xl font-bold text-primary md:text-6xl'>
            Oops! Page Not Found
          </h1>
          <p className='mx-auto max-w-md text-lg text-gray-600 md:text-xl'>
            We couldn&apos;t find the page you&apos;re looking for. It might
            have been moved or deleted.
          </p>
          <div className='text-[120px] font-bold text-primary/20 md:text-[180px]'>
            404
          </div>
          <Button size='lg' className='hover:bg-white hover:text-primary'>
            <Link href='/'>Return Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
