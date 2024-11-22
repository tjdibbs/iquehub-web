'use client';

import { cn } from '@/lib/utils';
import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react';
import { Fragment, useState } from 'react';
import Container from '../shared/container';
import Link from 'next/link';
import { Button } from '../ui/button';
import { AnimatePresence, motion } from 'framer-motion';

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
                      className='font-medium hover:text-custom-darkBlue hover:underline'
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/courses'
                      className='inline-flex items-center gap-1 font-medium hover:text-custom-darkBlue hover:underline'
                    >
                      Courses <ChevronDownIcon className='h-4 w-4' />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/faq'
                      className='font-medium hover:text-custom-darkBlue hover:underline'
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/contact'
                      className='font-medium hover:text-custom-darkBlue hover:underline'
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
                <div className='flex items-center justify-center'>
                  <Button className='hover:text-custom-darkBlue hover:shadow'>
                    Register
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
