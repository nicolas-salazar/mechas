import { Container, Subtitle, Title, Wrapper } from './Alert.styles';

interface AlertProps {
  onClick: () => void;
  subtitle: string;
  title: string;
}

const Alert = ({ onClick, subtitle, title }: AlertProps) => {
  return (
    <Wrapper onClick={onClick}>
      <Container className="animate__animated animate__fadeInDown animate__slow">
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Container>
    </Wrapper>
  );
};

export default Alert;
