import { useState } from 'react';
import { Sun, Moon } from '@styled-icons/feather';

import { Container, SwitchButton } from './styles';

export function RightSidebar() {
  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <Container>
      <SwitchButton onClick={toggleTheme}>
        {theme === 'dark' ? <Moon /> : <Sun />}
      </SwitchButton>
    </Container>
  );
}
