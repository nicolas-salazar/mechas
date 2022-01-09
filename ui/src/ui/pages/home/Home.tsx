import { FooterContainer } from './Home.styles';
import { MadeWithLove, MechasBackground, MusicPlayer } from '../../components';
import MainLayout from '../../layout';

const Home = () => {
  return (
    <MainLayout>
      <MechasBackground>Hey there :)</MechasBackground>

      <FooterContainer>
        <MusicPlayer />
        <MadeWithLove />
      </FooterContainer>
    </MainLayout>
  );
};

export default Home;
