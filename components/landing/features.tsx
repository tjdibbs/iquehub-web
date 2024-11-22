import Image from 'next/image';
import Container from '../shared/container';

const images = ['/learn.png', '/meet-people.png', '/get-mentored.png'];

const Features = () => {
  return (
    <section className='bg-custom-beige/20 py-12'>
      <Container className='grid grid-cols-1 items-start gap-8 lg:grid-cols-3'>
        {images.map((image, index) => (
          <div key={index} className='flex flex-col gap-6'>
            <div className='flex items-center justify-center'>
              <Image
                src={image}
                alt={`0${index + 1}`}
                width={100}
                height={100}
                className='aspect-[6/4] w-full object-cover'
              />
            </div>
            <div className='space-y-4'>
              <h2 className='text-lg font-semibold'>
                {
                  [
                    'Learn an in-demand skill',
                    'Build new networks',
                    'Get mentored',
                  ][index]
                }
              </h2>
              <p className='max-lg:text-sm'>
                {
                  [
                    'Tech is the future of work. Learn an in-demand skill today and be equipped for the tech ecosystem. In addition, you would get trained in soft skills and entrepreneurship',
                    'Get access to a community of like-minded individuals, build relationships and learn from each other.',
                    'Get mentored by Industry experts during and after the program. This will ensure that you have enough guidance and knowledge to get into a tech role and build your portfolio.',
                  ][index]
                }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
export default Features;
