import useMovieListCardHook from "../hooks/useMovieListCardHook";
import MovieCard from "./MovieCard";

const SecondaryContainer = () => {
  const { nowPlaying, popularMovies, topRatedMovies, upComingMovies } =
    useMovieListCardHook();

  if (!nowPlaying || !popularMovies || !topRatedMovies || !upComingMovies)
    return;

  return (
    <div className=" absolute md:bottom-0 left-0 right-0 h-40 bottom-20">
      <MovieCard movieData={nowPlaying} title="Now Playing" />
      <MovieCard movieData={popularMovies} title="Popular" />
      <MovieCard movieData={topRatedMovies} title="Top Rated" />
      <MovieCard movieData={upComingMovies} title="UpComing" />
    </div>
  );
};
export default SecondaryContainer;
