import NextGenCoderHero from '@/components/nextgencoder/hero';
import { PreloadNextGenCoderResources } from '@/lib/preload-resources';

export default function Page() {
  return (
    <main>
      <PreloadNextGenCoderResources />
      <NextGenCoderHero />
      <section className='space-y-12 py-8'>
        <h2 className='text-center text-xl font-bold text-custom-darkBlue lg:text-3xl'>
          Programmes For Kids
        </h2>
      </section>
    </main>
  );
}
