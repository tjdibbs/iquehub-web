import Link from 'next/link';
import Container from '../shared/container';
import { Separator } from '../ui/separator';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import Logo from '../shared/logo';
import {
  LinkedinOutlined,
  XOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className='space-y-8 bg-custom-darkBlue pt-12 text-white'>
      <Container className='flex flex-col items-start gap-16 lg:flex-row'>
        <div className='flex-1 space-y-4'>
          <Logo />
          <p className='text-sm'>41 Diya street Gbagada, Lagos</p>
        </div>
        <div className='flex-1 space-y-4'>
          <h6 className='text-lg font-semibold'>Courses</h6>
          <ul className='space-y-4'>
            {[
              'Web Development',
              'UI/UX Design',
              'Mobile Development',
              'Cybersecurity',
            ].map((course, index) => (
              <li key={index}>
                <Link href='/' className='text-sm hover:text-custom-beige'>
                  {course}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex-1 space-y-4'>
          <h6 className='text-lg font-semibold'>About Us</h6>
          <ul className='space-y-4'>
            {['Our Story', 'Contact Us', 'Careers'].map((item, index) => (
              <li key={index}>
                <Link href='/' className='text-sm hover:text-custom-beige'>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex-[2] space-y-4 max-lg:w-full'>
          <p>Subscribe to our newsletter</p>
          <form className='flex w-full items-center gap-0'>
            <Input
              type='email'
              placeholder='Enter your email'
              className={cn('flex-1 rounded-br-none rounded-tr-none')}
            />
            <Button
              type='submit'
              className={cn(
                'rounded-bl-none rounded-tl-none bg-custom-beige text-custom-darkBlue hover:bg-white hover:text-custom-darkBlue hover:shadow',
              )}
            >
              Subscribe
            </Button>
          </form>
        </div>
      </Container>
      <Container>
        <Separator />
      </Container>
      <Container className='flex flex-col items-center justify-between gap-4 pb-4 lg:flex-row'>
        <p>&copy; {new Date().getFullYear()} IQUE HUB. All rights reserved</p>
        <div className='flex items-center gap-4'>
          <Link href='/'>
            <XOutlined className='text-2xl text-gray-50 hover:text-custom-beige' />
          </Link>
          <Link href='/'>
            <LinkedinOutlined className='text-2xl text-gray-50 hover:text-custom-beige' />
          </Link>
          <Link href='/'>
            <FacebookOutlined className='text-2xl text-gray-50 hover:text-custom-beige' />
          </Link>
          <Link href='/'>
            <InstagramOutlined className='text-2xl text-gray-50 hover:text-custom-beige' />
          </Link>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
