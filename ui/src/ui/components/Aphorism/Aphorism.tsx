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
      <Container>
        <Title>{`"${title}"`}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Container>

      {helpLabel && (
        <HelpLabelContainer>
          <HelpLabel>{helpLabel}</HelpLabel>
        </HelpLabelContainer>
      )}
    </Wrapper>
  );
};

export default Aphorism;
