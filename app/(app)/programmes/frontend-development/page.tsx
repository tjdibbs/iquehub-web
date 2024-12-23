import Container from '@/components/shared/container';
import Module from './module';
import {
  MODULE_1,
  MODULE_2,
  MODULE_3,
  MODULE_4,
  MODULE_5,
  MODULE_6,
  MODULE_7,
  MODULE_8,
  MODULE_9,
} from './data';
import PageHero from '@/components/shared/hero';

const Page = () => {
  return (
    <main>
      <PageHero
        text='Frontend Development'
        description='IQ Hub Frontend Development programme is beginner-friendly and project based. It is designed to help participants become job-ready'
        showBtn={true}
        linkHref='/register'
        linkText='Get Started'
        imageUrl='/frontend.png'
      />
      <section className='space-y-12 py-8'>
        <div className='space-y-8'>
          <Container className='space-y-6 text-center'>
            <p className='text-sm font-medium'>CURRICULUM</p>
            <h2 className='text-center text-xl font-bold text-custom-darkBlue lg:text-3xl'>
              Frontend Development Course Outline
            </h2>
          </Container>
          <div className='space-y-8'>
            <Module module={MODULE_1} number={1} />
            <Module module={MODULE_2} number={2} />
            <Module module={MODULE_3} number={3} />
            <Module module={MODULE_4} number={4} />
            <Module module={MODULE_5} number={5} />
            <Module module={MODULE_6} number={6} />
            <Module module={MODULE_7} number={7} />
            <Module module={MODULE_8} number={8} />
            <Module module={MODULE_9} number={9} />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Page;
