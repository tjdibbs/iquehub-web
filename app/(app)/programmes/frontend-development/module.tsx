"use client"

import Container from '@/components/shared/container';
import { cn } from '@/lib/utils';
import { ModuleType } from './data';
import Masonry from 'react-masonry-css';

const Module = ({ module, number }: { module: ModuleType; number: number }) => {
  const breakpointColumnsObj = {
    default: 3, 
    1024: 3,   
    768: 2,     
    640: 1      
  };

  return (
    <div
      className={cn(
        'rounded-tl-3xl py-8 rounded-br-3xl',
        number % 2 !== 0 && 'bg-custom-beige',
      )}
    >
      <Container>
        <h4 className='mb-4 text-sm font-semibold text-primary'>
          MODULE {number}
        </h4>
        <div className='mb-8 flex items-start gap-x-16 gap-y-2 max-lg:flex-col lg:justify-between'>
          <h3 className='text-xl font-bold lg:text-3xl lg:flex-1'>{module.title}</h3>
          <p className='lg:flex-1'>{module.description}</p>
        </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-8 w-full"
          columnClassName="masonry-column"
        >
          {module.lessons.map((lesson, index) => (
            <div key={index} className='space-y-2 mb-8'>
              <h5 className='font-semibold'>{lesson.title}</h5>
              <ul className='list-disc pl-4'>
                {lesson.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Masonry>
      </Container>
    </div>
  );
};

export default Module;
