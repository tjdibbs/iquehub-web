'use client';

import ReactDOM from 'react-dom';

export const PreloadResources = () => {
  ReactDOM.preload('/images/8.webp', { as: 'image', fetchPriority: 'high' });
  ReactDOM.preload('/classroom.png', { as: 'image' });
  ReactDOM.preload('/images/11.webp', { as: 'image' });
  ReactDOM.preload('/images/7.webp', { as: 'image' });
  ReactDOM.preload('/images/17.webp', { as: 'image' });
  ReactDOM.preload('/images/13.webp', { as: 'image' });
  ReactDOM.preload('/images/14.webp', { as: 'image' });
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
  ReactDOM.preload('/images/3.webp', { as: 'image', fetchPriority: 'high' });
  ReactDOM.preload('/images/10.webp', { as: 'image' });
  ReactDOM.preload('/images/17.webp', { as: 'image' });
  ReactDOM.preload('/images/12.webp', { as: 'image' });
  ReactDOM.preload('/images/4.webp', { as: 'image' });
  ReactDOM.preload('/images/5.webp', { as: 'image' });
  return null;
};

export const PreloadNextGenCoderResources = () => {
  ReactDOM.preload('/images/16.webp', { as: 'image', fetchPriority: 'high' });
  ReactDOM.preload('/images/15.webp', { as: 'image' });
  ReactDOM.preload('/images/18.webp', { as: 'image' });
  ReactDOM.preload('/images/19.webp', { as: 'image' });
  return null
};
