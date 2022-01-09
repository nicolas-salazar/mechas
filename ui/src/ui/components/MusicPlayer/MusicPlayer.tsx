import { useCallback, useEffect, useState } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import {
  AuthorLabel,
  Container,
  SongMetadataContainer,
  SongNameLabel,
} from './MusicPlayer.styles';
import getRandomItem from 'random-item';

let audio: HTMLAudioElement;

type Song = {
  author: string;
  name: string;
  path: string;
};

const SONGS_LIST = [
  {
    name: 'Sleepless',
    author: 'Stuffed Tomato',
    path: '/music/Sleepless.mp3',
  },
  {
    name: 'Memoriae',
    author: 'Stuffed Tomato',
    path: '/music/Memoriae.mp3',
  },
  {
    name: 'Spatium',
    author: 'Stuffed Tomato',
    path: '/music/Spatium.mp3',
  },
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong] = useState<Song>(getRandomItem(SONGS_LIST));

  const playAudio = useCallback(() => {
    audio.play();
    setIsPlaying(true);
  }, []);

  const stopAudio = useCallback(() => {
    audio.pause();
    setIsPlaying(false);
  }, []);

  const toggleAudio = useCallback(() => {
    if (isPlaying) {
      stopAudio();
      return;
    }

    playAudio();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  useEffect(() => {
    audio = new Audio(currentSong.path);
    playAudio();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container onClick={toggleAudio}>
      {isPlaying ? <FaVolumeUp size={12} /> : <FaVolumeMute size={12} />}
      <SongMetadataContainer>
        <SongNameLabel>{currentSong.name}</SongNameLabel>
        <AuthorLabel>{`by ${currentSong.author}`}</AuthorLabel>
      </SongMetadataContainer>
    </Container>
  );
};

export default MusicPlayer;
