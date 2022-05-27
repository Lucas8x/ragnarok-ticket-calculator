import { useState } from 'react';
import { Sun, Moon } from '@styled-icons/feather';

import { Container } from './styles';

export function RightSidebar() {
  const [theme, setTheme] = useState('dark');

  return <Container>{theme === 'dark' ? <Moon /> : <Sun />}</Container>;
}
