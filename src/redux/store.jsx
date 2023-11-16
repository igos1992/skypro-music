import { configureStore } from "@reduxjs/toolkit";
import playerBarReducer from './music/playerBarSlice'

const store = configureStore({
  reducer: {
    track: playerBarReducer
  }
})

export default store;