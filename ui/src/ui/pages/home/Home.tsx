import { FooterContainer } from './Home.styles';
import { MechasBackground, MusicPlayer } from '../../components';
import MainLayout from '../../layout';

const Home = () => {
  return (
    <MainLayout>
      <MechasBackground>Hey there :)</MechasBackground>

      <FooterContainer>
        <MusicPlayer />
      </FooterContainer>
    </MainLayout>
  );
};

export default Home;
