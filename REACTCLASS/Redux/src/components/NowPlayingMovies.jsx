import React from 'react';
import { useNowPlayingMoviesQuery } from '../service/movieApi'; 

const NowPlayingMovies = () => {

    const data = useNowPlayingMoviesQuery;
  return (
    <div>NowPlayingMovies</div>
  )
}

export default NowPlayingMovies