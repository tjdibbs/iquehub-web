import Image from 'next/image';
import Container from '../shared/container';
import certificate from '@/assets/certificate.gif';
import { Button } from '../ui/button';

const TakeACourse = () => {
  return (
    <section className='py-8'>
      <Container className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2'>
        <div>
          <Image
            src={certificate}
            alt='certificate'
            width={100}
            height={100}
            className='aspect-square w-full max-w-full object-contain'
          />
        </div>
        <div className='flex flex-col gap-6'>
          <p className='text-sm font-medium uppercase text-custom-beige'>
            TAKE A COURSE
          </p>
          <h5 className='text-3xl font-semibold text-custom-darkBlue'>
            Acquire a tech skill to transcend your current earning status
          </h5>
          <p>
            We provide high-quality and affordable technology training to meet
            our students’ needs. Also, we ensure all our students are equipped
            with the necessary tech skills for related work opportunities at the
            end of the program.
          </p>
          <div>
            <Button
              className='bg-custom-beige text-custom-darkBlue hover:bg-custom-beige/70'
              size='lg'
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default TakeACourse;
