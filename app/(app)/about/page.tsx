import AboutHero from '@/components/about/hero';
import NeedHelp from '@/components/landing/need-help';
import Container from '@/components/shared/container';
import { PreloadAboutResources } from '@/lib/preload-resources';
import {
  AwardIcon,
  BriefcaseBusinessIcon,
  CircleDollarSign,
  ClockIcon,
  MapPinHouseIcon,
  NetworkIcon,
  UsersIcon,
} from 'lucide-react';
import Image from 'next/image';

export default function Page() {
  return (
    <main>
      <PreloadAboutResources />
      <AboutHero />
      <section className='py-8'>
        <Container className='grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-2 lg:items-center'>
          <div className='space-y-8 max-lg:order-2 max-lg:text-center'>
            <h5 className='text-sm font-bold max-lg:text-center'>
              KNOW US MORE
            </h5>
            <h2 className='text-3xl font-semibold text-custom-darkBlue max-lg:text-center lg:text-5xl'>
              About IQ Hub
            </h2>
            <div className='space-y-6'>
              <p className='leading-normal'>
                <span className='font-semibold'>Ique Hub</span> is a premier
                technology academy established to provide accessible and
                high-quality tech education for individuals passionate about
                building successful careers in the digital age. Ique Hub takes
                pride in bridging the gap between education and industry needs.
                Its carefully chosen instructors, selected for both their
                real-world expertise and teaching skills, ensure students
                receive a top-notch learning experience..
              </p>
              <p className='leading-normal'>
                Ique Hub is driven by a vision to become a leading and trusted
                name in tech education, shaping a skilled workforce ready to
                meet the demands of the ever-evolving tech ecosystem.
              </p>
              <p className='leading-normal'>
                Its mission is to deliver cost-effective, high-quality training
                programs tailored to equip learners with the tools they need to
                excel in their chosen fields.
              </p>
            </div>
          </div>
          <div className='max-lg:order-1'>
            <Image
              src='/team.png'
              alt='woman smiling'
              height={100}
              width={100}
              className='aspect-[6/5] w-full max-w-full object-contain'
            />
          </div>
        </Container>
        <section className='my-12 space-y-12 bg-custom-beige/20 py-8'>
          <Container className='space-y-2 text-center'>
            <h2 className='text-center text-xl font-bold text-custom-darkBlue lg:text-3xl'>
              Guided by our core values
            </h2>
            <p>We champion growth, innovation, and career development</p>
          </Container>
          <Container className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <div className='flex flex-col gap-y-4 max-md:items-center max-md:justify-center'>
              <ClockIcon className='h-8 w-8 text-primary' />
              <h4 className='text-lg font-semibold text-primary md:text-xl'>
                Flexibility
              </h4>
              <p className='max-md:text-center'>
                We provide weekday, weekend, and online learning options,
                allowing you to tailor your education to your schedule and pace
                for maximum convenience.
              </p>
            </div>
            <div className='flex flex-col gap-y-4 max-md:items-center max-md:justify-center'>
              <MapPinHouseIcon className='h-8 w-8 text-primary' />
              <h4 className='text-lg font-semibold text-primary md:text-xl'>
                Conducive Environment
              </h4>
              <p className='max-md:text-center'>
                We’ve created an inspiring and well-equipped space to ensure a
                seamless and enjoyable learning journey.
              </p>
            </div>
            <div className='flex flex-col gap-y-4 max-md:items-center max-md:justify-center'>
              <CircleDollarSign className='h-8 w-8 text-primary' />
              <h4 className='text-lg font-semibold text-primary md:text-xl'>
                Affordable Tuition Fee
              </h4>
              <p className='max-md:text-center'>
                We have initiated all of our programs to be affordable, and our
                payment method can be paid in three installments. Terms &
                conditions applied.
              </p>
            </div>
            <div className='flex flex-col gap-y-4 max-md:items-center max-md:justify-center'>
              <NetworkIcon className='h-8 w-8 text-primary' />
              <h4 className='text-lg font-semibold text-primary md:text-xl'>
                Learning & Development
              </h4>
              <p className='max-md:text-center'>
                Join a community of ambitious and innovative individuals,
                fostering collaboration and professional networking
                opportunities that extend beyond the classroom.
              </p>
            </div>
            <div className='flex flex-col gap-y-4 max-md:items-center max-md:justify-center'>
              <UsersIcon className='h-8 w-8 text-primary' />
              <h4 className='text-lg font-semibold text-primary md:text-xl'>
                Community
              </h4>
              <p className='max-md:text-center'>
                Join a community of ambitious and innovative individuals,
                fostering collaboration and professional networking
                opportunities that extend beyond the classroom.
              </p>
            </div>
            <div className='flex flex-col gap-y-4 max-md:items-center max-md:justify-center'>
              <AwardIcon className='h-8 w-8 text-primary' />
              <h4 className='text-lg font-semibold text-primary md:text-xl'>
                Certificates
              </h4>
              <p className='max-md:text-center'>
                Upon program completion, receive a certification that validates
                your skills and enhances your professional credentials.
              </p>
            </div>
            <div className='flex flex-col gap-y-4 max-md:items-center max-md:justify-center'>
              <BriefcaseBusinessIcon className='h-8 w-8 text-primary' />
              <h4 className='text-lg font-semibold text-primary md:text-xl'>
                Internship Opportunities
              </h4>
              <p className='max-md:text-center'>
                Gain invaluable hands-on experience through internship
                placements that bridge the gap between theory and practice,
                preparing you for real-world challenges in the tech industry.
              </p>
            </div>
          </Container>
        </section>
      </section>
      <NeedHelp />
    </main>
  );
}
