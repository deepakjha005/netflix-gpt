import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constants/Endpoint";
import {
  setPopularMovies,
  setTopRatedMovies,
  setUpcomingMovies,
} from "../redux/moviesListSlice";

const useMovieListCardHook = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((store) => store.movies?.nowPlayingMoviesList);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upComingMovies = useSelector((store) => store.movies?.upcomingMovies);

  const fetchMovies = async (category, action) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
        API_OPTIONS
      );

      const json = await response.json();
      dispatch(action(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !popularMovies && fetchMovies("popular", setPopularMovies);
    !topRatedMovies && fetchMovies("top_rated", setTopRatedMovies);
    !upComingMovies && fetchMovies("upcoming", setUpcomingMovies);
  }, []);

  return { nowPlaying, popularMovies, upComingMovies, topRatedMovies };
};
export default useMovieListCardHook;
