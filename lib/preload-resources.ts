'use client';

import ReactDOM from 'react-dom';

export const PreloadResources = () => {
  ReactDOM.preload('/hero.png', { as: 'image', fetchPriority: 'high' });
  ReactDOM.preload('/learn.png', { as: 'image' });
  ReactDOM.preload('/meet-people.png', { as: 'image' });
  ReactDOM.preload('/get-mentored.png', { as: 'image' });
  return null;
};

export const PreloadContactResources = () => {
  ReactDOM.preload('/contact.png', { as: 'image' });
  return null;
};

export const PreloadAuthResources = () => {
  ReactDOM.preload('/girl.png', { as: 'image' });
  return null;
};

export const PreloadAboutResources = () => {
  ReactDOM.preload('/about.png', { as: 'image' });
  ReactDOM.preload('/team.png', { as: 'image' });
  return null;
};
