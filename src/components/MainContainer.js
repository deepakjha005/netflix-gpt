import { useSelector } from "react-redux";
import useNowPlayingHook from "../hooks/useNowPlayingHook";
import HomeTrailer from "./HomeTrailer";
import HomeTrailerVideoDescription from "./HomeTrailerVideoDescription";

const MainContainer = () => {
  const movieList = useSelector((store) => store.movies?.nowPlayingMoviesList);
  console.log(movieList, "called");
  useNowPlayingHook();
  if (!movieList) return;
  return (
    <div>
      <HomeTrailer movieId={movieList[0]?.id} />
      <HomeTrailerVideoDescription
        title={movieList[0]?.original_title}
        overview={movieList[0]?.overview}
      />
    </div>
  );
};
export default MainContainer;
