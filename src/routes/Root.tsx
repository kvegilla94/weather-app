import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Root = () => {
  const { isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();
  useEffect(() => {
    isAuthenticated ? navigate("home") : navigate("/");
  }, [isAuthenticated]);

  return (
    <div className="text-[#313131] flex flex-col min-h-screen">
      <div className="px-16 py-4 bg-sky-500 flex justify-between items-center">
        <p className="text-2xl font-yeseva text-white">Weather Forecast</p>
        {isAuthenticated ? (
          <button
            className="bg-sky-500 text-white rounded-md px-6 py-1 hover:bg-sky-600"
            onClick={() => logout()}
          >
            Logout
          </button>
        ) : null}
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
