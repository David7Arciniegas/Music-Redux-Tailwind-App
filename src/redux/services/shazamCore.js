import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


    export const shazamCoreApi = createApi({
        reducerPath:'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl:'https://shazam.p.rapidapi.com/',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', 'd3f3db9291msh877206a23053900p18bd2cjsnecb955a91875')
                return headers;
            },
        }),
        endpoints: (builder) => ({
          getTopCharts: builder.query({ query: () => '/charts/track'}),
          getSongDetails: builder.query({ query: ( songid ) => `/shazam-songs/get-details?track_id=${songid}`}),
        
        }),
    });

    export const{
      useGetTopChartsQuery,
      useGetSongDetailsQuery,
    } = shazamCoreApi;