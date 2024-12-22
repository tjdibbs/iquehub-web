import Container from '../shared/container';
import { Button } from '../ui/button';

const NeedHelp = () => {
  return (
    <section className='py-12'>
      <Container className='p-2 text-white'>
        <div className='rounded-lg bg-custom-darkBlue p-8'>
          <div className='mx-auto flex max-w-2xl flex-col gap-8 text-center'>
            <div className='space-y-2'>
              <p className='max-lg:text-sm'>Need help choosing a course?</p>
              <h6 className='text-2xl font-bold'>Talk To An Expert</h6>
            </div>
            <p className='max-lg:text-sm'>
              Are you indecisive about what course to choose? Would you like to
              talk to a Tech expert over any tech related issue? We have
              professionals in place who are ready and willing to be of help.
            </p>
            <div>
              <Button
                size='lg'
                className='bg-custom-beige text-custom-darkBlue hover:bg-white hover:text-custom-darkBlue hover:shadow'
                asChild
              >
                <a
                  href='https://api.whatsapp.com/send?phone=2349063321869'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Get Help
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default NeedHelp;
