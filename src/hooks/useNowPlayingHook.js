import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constants/Endpoint";
import { setNowPlayingMoviesList } from "../redux/moviesListSlice";

const useNowPlayingHook = () => {
  const movieList = useSelector((store) => store.movies?.nowPlayingMoviesList);
  const dispatch = useDispatch();
  const fetchNowPlayingMovies = async () => {
    try {
      const moviesList = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await moviesList.json();
      dispatch(setNowPlayingMoviesList(json?.results));
    } catch (error) {}
  };

  useEffect(() => {
    !movieList && fetchNowPlayingMovies();
  }, []);

  return {
    movieList,
  };
};
export default useNowPlayingHook;
