import NextGenCoderHero from '@/components/nextgencoder/hero';
import { PreloadNextGenCoderResources } from '@/lib/preload-resources';

export default function Page() {
  return (
    <main>
      <PreloadNextGenCoderResources />
      <NextGenCoderHero />
    </main>
  );
}
