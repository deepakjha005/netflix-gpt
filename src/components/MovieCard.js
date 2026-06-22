const MovieCard = ({ movieData, title }) => {
  console.log(movieData, "movie data");
  return (
    <div className="px-6 bg-black">
      <h1 className="font-extrabold text-xl  text-white pt-10 pb-3  ">
        {title}
      </h1>
      <div className="flex gap-4 scrollbar-hide overflow-x-auto bg-gradient-to-t bg-transparent">
        {movieData &&
          movieData?.map((item) => (
            <div key={item?.key} className="flex-shrink-0">
              <img
                src={`https://image.tmdb.org/t/p/original//${item?.poster_path}`}
                alt="logo"
                className="w-[200px] h-[200px] rounded-md"
              />
            </div>
          ))}
      </div>
    </div>
  );
};
export default MovieCard;
