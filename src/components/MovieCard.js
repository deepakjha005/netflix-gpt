const MovieCard = ({ movieData, title }) => {
  return (
    <div className="px-6 bg-black">
      <h1 className="font-extrabold md:text-2xl  text-white pt-10 pb-4">
        {title}
      </h1>
      <div className="flex gap-4 scrollbar-hide overflow-x-auto bg-gradient-to-t bg-transparent ">
        {movieData &&
          movieData?.map((item) => (
            <div key={item?.key} className="flex-shrink-0">
              <img
                src={`https://image.tmdb.org/t/p/original//${item?.poster_path}`}
                alt="logo"
                className="md:w-[200px] md:h-[200px] rounded-md w-[150px] h-[150px]"
              />
            </div>
          ))}
      </div>
    </div>
  );
};
export default MovieCard;
