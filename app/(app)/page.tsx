import Features from '@/components/landing/features';
import JoinWaitlist from '@/components/landing/join-waitlist';
import MarqueeText from '@/components/landing/marquee-text';
import NeedHelp from '@/components/landing/need-help';
// import OurProcess from '@/components/landing/our-process';
import TakeACourse from '@/components/landing/take-a-course';
import WhyUs from '@/components/landing/why-us';
import PageHero from '@/components/shared/hero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PreloadResources } from '@/lib/preload-resources';
import { cn } from '@/lib/utils';

export default function Page() {
  return (
    <main>
      <PreloadResources />
      <PageHero
        text='Where Passion Meets Innovation'
        description='Unlock your potentials today'
        imageUrl='/hero.png'
      >
        <form className='mx-auto flex w-full max-w-md items-center gap-0'>
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
            Explore Programmes
          </Button>
        </form>
      </PageHero>
      {/* <OurProcess /> */}
      <MarqueeText />
      <WhyUs />
      <TakeACourse />
      <JoinWaitlist />
      <Features />
      <NeedHelp />
    </main>
  );
}
