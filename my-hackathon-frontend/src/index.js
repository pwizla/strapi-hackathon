import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import RegisterPeople from "./pages/RegisterPeople";
import RegisterTeam from "./pages/RegisterTeam";
import RegisterSuccess from "./pages/RegisterSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register-step-1",
    element: <RegisterPeople />,
  },
  {
    path: "/register-step-2",
    element: <RegisterTeam />,
  },
  {
    path: "/register-success",
    element: <RegisterSuccess />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);