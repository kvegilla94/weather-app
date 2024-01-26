import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="text-[#313131] flex flex-col min-h-screen">
      <div className="px-8 py-4 bg-[#009BFA]">
        <p className="text-2xl font-yeseva text-white">Weather Forecast</p>
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
