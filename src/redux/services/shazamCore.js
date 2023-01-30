import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


    export const shazamCoreApi = createApi({
        reducerPath:'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl:'https://shazam-core.p.rapidapi.com',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', 'fd1b44b37emsh9188852b1a19621p14d4dfjsn180f626cfa3c')
                return headers;
            },
        }),
        endpoints: (builder) => ({
          getSongsByGenre: builder.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}` }),
          getTopCharts: builder.query({ query: () => '/v1/charts/world'}),
          getSongDetails: builder.query({ query: ({songid}) => `/v1/tracks/details?track_id=${songid}`}),
          getSongRelated: builder.query({ query: ({songid}) => `/v1/tracks/related?track_id=${songid}`}),
          getArtistDetails: builder.query({ query: (artistId) => `/v2/artists/details?artist_id=${artistId}`}),
          getSongsByCountry: builder.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
        }),
    });

    export const{
      useGetTopChartsQuery,
      useGetSongsByGenreQuery,
      useGetSongDetailsQuery,
      useGetSongRelatedQuery,
      useGetArtistDetailsQuery,
      useGetSongsByCountryQuery

    } = shazamCoreApi;