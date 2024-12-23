'use client';

import Headroom from 'react-headroom';
import Container from '../shared/container';
import Link from 'next/link';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import useScrollPosition from '@/hooks/scroll-position';
import MobileNav from './mobile-nav';
import ProgrammesPopover from './programmes-popover';
import { XIcon } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Logo from '../shared/logo';

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3 }
  },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.95 }
};

const bannerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2
    }
  }
};

const Header = () => {
  const [open, setOpen] = useState(true);
  const isScrolled = useScrollPosition();
  const pathname = usePathname();

  return (
    <Headroom className='z-[99]'>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={cn(
          'relative py-4 text-white',
          isScrolled ? 'bg-custom-darkBlue' : 'bg-transparent',
        )}
      >
        <Container className='flex items-center justify-between gap-16'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Logo />
          </motion.div>

          <nav className='hidden lg:block'>
            <ul className='flex items-center gap-10'>
              {[
                { href: '/about', text: 'About us' },
                { component: <ProgrammesPopover /> },
                { href: '/faq', text: 'Community' },
                { href: '/nextgencoder', text: 'NextGenCoder' },
                { href: '/contact', text: 'Contact us' },
              ].map((item, i) => (
                <motion.li
                  key={item.text || 'programmes'}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                >
                  {item.component || (
                    <Link
                      href={item.href!}
                      className={cn(
                        'font-medium uppercase hover:text-custom-beige',
                        pathname === item.href && 'text-custom-beige',
                      )}
                    >
                      {item.text}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div
            className='hidden items-center justify-end lg:flex'
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                size='lg'
                className={cn(
                  'bg-custom-beige text-custom-darkBlue hover:bg-white hover:text-custom-darkBlue hover:shadow',
                )}
                asChild
              >
                <Link href='/register'>Enroll Now</Link>
              </Button>
            </motion.div>
          </motion.div>
          <MobileNav />
        </Container>
        <AnimatePresence>
          {isScrolled && open && !pathname.includes('programmes') && (
            <motion.section
              variants={bannerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className='absolute left-0 top-full w-full bg-custom-beige text-custom-darkBlue'
            >
              <Container className='relative flex items-center gap-3 py-2 text-center'>
                <div className='hidden w-5 lg:block' />
                <p className='max-lg:text-sm lg:flex-1'>
                  All programmes are now open for registration{' '}
                  <Link
                    href='/programmes'
                    className='underline hover:text-black'
                  >
                    Browse Programmes
                  </Link>
                </p>
                <Button
                  size='icon'
                  variant='ghost'
                  onClick={() => setOpen(false)}
                >
                  <XIcon className='h-5 w-5' />
                </Button>
              </Container>
            </motion.section>
          )}
        </AnimatePresence>
      </motion.header>
    </Headroom>
  );
};

export default Header;