// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const initialState = {
//   access: "",
//   refresh: "",
// };

export const fetchUsersToken = () => createApi({
  reducerPath: 'fetchUsersToken',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/'
  }),
  endpoints: (builder) => ({
    getToken: builder.mutation({
      query: ({ email, password }) => ({
        url: 'user/login/',
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "content-type": "application/json",
        },
      })
    })
  })
})

export const { useGetTokenMutation } = fetchUsersToken;

export default fetchUsersToken.reducer





















































// function saveToken(token) {
//   localStorage.setItem('tokenData', JSON.stringify(token));
// }

// export const fetchUsersToken = createAsyncThunk(
//   'usersToken/fetchUsersToken',
//   async ({ email, password }) => {
//     const response = await fetch('https://skypro-music-api.skyeng.tech/user/token/', {
//       method: "POST",
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//       headers: {
//         "content-type": "application/json",
//       },
//     })


//       const data = await response.json()

//       return data
//   }
// )

// export const fetchUsersRefreshToken = createAsyncThunk(
//   'usersToken/fetchUsersToken',
//   async ({ refresh }) => {
//     const response = await fetch('https://skypro-music-api.skyeng.tech/user/token/refresh/', {
//       method: "POST",
//       body: JSON.stringify({
//         refresh
//       }),
//       headers: {
//         "content-type": "application/json",
//       },
//     })
//     if (response === 200) {
//       const data = await response.json()
//       saveToken(JSON.stringify(data));
//       console.log(data)
//       return Promise.resolve()
//     }
//     return Promise.reject();
//   }
// // )

// const usersTokenSlice = createSlice({
//   name: 'usersToken',
//   initialState,
//   extraReducers: (builder) => {
//     builder.addCase(fetchUsersToken.fulfilled, (state) => {

//       console.log(state);


//     });
//     // builder.addCase(fetchUsersToken.rejected, (action) => {

//     //   console.log(action);

//     //   // console.log(state.access = localStorage.setItem('user', action.payload.access));
//     // });
//   }



//   // {

//   //   [fetchUsersToken.pending]: (state) => {
//   //     state.error = null
//   //   },
//   //   [fetchUsersToken.fulfilled]: (state, action) => {
//   //     state.access = action.payload,
//   //       state.refresh = action.payload.
//   //         console.log(state.access = action.payload);
//   //   },
//   //   // [fetchUsersToken.rejected]: (state) => {

//   //   // }
//   // }
// })


// export default usersTokenSlice.reducer
