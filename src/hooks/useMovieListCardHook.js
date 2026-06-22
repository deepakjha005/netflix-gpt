import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants/Endpoint";
import {
  setPopularMovies,
  setTopRatedMovies,
  setUpcomingMovies,
} from "../redux/moviesListSlice";

const useMovieListCardHook = () => {
  const dispatch = useDispatch();

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
    fetchMovies("popular", setPopularMovies);
    fetchMovies("top_rated", setTopRatedMovies);
    fetchMovies("upcoming", setUpcomingMovies);
  }, []);
};
export default useMovieListCardHook;

// fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
// fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
// fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
