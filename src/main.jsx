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
import DesignSkeleton from "./components/DesignSkeleton.jsx";
import EmptyPage from "./pages/EmptyPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index Component={App} />

      <Route path="signup" Component={SignUpPage} />

      <Route path="/" Component={DesignSkeleton}>
        <Route path="dashboard" Component={DashboardPage} />
        <Route path="*" Component={EmptyPage} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
