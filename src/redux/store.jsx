import { configureStore } from "@reduxjs/toolkit";
import playerBarReducer from './music/musicSlice';
import {
  fetchUsersToken,
  fetchAllTracks,
  // fetchCollectionsAll,
} from "./music/serviceQuery";
import { authReducer } from "./music/authSlice";

const store = configureStore({
  reducer: {
    track: playerBarReducer,
    auth: authReducer,
    [fetchUsersToken.reducerPath]: fetchUsersToken.reducer,
    [fetchAllTracks.reducerPath]: fetchAllTracks.reducer,
    // [fetchCollectionsAll.reducerPath]: fetchCollectionsAll.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(fetchUsersToken.middleware)
    .concat(fetchAllTracks.middleware)
    // .concat(fetchCollectionsAll.middleware)
})

export default store;