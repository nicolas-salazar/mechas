import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { playAudio, toggleAudio } from '../../../store/musicPlayerSlice';
import {
  AuthorLabel,
  Container,
  SongMetadataContainer,
  SongNameLabel,
} from './MusicPlayer.styles';

const MusicPlayer = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state: RootState) => state.music.isPlaying);
  const currentSong = useSelector(
    (state: RootState) => state.music.currentSong,
  );

  if (!currentSong) {
    return null;
  }

  return (
    <Container
      onClick={() => {
        if (isPlaying === null) {
          dispatch(playAudio());
          return;
        }

        dispatch(toggleAudio());
      }}
    >
      {isPlaying ? <FaVolumeUp size={12} /> : <FaVolumeMute size={12} />}
      <SongMetadataContainer>
        <SongNameLabel>{currentSong.name}</SongNameLabel>
        <AuthorLabel>{`by ${currentSong.author}`}</AuthorLabel>
      </SongMetadataContainer>
    </Container>
  );
};

export default MusicPlayer;
