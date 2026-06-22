import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleGptSearch } from "../redux/gptSearchSlice";
import { removeUserInfo } from "../redux/userInfoSlice";
import { auth } from "../utils/firebase";

const useHeaderHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const language = useSelector((store) => store.language?.lang);
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);
  const handleSignOut = () => {
    dispatch(removeUserInfo());
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/browse");
      } else {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGPTSearch = () => {
    dispatch(toggleGptSearch());
  };

  return { language, dispatch, handleGPTSearch, showGptSearch, handleSignOut };
};
export default useHeaderHook;
