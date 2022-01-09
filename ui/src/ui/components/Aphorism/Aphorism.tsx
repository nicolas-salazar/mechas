import {
  Container,
  HelpLabel,
  HelpLabelContainer,
  Subtitle,
  Title,
  Wrapper,
} from './Aphorism.styles';

interface AphorismProps {
  helpLabel?: string;
  onClick: () => void;
  subtitle: string;
  title: string;
}

const Aphorism = ({ helpLabel, onClick, subtitle, title }: AphorismProps) => {
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

export default Aphorism;
