import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { NETFLIX_BG_IMAGE_URL } from "../constants/Endpoint";
import { setUserInfo } from "../redux/userInfoSlice";
import { auth } from "../utils/firebase";
import { validateInputFields } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
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
  return (
    <div className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 rounded-xl ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
          {isSignIn ? "Sign in " : "Sign up "}to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleAuth} className="space-y-6">
          {!isSignIn && (
            <div>
              <label className="block text-sm/6 font-medium text-gray-100">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  ref={nameRef}
                  id="name"
                  type="name"
                  name="name"
                  className="block w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm/6 font-medium text-gray-100">
              Email address
            </label>
            <div className="mt-2">
              <input
                ref={emailRef}
                id="email"
                type="email"
                name="email"
                className="block w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm/6 font-medium text-gray-100">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                ref={passwordRef}
                id="password"
                type="password"
                name="password"
                className="block w-full rounded-md  px-3 py-1.5 text-base outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-800 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {isSignIn ? "Sign in" : "Sign up"}
            </button>
          </div>
        </form>

        <p className="mt-3 text-sm/6 text-red-500 text-center flex justify-start mb-3">
          {error}
        </p>

        <div className="mt-6 text-sm/6 text-gray-400 text-center flex justify-start mb-3">
          {isSignIn ? "Not a member?" : "Already a member?"}
          <div
            className="text-white ml-2 cursor-pointer "
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn ? "Sign up" : "Sign in"}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
