import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants/Endpoint";
import { setMovieTrailer } from "../redux/moviesListSlice";

const useTrailerHook = (movieId) => {
  const dispatch = useDispatch();
  const fetchMovieTrailer = async () => {
    const movieTrailer = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await movieTrailer.json();
    const filterData = json?.results?.filter((key) => key?.type === "Trailer");

    dispatch(setMovieTrailer(filterData[0]));
  };

  useEffect(() => {
    fetchMovieTrailer();
  }, []);
};
export default useTrailerHook;
