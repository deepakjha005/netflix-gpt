import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const HomeScreen = () => {
  return (
    <div className="bg-gray-300 h-screen">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};
export default HomeScreen;
