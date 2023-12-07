import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTracks: [],
  currentTrack: null,
  shuffle: false,
  shuffleAllTracks: [],
  pulsatingPoint: false,
  favoriteArrayTrack: [],
  collectionId: [],
  trackInfo: null,
  searchByTrackTitle: '',
  filterAuthors: [],
  filterGenres: [],
  filterSort: { sort: 'По умолчанию' },
  activeLinkOnFilters: false
};

const getShuffleAllTracks = (array) => {
  const arrayTracks = new Array(...array);
  return arrayTracks.sort(() => Math.random() - 0.5);
};

const playerBarSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {

    // все треки (массив главный)
    setAllTracks: (state, action) => {
      state.allTracks = action.payload;
    },

    // все треки (массив избранных треков)
    setAllTracksFavorites: (state, action) => {
      state.favoriteArrayTrack = action.payload;
    },

    // категории (массив той категории, который выбрал)
    setCollectionId: (state, action) => {
      state.collectionId = action.payload;
    },

    // текущая дорожка
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
    },

    // переключение трека в случайном порядке
    setToggleShuffleTrack: (state) => {
      state.shuffleAllTracks = getShuffleAllTracks(state.allTracks || state.favoriteArrayTrack || state.collectionId)
    },

    // Активная / не активная иконка shuffle
    setShuffle: (state, action) => {
      state.shuffle = action.payload;
    },

    // Активная / не активная пульсирующая точка
    setPulsatingPoint: (state, action) => {
      state.pulsatingPoint = action.payload;
    },

    // Инфо по играющему треку
    setTrackInfo: (state, action) => {
      state.trackInfo = action.payload;
    },

    // поиск по названию трека
    setSearchByTrackTitle: (state, action) => {
      state.searchByTrackTitle = action.payload;
    },

    // сортировка по датам
    setFilterSort: (state, action) => {
      state.filterSort.sort = action.payload
    },

    // фильтр по добавлению исполнителю
    setFilterAuthors: (state, action) => {
      state.filterAuthors.push(action.payload);
    },

    // фильтр по удалению исполнителя
    setDeleteFilterAuthors: (state, action) => ({
      ...state,
      filterAuthors: state.filterAuthors.filter(
        (author) => author !== action.payload,
      ),
    }),

    // фильтр по добавлению жанра
    setFilterGenres: (state, action) => {
      state.filterGenres.push(action.payload);
    },

    // фильтр по удалению жанра
    setDeleteFilterGenres: (state, action) => ({
      ...state,
      filterGenres: state.filterGenres.filter(
        (genre) => genre !== action.payload,)
    }),

    // активная / не активная ссылка на фильтре при выборе
    setActiveLinkOnFilters: (state, action) => {
      state.activeLinkOnFilters = action.payload
    }
  }
})

export const {
  setAllTracks,
  setAllTracksFavorites,
  setCurrentTrack,
  setToggleShuffleTrack,
  setPulsatingPoint,
  setShuffle,
  setCollectionId,
  setTrackInfo,
  setSearchByTrackTitle,
  setSortTrackFilter,
  setFilterAuthors,
  setDeleteFilterAuthors,
  setFilterGenres,
  setDeleteFilterGenres,
  setFilterSort,
  setActiveLinkOnFilters,
} = playerBarSlice.actions;

export default playerBarSlice.reducer