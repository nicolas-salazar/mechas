import { Container, HelpLabel, Subtitle, Title, Wrapper } from './Alert.styles';

interface AlertProps {
  helpLabel?: string;
  onClick: () => void;
  subtitle: string;
  title: string;
}

const Alert = ({ helpLabel, onClick, subtitle, title }: AlertProps) => {
  return (
    <Wrapper onClick={onClick}>
      <Container className="animate__animated animate__fadeInDown animate__slow">
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Container>

      {helpLabel && (
        <HelpLabel className="animate__animated animate__fadeIn animate__delay-2s">
          {helpLabel}
        </HelpLabel>
      )}
    </Wrapper>
  );
};

export default Alert;
