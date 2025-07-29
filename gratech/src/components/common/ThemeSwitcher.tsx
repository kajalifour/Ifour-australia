'use client';

import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
   const [theme, setTheme] = useState<string>('dark');

   useEffect(() => {
      const savedTheme = localStorage.getItem('theme') || 'dark';
      document.documentElement.setAttribute('data-theme', savedTheme);
      setTheme(savedTheme);
   }, []);

   const toggleTheme = () => {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      setTheme(newTheme);
   };

   return (
      <button onClick={toggleTheme} style={{ position: 'fixed', top: 20, right: 20 }}>
         Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
   );
};

export default ThemeSwitcher;
