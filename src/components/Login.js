import useLoginHook from "../redux/useLogin";
import { lang } from "../utils/language";

const Login = () => {
  const {
    error,
    nameRef,
    handleAuth,
    isSignIn,
    emailRef,
    passwordRef,
    setIsSignIn,
    language,
  } = useLoginHook();

  return (
    <div className="w-56 md:w-1/4  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 rounded-xl px-4 md:px-0 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
          {isSignIn
            ? lang?.[language].headingLoginForm
            : lang?.[language].authHeadingSignUp}
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleAuth} className="space-y-6">
          {!isSignIn && (
            <div>
              <label className="block text-sm/6 font-medium text-gray-100">
                {lang?.[language].fullName}
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
              {lang?.[language].email}
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
                {lang?.[language].password}
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
              {isSignIn
                ? lang?.[language].signInButtonLabel
                : lang?.[language].signUp}
            </button>
          </div>
        </form>

        <p className="mt-3 text-sm/6 text-red-500 text-center flex justify-start mb-3">
          {error}
        </p>

        <div className="mt-6 text-sm/6 text-gray-400 text-center flex justify-start mb-3">
          {isSignIn
            ? lang?.[language].footerText
            : lang?.[language].alreadyMember}
          <div
            className="text-white ml-2 cursor-pointer "
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn
              ? lang?.[language].signUp
              : lang?.[language].signInButtonLabel}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
