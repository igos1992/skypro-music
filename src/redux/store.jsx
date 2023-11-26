import { configureStore } from "@reduxjs/toolkit";
import playerBarReducer from './music/serviceQuery';
import {
  fetchUsersToken,
  fetchAllTracks,
} from "./music/usersTokenSlice";
import { authReducer } from "./music/authSlice";

const store = configureStore({
  reducer: {
    track: playerBarReducer,
    auth: authReducer,
    [fetchUsersToken.reducerPath]: fetchUsersToken.reducer,
    [fetchAllTracks.reducerPath]: fetchAllTracks.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(fetchUsersToken.middleware)
    .concat(fetchAllTracks.middleware)
})

export default store;