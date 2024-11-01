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

import Signup from "./pages/Signup.jsx";
import ForgetPassword from "./pages/forgetpass.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index Component={App} />
      <Route path="signup" Component={Signup} />
      <Route path="forget" Component={ForgetPassword} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />
  </StrictMode>
);
