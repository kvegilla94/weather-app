const Login = () => {
  return (
    <div className="container mx-auto flex flex-col flex-1 justify-center items-center space-y-4">
      <p className="px-64 text-3xl font-yeseva">
        Welcome to the weather forecast web application. Please login with your
        Github user to use the application and view the weather in your city.
      </p>
      <button className="rounded-md bg-slate-200 px-8 py-4 text-xl">
        Login using Github
      </button>
    </div>
  );
};

export default Login;
