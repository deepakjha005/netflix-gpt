import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUserInfo } from "../redux/userInfoSlice";
import { auth } from "../utils/firebase";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    dispatch(removeUserInfo());
    navigate("/");
  };
  useEffect(() => {
    console.log("called");
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user, "user");
        const uid = user.uid;
        console.log(uid);
        navigate("/browse");
      } else {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="h-20 absolute top-0 flex justify-between w-full px-3">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <h1 className=" my-auto font-bold">Welcome Back {user?.name}</h1>
      <div className="flex justify-between bg-red-500 px-2 my-auto py-2 rounded-lg ">
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};
export default Header;
