import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import { StrictMode } from "react";
import Menu from "./Pages/Menu.jsx";
import Store from "./Pages/Store.jsx";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/cart",
    element: <Store />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
