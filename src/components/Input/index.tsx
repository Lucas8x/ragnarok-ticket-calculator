import { Container, SInput, Label } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export function Input({ id, label, ...rest }: InputProps) {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <SInput {...rest} />
    </Container>
  );
}
