'use client';

import Headroom from 'react-headroom';
import Container from '../shared/container';
import Link from 'next/link';
import { ChevronDownIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import useScrollPosition from '@/hooks/scroll-position';
import MobileNav from './mobile-nav';

const Header = () => {
  const isScrolled = useScrollPosition();

  return (
    <Headroom className='z-[99]'>
      <header
        className={cn(
          'py-4 text-white',
          isScrolled ? 'bg-custom-darkBlue' : 'bg-transparent',
        )}
      >
        <Container className='flex items-center justify-between gap-16'>
          <Link
            href='/'
            className='text-lg font-bold hover:text-custom-beige md:text-xl lg:text-2xl'
          >
            IQUEHUB
          </Link>

          <nav className='hidden lg:block'>
            <ul className='flex items-center gap-10'>
              <li>
                <Link
                  href='/about'
                  className='font-medium hover:text-custom-beige'
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href='/courses'
                  className='inline-flex items-center gap-1 font-medium hover:text-custom-beige'
                >
                  Courses <ChevronDownIcon className='h-4 w-4' />
                </Link>
              </li>
              <li>
                <Link
                  href='/faq'
                  className='font-medium hover:text-custom-beige'
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='font-medium hover:text-custom-beige'
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>

          <div className='hidden items-center justify-end lg:flex'>
            <Button
              size='lg'
              className={cn(
                'bg-custom-beige text-custom-darkBlue hover:bg-custom-beige/70',
              )}
              asChild
            >
              <Link href='/register'>Register</Link>
            </Button>
          </div>
          <MobileNav />
        </Container>
      </header>
    </Headroom>
  );
};
export default Header;
