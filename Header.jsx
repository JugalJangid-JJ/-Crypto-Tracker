import React from 'react';

const Header = ({ theme, setTheme }) => (
  <header>
    <h1>CryptoPulse</h1>
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  </header>
);