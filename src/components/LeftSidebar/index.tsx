import { Github } from '@styled-icons/feather';

import { Container, GithubLink } from './styles';

export function LeftSidebar() {
  return (
    <Container>
      <GithubLink
        href={'https://github.com/Lucas8x/ragnarok-ticket-calculator'}
        target='_blank'
      >
        <Github />
      </GithubLink>
    </Container>
  );
}
