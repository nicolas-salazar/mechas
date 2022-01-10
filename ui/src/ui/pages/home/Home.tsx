import { BodyContainer, FooterContainer } from './Home.styles';
import MainLayout from '../../layout';
import {
  MadeWithLove,
  MechasBackground,
  MusicPlayer,
  SinceLabel,
} from '../../components';
import DedicationsCarousel from './DedicationsCarousel';

const Home = () => {
  return (
    <MainLayout>
      <MechasBackground>
        <BodyContainer>
          <SinceLabel />
          <DedicationsCarousel />
        </BodyContainer>
      </MechasBackground>

      <FooterContainer>
        <MusicPlayer />
        <MadeWithLove />
      </FooterContainer>
    </MainLayout>
  );
};

export default Home;
