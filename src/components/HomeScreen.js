import { useSelector } from "react-redux";

const HomeScreen = () => {
  const userInfo = useSelector((store) => store.user);
  console.log(userInfo, "homescreen");

  return (
    <div className="flex justify-between">
      <div>{userInfo?.name}</div>
      <img src={userInfo?.photoUrl} alt="user-logo" />
    </div>
  );
};
export default HomeScreen;
