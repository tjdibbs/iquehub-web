import Image from 'next/image';
import Container from '../shared/container';
import one from '@/assets/learning-environment.gif';
import two from '@/assets/expirence-tutor.gif';
import three from '@/assets/career-support.gif';

const WhyUs = () => {
  return (
    <section className='bg-custom-beige/20'>
      <Container className='space-y-12 py-16'>
        <div className='space-y-6 text-center'>
          <p className='text-sm font-medium'>Why iQiQUE?</p>
          <h2 className='text-center text-xl font-bold text-custom-darkBlue lg:text-3xl'>
            We Are Customer-Centric
          </h2>
        </div>
        <div className='grid grid-cols-1 items-start gap-8 lg:grid-cols-3'>
          {[one, two, three].map((image, index) => (
            <div key={index} className='flex flex-col gap-6'>
              <div className='flex items-center justify-center'>
                <Image
                  src={image}
                  alt={`0${index + 1}`}
                  width={100}
                  height={100}
                  priority
                  className='aspect-[6/4] w-full max-w-[250px] object-contain'
                />
              </div>
              <div className='space-y-4 text-center'>
                <h3 className='text-lg font-semibold'>
                  {
                    [
                      'Great learning Environment',
                      'Experienced Tutors',
                      'Career Support',
                    ][index]
                  }
                </h3>
                <p className='leading-normal text-gray-500'>
                  {
                    [
                      'We provide exceptional learning facilities with comfortable, en-suite classrooms and high-speed internet',
                      'Our tutors are experienced professionals chosen for their exceptional teaching abilities. They are dedicated to providing top-notch education to our students.',
                      'We provide unparalleled support both during your learning journey and after graduation. Our commitment to your success extends beyond the classroom.',
                    ][index]
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default WhyUs;
