import { configureStore } from "@reduxjs/toolkit";
import playerBarReducer from './music/playerBarSlice';
import { fetchUsersToken, fetchFavoriteTracks } from "./music/usersTokenSlice";

const store = configureStore({
  reducer: {
    track: playerBarReducer,
    [fetchUsersToken.reducerPath]: fetchUsersToken.reducer,
    [fetchFavoriteTracks.reducerPath]: fetchFavoriteTracks.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchUsersToken.middleware).concat(fetchFavoriteTracks.middleware),

})

export default store;