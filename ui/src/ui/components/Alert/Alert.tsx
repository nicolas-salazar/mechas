import {
  Container,
  HelpLabel,
  HelpLabelContainer,
  Subtitle,
  Title,
  Wrapper,
} from './Alert.styles';

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
        <HelpLabelContainer className="animate__animated animate__fadeIn animate__delay-2s">
          <HelpLabel className="animate__animated animate__pulse animate__slow animate__infinite">
            {helpLabel}
          </HelpLabel>
        </HelpLabelContainer>
      )}
    </Wrapper>
  );
};

export default Alert;
