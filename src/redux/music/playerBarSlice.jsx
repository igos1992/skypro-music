import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTracks: [],
  currentTrack: null,
  shuffle: false,
  shuffleAllTracks: [],
  pulsatingPoint: false
};

const getShuffleAllTracks = (array) => {
  const arrayTracks = new Array(...array);
  return arrayTracks.sort(() => Math.random() - 0.5);
};

const playerBarSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {

    // все треки
    setAllTracks: (state, action) => {
      state.allTracks = action.payload;
    },

    // текущая дорожка
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
    },

    // переключение трека в случайном порядке
    setToggleShuffleTrack: (state) => {
      state.shuffleAllTracks = getShuffleAllTracks(state.allTracks)
    },

    // Активная / не активная иконка shuffle
    setShuffle: (state, action) => {
      state.shuffle = action.payload;
    },

    // Активная / не активная пульсирующая точка
    setPulsatingPoint: (state, action) => {
      state.pulsatingPoint = action.payload;
    }
  }
})

export const {
  setAllTracks,
  setCurrentTrack,
  setToggleShuffleTrack,
  setPulsatingPoint,
  setShuffle
} = playerBarSlice.actions;

export const selectAllTracks = (store) => store.track.allTracks;
export const selectCurrentTrack = (store) => store.track.currentTrack;
export const selectToggleShuffleTrack = (store) => store.track.shuffleAllTracks;
export const selectShuffle = (store) => store.track.shuffle;
export const selectPulsatingPoint = (store) => store.track.pulsatingPoint;

export default playerBarSlice.reducer