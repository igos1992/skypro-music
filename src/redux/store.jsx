import { configureStore } from "@reduxjs/toolkit";
import playerBarReducer from './music/playerBarSlice';
import { fetchUsersToken, fetchFavoriteTracks, 
  // getListAllMusic 
} from "./music/usersTokenSlice";

const store = configureStore({
  reducer: {
    track: playerBarReducer,
    [fetchUsersToken.reducerPath]: fetchUsersToken.reducer,
    [fetchFavoriteTracks.reducerPath]: fetchFavoriteTracks.reducer,
    // [getListAllMusic.reducerPath]: getListAllMusic.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(fetchUsersToken.middleware)
  .concat(fetchFavoriteTracks.middleware)
  // .concat(getListAllMusic.middleware),

})

export default store;