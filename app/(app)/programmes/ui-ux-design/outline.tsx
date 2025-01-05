'use client';

import Container from '@/components/shared/container';
import Masonry from 'react-masonry-css';

const breakpointColumnsObj = {
  default: 3,
  1024: 3,
  768: 2,
  640: 1,
};

const Outline = () => {
  return (
    <section className='space-y-8'>
      <div className='rounded-br-3xl rounded-tl-3xl bg-custom-beige py-8'>
        <Container>
          <h4 className='mb-4 text-sm font-semibold text-primary'>
            Fundamentals
          </h4>
          <div className='mb-8 flex items-start gap-x-16 gap-y-2 max-lg:flex-col lg:justify-between'>
            <h3 className='text-xl font-bold lg:flex-1 lg:text-3xl'>
              Introduction to UI/UX Design
            </h3>
            <p className='lg:flex-1'>
              You will learn about and gain a thorough understanding of every
              step of the UI/UX development process in this course, from user
              research to establishing a project’s strategy, scope, and
              information architecture to creating sitemaps and wireframes.
            </p>
          </div>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className='flex w-full gap-8'
            columnClassName='masonry-column'
          >
            <div className='mb-8 space-y-2'>
              <h5 className='font-semibold'>Introduction to UI/UX</h5>
              <ul className='list-disc pl-4'>
                {[
                  'Introduction to UX & Design Thinking',
                  'User Research',
                  'User Personas',
                  'Information Architecture',
                  'Wireframing & Prototyping',
                  'Usability Testing',
                  'Design Presentation',
                ].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className='mb-8 space-y-2'>
              <h5 className='font-semibold'>UI Design</h5>
              <ul className='list-disc pl-4'>
                {[
                  'Getting Started with UI',
                  'Responsive Layouts & Grids',
                  'UI Elements & File Organization',
                  'Visual Hierarchy & Spacing',
                  'UI Design Patterns',
                  'Visual Design Principles & Trends',
                  'Typography in UI',
                  'Color in UI',
                  'Imagery in UI',
                ].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className='mb-8 space-y-2'>
              <h5 className='font-semibold'>UX Design</h5>
              <ul className='list-disc pl-4'>
                {[
                  'The Role of the UX Designer',
                  'A History of User Experience Design',
                  'User-Centered Design Process',
                  'Design Thinking',
                  'Understanding the Problem',
                  'Mental Models & User Journeys',
                  'Design Patterns for Mobile & Desktop',
                  'Usability Heuristics & Interaction Design',
                  'Low-Fidelity Prototyping: Paper & Sketches',
                  'Rapid Prototyping: User Onboarding',
                  'Mid-Fidelity Wireframes & Prototyping',
                ].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </Masonry>
        </Container>
      </div>
      <div className='rounded-br-3xl rounded-tl-3xl py-8'>
        <Container>
          <h4 className='mb-4 text-sm font-semibold text-primary'>
            Career Coaching
          </h4>
          <div className='mb-8 flex items-start gap-x-16 gap-y-2 max-lg:flex-col lg:justify-between'>
            <h3 className='text-xl font-bold lg:flex-1 lg:text-3xl'>
              LinkedIn Optimization
            </h3>
          </div>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className='flex w-full gap-8'
            columnClassName='masonry-column'
          >
            <div className='mb-8 space-y-2'>
              <ul className='list-disc pl-4'>
                {[
                  'Improving your profile to attract job opportunities',
                  'CV review',
                  'Career tips',
                  'Job Alert',
                ].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </Masonry>
        </Container>
      </div>
    </section>
  );
};
export default Outline;
