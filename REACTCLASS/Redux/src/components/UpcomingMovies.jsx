import React from 'react'
import { useGetUpcomingMoviesQuery } from '../service/movieApi'

const UpcomingMovies = () => {


    const data = useGetUpcomingMoviesQuery();

  return (
    <div>UpcomingMovies</div>
  )
}

export default UpcomingMovies