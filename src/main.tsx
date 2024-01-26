import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Root from "./routes/Root";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Weather from "./routes/Weather";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Login /> },
      { path: "home", element: <Home /> },
      { path: "weather", element: <Weather /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: "http://localhost:5173/",
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
