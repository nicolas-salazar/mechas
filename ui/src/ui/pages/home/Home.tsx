import { BodyContainer, FooterContainer } from './Home.styles';
import {
  MadeWithLove,
  MechasBackground,
  MusicPlayer,
  SinceLabel,
} from '../../components';
import MainLayout from '../../layout';

const Home = () => {
  return (
    <MainLayout>
      <MechasBackground>
        <BodyContainer>
          <SinceLabel />
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
