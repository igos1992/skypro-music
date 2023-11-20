import { configureStore } from "@reduxjs/toolkit";
import playerBarReducer from './music/playerBarSlice';
import { fetchUsersToken } from "./music/usersTokenSlice";
// import usersTokenReducer from './music/usersTokenSlice';

const store = configureStore({
  reducer: {
    track: playerBarReducer,
    [fetchUsersToken.reducerPath]: fetchUsersToken.reducer,
    // usersToken: usersTokenReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchUsersToken.middleware)
})

export default store;