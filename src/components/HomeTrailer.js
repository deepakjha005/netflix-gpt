import { useSelector } from "react-redux";
import useTrailerHook from "../hooks/useTrailerHook";

const HomeTrailer = ({ movieId }) => {
  useTrailerHook(movieId);
  const trailerKey = useSelector((store) => store.movies?.movieTrailer);
  return (
    <div className="w-screen h-screen overflow-hidden">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${trailerKey?.key}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default HomeTrailer;
