import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div>Navbar</div>
      <Outlet />
    </div>
  );
};

export default Root;
