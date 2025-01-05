'use client';

import Container from '@/components/shared/container';
import Masonry from 'react-masonry-css';
import { CYBER_MODULE_1, CYBER_MODULE_2 } from './data';

const breakpointColumnsObj = {
  default: 3,
  1024: 3,
  768: 2,
  640: 1,
};

const Outline = () => {
  return (
    <section className='space-y-8'>
      <div className={'rounded-br-3xl rounded-tl-3xl bg-custom-beige py-8'}>
        <Container>
          <h4 className='mb-4 text-sm font-semibold text-primary'>
            Fundamentals
          </h4>
          <div className='mb-8 flex items-start gap-x-16 gap-y-2 max-lg:flex-col lg:justify-between'>
            <h3 className='text-xl font-bold lg:flex-1 lg:text-3xl'>
              Introduction to Cybersecurity
            </h3>
            <p className='lg:flex-1'>
              By the end of the course, students should have a solid
              understanding of fundamental cybersecurity principles, networking
              concepts, and practical skills to address security challenges in
              real-world scenarios. They should be able to apply this knowledge
              to assess and mitigate cybersecurity risks effectively.
            </p>
          </div>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className='flex w-full gap-8'
            columnClassName='masonry-column'
          >
            {CYBER_MODULE_1.map((module, index) => (
              <div key={index} className='mb-8 space-y-2'>
                <h5 className='font-semibold'>{module.title}</h5>
                <ul className='list-disc pl-4'>
                  {module.lessons.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>Qualified Job Roles After Completion:</p>
                <ul>
                  {module.roles.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Masonry>
        </Container>
      </div>
      <div className={'rounded-br-3xl rounded-tl-3xl py-8'}>
        <Container>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className='flex w-full gap-8'
            columnClassName='masonry-column'
          >
            {CYBER_MODULE_2.map((module, index) => (
              <div key={index} className='mb-8 space-y-2'>
                <h5 className='font-semibold'>{module.title}</h5>
                <ul className='list-disc pl-4'>
                  {module.lessons.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>Qualified Job Roles After Completion:</p>
                <ul>
                  {module.roles.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Masonry>
        </Container>
      </div>
    </section>
  );
};
export default Outline;
