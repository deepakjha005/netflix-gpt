import Header from "./components/Header";
import Login from "./components/Login";
import { NETFLIX_BG_IMAGE_URL } from "./constants/Endpoint";

const App = () => {
  return (
    <div className="relative">
      <img
        src={NETFLIX_BG_IMAGE_URL}
        alt="background"
        className="h-screen w-screen"
      />
      <div className=" absolute inset-0 bg-black/50" />
      <Header />
      <Login />
    </div>
  );
};

export default App;
