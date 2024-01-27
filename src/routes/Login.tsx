import { FaGithub } from "react-icons/fa";

import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithPopup } = useAuth0();
  return (
    <div className="container mx-auto flex flex-col flex-1 justify-center items-center space-y-4">
      <p className="px-8 sm:px-64 text-3xl font-yeseva">
        Welcome to the Weather Forecast web application. Please login with your
        Github user to use the application and view the weather in your city.
      </p>
      <button
        className="rounded-md bg-slate-200 px-8 py-4 text-xl flex space-x-2 justify-center items-center"
        onClick={() => loginWithPopup()}
      >
        <FaGithub /> <p>Continue with Github</p>
      </button>
    </div>
  );
};

export default Login;
