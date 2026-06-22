const HomeTrailerVideoDescription = ({ title, overview }) => {
  return (
    <div className="md:w-1/3 absolute md:top-1/3  text-white md:ml-20 top-1/2 px-3 md:px-0">
      <h1 className="md:font-extrabold md:text-7xl font-serif text-xl font-semibold">
        {title}
      </h1>
      <p className="mt-5 md:text-2xl hidden md:inline-block">{overview}</p>

      <div>
        <div className="flex mb-2 mt-5">
          <button className="bg-white text-black md:w-28 md:h-11 rounded-md font-extrabold w-20">
            ▶️ Play
          </button>
          <button className="bg-gray-400 text-white md:w-28 h-11 ml-3 rounded-md font-extrabold w-20">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
export default HomeTrailerVideoDescription;
