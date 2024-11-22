import Container from '../shared/container';
import { Button } from '../ui/button';

const JoinWaitlist = () => {
  return (
    <section className='bg-gray-50'>
      <Container className='space-y-8 py-8 text-center'>
        <h5 className='text-3xl font-bold tracking-wide text-custom-darkBlue'>
          Join The Waitlist For Next Cohort
        </h5>
        <Button size='lg' className='hover:text-custom-darkBlue hover:shadow'>
          Join Waitlist
        </Button>
      </Container>
    </section>
  );
};
export default JoinWaitlist;
