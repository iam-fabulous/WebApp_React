import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const BASEURL = import.meta.env.VITE_APP_BASE_URL;
const APIKEY = import.meta.env.VITE_APP_API_KEY;

export const movieApi = createApi({
    reducePath: "movieApi",
    baseQuery : fetchBaseQuery({baseUrl: `${BASEURL}`}),
    endpoints:(builder)=>({
        getPopularMovies: builder.query({
            query:()=>(`/movie/popular?api_key=${APIKEY}`)
        }),
        getUpcomingMovies: builder.query({
            query:()=>(`/movie/upcoming?api_key=${APIKEY}`)
        }),
        getNowPlayingMovies: builder.query({
            query:()=>(`/movie/now_playing?api_key=${APIKEY}`)
        }),
        getTopRatedMovies: builder.query({
            query:()=>(`/movie/top_rated?api_key=${APIKEY}`)
        }),        
         
    }),
    
});

// `use${GetPopularMovies}Mutation`

export const {
  useGetPopularMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetTopRatedMoviesQuery,
  useNowPlayingMoviesQuery,
} = movieApi;

