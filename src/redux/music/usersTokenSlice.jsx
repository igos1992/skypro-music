import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAuth } from './authSlice';

const baseQueryWithReauth = async (args, api, extraOptions) => {

  const baseQuery = fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access;
      console.debug("Использую токен из стора", { token });
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });


  const result = await baseQuery(args, api, extraOptions);
  console.debug("Результат первого запроса", { result });

  if (result?.error?.status !== 401) {
    return result;
  }

  const forceLogout = () => {
    console.debug("Принудительная авторизация!");
    api.dispatch(setAuth(null));
    window.location.navigate('/login');
  };

  const { auth } = api.getState();
  console.debug("Данные пользователя в сторе", { auth });
  if (!auth.refresh) {
    return forceLogout();
  }

  const refreshResult = await baseQuery(
    {
      url: "/user/token/refresh/",
      method: "POST",
      body: {
        refresh: auth.refresh,
      },
    },
    api,
    extraOptions
  );

  console.debug("Результат запроса на обновление токена", { refreshResult });

  if (!refreshResult.data.access) {
    return forceLogout();
  }

  api.dispatch(setAuth({ ...auth, access: refreshResult.data.access }));

  const retryResult = await baseQuery(args, api, extraOptions);

  if (retryResult?.error?.status === 401) {
    return forceLogout();
  }

  console.debug("Повторный запрос завершился успешно");

  return retryResult;
};

export const fetchUsersToken = createApi({
  reducerPath: 'fetchUsersToken',
  baseQuery: baseQueryWithReauth,
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

export const fetchAllTracks = createApi({
  reducerPath: 'fetchFavoriteTracks',
  tagTypes: ['FavoriteTrack'],
  baseQuery: baseQueryWithReauth,
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
      }),
      invalidatesTags: [{ type: 'FavoriteTrack', id: 'LIST' }]
    }),
    deleteFavoriteTrackID: builder.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: "DELETE",
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
  useAddFavoriteTrackIDMutation,
  useDeleteFavoriteTrackIDMutation,
  useGetAllMusicQuery
} = fetchAllTracks
