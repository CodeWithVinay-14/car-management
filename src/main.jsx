import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/Routes.jsx"; // Make sure path is correct
import "./index.css";

const router = createBrowserRouter(routes, {
  basename: "/car-management",

  
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}> 
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
