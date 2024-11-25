'use client';

import Headroom from 'react-headroom';
import Container from '../shared/container';
import Link from 'next/link';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import useScrollPosition from '@/hooks/scroll-position';
import MobileNav from './mobile-nav';
import ProgrammesPopover from './programmes-popover';

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
            iQiQUE
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
                <ProgrammesPopover />
              </li>
              <li>
                <Link
                  href='/faq'
                  className='font-medium hover:text-custom-beige'
                >
                  Community
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
                'bg-custom-beige text-custom-darkBlue hover:bg-white hover:text-custom-darkBlue hover:shadow',
              )}
              asChild
            >
              <Link href='/enroll'>Enroll Now</Link>
            </Button>
          </div>
          <MobileNav />
        </Container>
      </header>
    </Headroom>
  );
};
export default Header;
