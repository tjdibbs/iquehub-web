import type { CSSProperties, ReactNode } from 'react';
import Header from '../layout/header';
import Container from '../shared/container';
import Link from 'next/link';
import { Button } from '../ui/button';

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
        <div className='mx-auto space-y-6 text-center lg:max-w-4xl xl:max-w-5xl'>
          <h2 className='text-7xl font-bold leading-snug tracking-wide max-lg:text-6xl max-md:text-4xl'>
            {text}
          </h2>
          <p className='text-center lg:text-base'>{description}</p>
          {showBtn && (
            <Button
              className='bg-custom-beige text-black hover:text-custom-beige'
              asChild
            >
              <Link href={linkHref!}>{linkText}</Link>
            </Button>
          )}
          {children}
        </div>
      </Container>
    </div>
  );
};
export default PageHero;
