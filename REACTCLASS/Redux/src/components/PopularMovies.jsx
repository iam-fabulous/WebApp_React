import React from 'react'
import { useGetPopularMoviesQuery } from '../service/movieApi'

const PopularMovies = () => {

    const data = useGetPopularMoviesQuery();
    console.log(data);
  return (
    <div>PopularMovies</div>
  )
}

export default PopularMovies