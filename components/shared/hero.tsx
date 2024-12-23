import type { CSSProperties, ReactNode } from 'react';
import Header from '../layout/header';
import Container from '../shared/container';
import Link from 'next/link';
import { Variants } from 'framer-motion';
import { MotionButton, MotionDiv, MotionH2, MotionP } from '@/lib/motion';

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.3,
    },
  },
};

const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    rotateX: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const descriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: "blur(3px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.98,
  },
};

const PageHero = ({
  text,
  description,
  linkHref,
  linkText,
  showBtn = false,
  imageUrl,
  children = <></>,
}: {
  text: string;
  imageUrl: string;
  description?: string;
  showBtn?: boolean;
  linkText?: string;
  linkHref?: string;
  children?: ReactNode;
}) => {
  const style: CSSProperties = {
    backgroundImage: `linear-gradient(rgba(6, 51, 84, 0.90), rgba(6, 51, 84, 0.90)), url('${imageUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div
      style={style}
      className='grid grid-rows-[auto_1fr] max-md:min-h-screen md:h-screen md:max-h-[600px]'
    >
      <Header />
      <Container className='jusify-center flex items-center gap-12 pb-8 text-white'>
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className='mx-auto space-y-6 text-center lg:max-w-4xl xl:max-w-5xl'
        >
          <MotionH2
            variants={titleVariants}
            className='text-7xl font-bold leading-snug tracking-wide max-lg:text-6xl max-md:text-4xl'
          >
            {text}
          </MotionH2>
          <MotionP 
            variants={descriptionVariants}
            className='text-center lg:text-base'
          >
            {description}
          </MotionP>
          {showBtn && (
            <MotionButton
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className='bg-custom-beige text-black hover:text-custom-beige'
              asChild
            >
              <Link href={linkHref!}>{linkText}</Link>
            </MotionButton>
          )}
          {children}
        </MotionDiv>
      </Container>
    </div>
  );
};

export default PageHero;