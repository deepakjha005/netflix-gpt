import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetStore } from "../utils/store";
import GptSearchScreen from "./GptSearchScreen";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);
  useEffect(() => {
    return () => dispatch(resetStore());
  }, []);
  return (
    <div className="bg-gray-300 h-screen">
      <Header />
      {showGptSearch ? (
        <GptSearchScreen />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default HomeScreen;
