import { NETFLIX_BG_IMAGE_URL } from "../constants/Endpoint";

const GptSearchScreen = () => {
  return (
    <div className="w-screen h-screen">
      <img src={NETFLIX_BG_IMAGE_URL} alt="background" className="absolute" />
      <div className="flex justify-center h-screen mt-30">
        <div className="flex justify-center items-center w-1/2 h-32 bg-transparent absolute top-10">
          <input
            placeholder="what would you want to watch?"
            className="w-1/2 px-2 py-2 mr-4 rounded-md bg-gray-300 placeholder-black text-sm font-thin"
          />
          <button className="bg-red-400 py-2 px-2 rounded-lg">Search</button>
        </div>
      </div>
    </div>
  );
};
export default GptSearchScreen;
