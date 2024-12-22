import Features from '@/components/landing/features';
import Hero from '@/components/landing/hero';
import JoinWaitlist from '@/components/landing/join-waitlist';
import MarqueeText from '@/components/landing/marquee-text';
import NeedHelp from '@/components/landing/need-help';
// import OurProcess from '@/components/landing/our-process';
import TakeACourse from '@/components/landing/take-a-course';
import WhyUs from '@/components/landing/why-us';
import { PreloadResources } from '@/lib/preload-resources';

export default function Page() {
  return (
    <main>
      <PreloadResources />
      <Hero />
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
