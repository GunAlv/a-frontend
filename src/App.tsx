import { memo } from 'react';

console.log('key: ', import.meta.env.VITE_MAP_API_KEY);

export const App = memo(() => {
  return 'app 1';
});

App.displayName = 'App';
