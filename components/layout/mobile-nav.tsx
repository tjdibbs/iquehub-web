'use client';

import { cn } from '@/lib/utils';
import { MenuIcon, XIcon } from 'lucide-react';
import { Fragment, useState } from 'react';
import Container from '../shared/container';
import Link from 'next/link';
import { Button } from '../ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import ProgrammesPopover from './programmes-popover';

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <div
        className='cursor-pointer lg:hidden'
        role='button'
        onClick={() => setOpen(true)}
      >
        <MenuIcon className={cn('h-6 w-6 text-white')} />
      </div>
      <AnimatePresence>
        {open && (
          <div className='fixed inset-0 z-[9999] h-screen w-full bg-black/20 lg:hidden'>
            <motion.nav
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ type: 'tween' }}
              className='bg-white pb-6 text-black shadow'
            >
              <Container className='space-y-8 py-4'>
                <div
                  className='ml-auto w-8 cursor-pointer'
                  role='button'
                  onClick={() => setOpen(false)}
                >
                  <XIcon className='h-5 w-5' />
                </div>
                <ul className='space-y-8 text-center'>
                  <li>
                    <Link
                      href='/about'
                      className='font-medium uppercase hover:text-custom-darkBlue hover:underline'
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <ProgrammesPopover />
                  </li>
                  <li>
                    <Link
                      href='/community'
                      className='font-medium uppercase hover:text-custom-darkBlue hover:underline'
                    >
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/nextgencoder'
                      className='font-medium uppercase hover:text-custom-darkBlue hover:underline'
                    >
                      NextGenCoder
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/contact'
                      className='font-medium uppercase hover:text-custom-darkBlue hover:underline'
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
                <div className='flex items-center justify-center'>
                  <Button
                    className='bg-custom-darkBlue text-white hover:bg-white hover:text-custom-darkBlue hover:shadow'
                    asChild
                  >
                    <Link href='/register'>Enroll Now</Link>
                  </Button>
                </div>
              </Container>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};
export default MobileNav;
