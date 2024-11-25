'use client';

import ReactDOM from 'react-dom';

export const PreloadResources = () => {
  ReactDOM.preload('/hero.png', { as: 'image', fetchPriority: 'high' });
  ReactDOM.preload('/learn.png', { as: 'image' });
  ReactDOM.preload('/meet-people.png', { as: 'image' });
  ReactDOM.preload('/get-mentored.png', { as: 'image' });
  return null;
};
