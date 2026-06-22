import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { NETFLIX_BG_IMAGE_URL } from "../constants/Endpoint";
import { auth } from "../utils/firebase";
import { validateInputFields } from "../utils/validate";
import { setUserInfo, setUserLogin } from "./userInfoSlice";

const useLoginHook = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const language = useSelector((store) => store.language?.lang);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleAuth = (e) => {
    e.preventDefault();
    const validationError = validateInputFields(
      emailRef.current.value,
      passwordRef.current.value
    );
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    handleSignInSignUp();
  };
  const handleSignInSignUp = () => {
    // Sign Up
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfileForUser(user);
          dispatch(setUserLogin());
          toast.success("sign up successful!");
          setIsSignIn(!isSignIn);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
      return;
    }
    // sign in
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(() => {
        // Signed in
        dispatch(setUserLogin());
        toast.success("Login successful!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode + "-" + errorMessage);
      });
  };

  const updateProfileForUser = (user) => {
    updateProfile(user, {
      displayName: nameRef.current.value,
      photoURL: NETFLIX_BG_IMAGE_URL,
    })
      .then(() => {
        dispatch(
          setUserInfo({
            name: auth.currentUser.displayName,
            photoURL: auth.currentUser.photoURL,
          })
        );
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return {
    error,
    nameRef,
    handleAuth,
    isSignIn,
    emailRef,
    passwordRef,
    setIsSignIn,
    language,
  };
};
export default useLoginHook;
