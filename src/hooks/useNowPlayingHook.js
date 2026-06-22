import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants/Endpoint";
import { setNowPlayingMoviesList } from "../redux/moviesListSlice";

const useNowPlayingHook = () => {
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
    fetchNowPlayingMovies();
  }, []);
};
export default useNowPlayingHook;
