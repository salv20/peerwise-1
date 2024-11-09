import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index Component={App} />
      <Route path="signup" Component={SignUpPage} />
      <Route path="dashboard" Component={DashboardPage} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />
  </StrictMode>
);
