import { createSlice } from '@reduxjs/toolkit';
import getRandomItem from 'random-item';

type Song = {
  author: string;
  name: string;
  path: string;
};

const SONGS_LIST: Song[] = [
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

export interface MusicPlayerState {
  currentSong: Song | null;
  isPlaying: boolean | null;
}

const initialState: MusicPlayerState = {
  currentSong: getRandomItem(SONGS_LIST),
  isPlaying: null,
};

let AUDIO_BEING_PLAYED: HTMLAudioElement | null = null;

export const musicPlayerSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    playAudio: (state) => {
      AUDIO_BEING_PLAYED = new Audio(state.currentSong?.path);
      AUDIO_BEING_PLAYED.loop = true;
      AUDIO_BEING_PLAYED.play();

      return {
        ...state,
        isPlaying: true,
      };
    },
    stopAudio: (state) => {
      AUDIO_BEING_PLAYED?.pause();

      return {
        ...state,
        isPlaying: false,
      };
    },
    toggleAudio: (state) => {
      if (AUDIO_BEING_PLAYED?.paused) {
        AUDIO_BEING_PLAYED.play();
      } else {
        AUDIO_BEING_PLAYED?.pause();
      }

      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { playAudio, stopAudio, toggleAudio } = musicPlayerSlice.actions;

export default musicPlayerSlice.reducer;
