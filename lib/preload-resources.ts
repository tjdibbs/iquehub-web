'use client';

import ReactDOM from 'react-dom';

export const PreloadResources = () => {
  ReactDOM.preload('/hero.png', { as: 'image', fetchPriority: 'high' });
  ReactDOM.preload('/classroom.png', { as: 'image' });
  ReactDOM.preload('/tutor.png', { as: 'image' });
  ReactDOM.preload('/career.png', { as: 'image' });
  ReactDOM.preload('/learn.png', { as: 'image' });
  ReactDOM.preload('/meet-people.png', { as: 'image' });
  ReactDOM.preload('/get-mentored.png', { as: 'image' });
  return null;
};

export const PreloadContactResources = () => {
  ReactDOM.preload('/contact.png', { as: 'image', fetchPriority: 'high' });
  return null;
};

export const PreloadAuthResources = () => {
  ReactDOM.preload('/girl.png', { as: 'image', fetchPriority: 'high' });
  return null;
};

export const PreloadAboutResources = () => {
  ReactDOM.preload('/about.png', { as: 'image', fetchPriority: 'high' });
  ReactDOM.preload('/team.png', { as: 'image' });
  return null;
};

export const PreloadProgrammesResources = () => {
  ReactDOM.preload('/programmes.png', { as: 'image', fetchPriority: 'high' });
  ReactDOM.preload('/frontend.png', { as: 'image' });
  ReactDOM.preload('/full-stack.png', { as: 'image' });
  ReactDOM.preload('/digital-marketing.png', { as: 'image' });
  ReactDOM.preload('/data-science.png', { as: 'image' });
  ReactDOM.preload('/cyber-security.png', { as: 'image' });
  ReactDOM.preload('/ui-ux.png', { as: 'image' });
  return null;
};

export const PreloadNextGenCoderResources = () => {
  ReactDOM.preload('/nextgencoder.jpg', { as: 'image', fetchPriority: 'high' });
  ReactDOM.preload('/child1.png', { as: 'image' });
  ReactDOM.preload('/child2.png', { as: 'image' });
  ReactDOM.preload('/child3.png', { as: 'image' });
  return null
};
