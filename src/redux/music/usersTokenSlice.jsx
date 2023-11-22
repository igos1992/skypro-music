import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fetchUsersToken = createApi({
  reducerPath: 'fetchUsersToken',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech'
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
          refresh: sessionStorage.getItem('refresh')
        }),
        headers: {
          "content-type": "application/json",
        },
      })
    })
  })
})

export const fetchFavoriteTracks = createApi({
  reducerPath: 'fetchFavoriteTracks',
  tagTypes: ['FavoriteTrack'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech'
  }),
  endpoints: (builder) => ({
    getFavoriteTracksAll: builder.query({
      query: () => ({
        url: 'catalog/track/favorite/all/',
        method: "GET",
        headers: {
          Authorization: sessionStorage.getItem('access'),
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
      query: (body) => ({
        url: 'catalog/track/<id>/favorite/',
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('access')}`,
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

export const {
  useGetFavoriteTracksAllQuery,
  useAddFavoriteTrackIDMutation
} = fetchFavoriteTracks
