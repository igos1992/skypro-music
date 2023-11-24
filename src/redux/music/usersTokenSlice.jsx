import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fetchUsersToken = createApi({
  reducerPath: 'fetchUsersToken',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState(localStorage.getItem('access'));
    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    getToken: builder.mutation({
      query: ({ email, password }) => ({
        url: '/user/token/',
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "content-type": "application/json",
        },
      })
    }),
    getTokenRefresh: builder.mutation({
      query: () => ({
        url: '/user/token/refresh/',
        method: "POST",
        body: JSON.stringify({
          refresh: `Bearer ${localStorage.getItem('refresh')}`
        }),
        headers: {
          "content-type": "application/json",
        },
      })
    })
  })
})

// export const getListAllMusic = createApi({
//   reducerPath: 'getListAllMusic',
//   tagTypes: ['listAllMusic'],
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://skypro-music-api.skyeng.tech'
//   }),
//   endpoints: (builder) => ({
//     getAllMusic: builder.query({
//       query: () => `/catalog/track/all/`
//     }),
//     providesTags: (result) => result
//         ? [
//           ...result.map(({ id }) => ({ type: 'listAllMusic', id })),
//           { type: 'listAllMusic', id: 'LIST' },
//         ]
//         : [{ type: 'listAllMusic', id: 'LIST' }]
//   })
// })

export const fetchFavoriteTracks = createApi({
  reducerPath: 'fetchFavoriteTracks',
  tagTypes: ['FavoriteTrack'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech'
  }),
  endpoints: (builder) => ({
    getAllMusic: builder.query({
      query: () => `/catalog/track/all/`,
      providesTags: (result) => result
      ? [
        ...result.map(({ id }) => ({ type: 'FavoriteTrack', id })),
        { type: 'FavoriteTrack', id: 'LIST' },
      ]
      : [{ type: 'FavoriteTrack', id: 'LIST' }]
    }),
    getFavoriteTracksAll: builder.query({
      query: () => ({
        url: 'catalog/track/favorite/all/',
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`,
        },
      }),
      providesTags: (result) => result
      ? [
        ...result.map(({ id }) => ({ type: 'FavoriteTrack', id })),
        { type: 'FavoriteTrack', id: 'LIST' },
      ]
      : [{ type: 'FavoriteTrack', id: 'LIST' }]
    }),
    addFavoriteTrackID: builder.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`,
        },
      }),
      invalidatesTags: [{ type: 'FavoriteTrack', id: 'LIST' }]
    }),
    deleteFavoriteTrackID: builder.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`,
        },
      }),
      invalidatesTags: [{ type: 'FavoriteTrack', id: 'LIST' }]
    })
  })
})

export const {
  useGetTokenMutation,
  useGetTokenRefreshMutation,
} = fetchUsersToken;

// export const {useGetAllMusicQuery} = getListAllMusic

export const {
  useGetFavoriteTracksAllQuery,
  useAddFavoriteTrackIDMutation,
  useDeleteFavoriteTrackIDMutation,
  useGetAllMusicQuery
} = fetchFavoriteTracks
