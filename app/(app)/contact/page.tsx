import ContactHero from '@/components/contact/hero';
import ContactForm from '@/components/forms/contact';
import Container from '@/components/shared/container';
import { PreloadContactResources } from '@/lib/preload-resources';
import ng from '@/assets/flag.webp';
import Image from 'next/image';
import { MailIcon } from 'lucide-react';

export default function Page() {
  return (
    <main>
      <PreloadContactResources />
      <ContactHero />
      <section className='py-8'>
        <Container className='grid grid-cols-1 items-center gap-x-12 gap-y-8 lg:grid-cols-2'>
          <div className='max-lg:order-2'>
            <ContactForm />
          </div>
          <div className='space-y-4 max-lg:order-1 max-lg:text-center'>
            <h5 className='text-xl font-semibold text-custom-darkBlue lg:text-2xl'>
              Our Office Location
            </h5>
            <p>Where the magic happens</p>
            <div className='flex items-start gap-4 max-lg:flex-col max-lg:items-center max-lg:justify-center'>
              <div className='w-20'>
                <Image
                  src={ng}
                  alt='nigeria flag'
                  width={100}
                  height={100}
                  priority
                  className='aspect-square w-full max-w-full object-contain'
                />
              </div>
              <div className='flex-1 space-y-6'>
                <div className='space-y-1'>
                  <h5 className='text-xl font-medium text-custom-darkBlue lg:text-2xl'>
                    Lagos, Nigeria
                  </h5>
                  <p className='text-gray-500'>
                    4, IQhub street, Lagos, Nigeria
                  </p>
                </div>
                <div className='space-y-1'>
                  <h5 className='text-xl font-medium text-custom-darkBlue lg:text-2xl'>
                    Call or WhatsApp
                  </h5>
                  <p className='text-gray-500'>
                    <span className='font-semibold'>Founder</span> +234 123 456
                    789
                  </p>
                  <p className='text-gray-500'>
                    <span className='font-semibold'>Founder</span> +234 123 456
                    789
                  </p>
                </div>
                <a
                  href='mailto:'
                  className='flex items-center gap-3 max-lg:justify-center'
                >
                  <MailIcon className='h-5 w-5' /> info@iqehub.com
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}