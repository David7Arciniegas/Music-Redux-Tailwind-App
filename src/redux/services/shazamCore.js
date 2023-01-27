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
          getTopCharts: builder.query({ query: () => '/v1/charts/world'}),
          getSongDetails: builder.query({ query: ({songid}) => `/v1/tracks/details?track_id=${songid}`}),
        
        }),
    });

    export const{
      useGetTopChartsQuery,
      useGetSongDetailsQuery,
    } = shazamCoreApi;