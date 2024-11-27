import Layout from "../layout/Layout";
import SignUP from "../auth/SignUp";
import Login from "../auth/Login"
import PopularMovies from "../components/PopularMovies";
import UpcomingMovies from "../components/UpcomingMovies";
import NowPlayingMovies from "../components/NowPlayingMovies";


const ROUTES = [
    {
        path: '/signup',
        element: <SignUP/>
    },
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/movie',
        element: <Layout/>,
        children: [
            {
                path: "/movie/popular",
                element: <PopularMovies/>
            },
            {
                path: "/movie/upcoming",
                element: <UpcomingMovies/>
            },
            {
                path: "/movie/nowPlaying",
                element: <NowPlayingMovies/>
            }
        ]
    }
]

export default ROUTES;