import React from 'react';
interface IThemeProps {
    [key: string]: { color: string; background: string; }
  }
  const themes: IThemeProps = {
    'light': {
      color: '#000',
      background: '#eee'
    },
    'dark': {
      color: '#fff',
      background: '#222'
    },
  }
  
  const ThemeContext = React.createContext(themes.dark)

  export { themes, ThemeContext}