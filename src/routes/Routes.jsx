// routes/Routes.jsx
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Service from "../pages/Service.jsx";
import Gallery from "../pages/Gallery.jsx"; 
import Client from "../pages/Client.jsx";
import Contact from "../pages/Contact.jsx";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "service",
    element: <Service />,
  },
  {
    path: "gallery", // ✅ this matches /gallery
    element: <Gallery />,
  },
  {
    path: "client",
    element: <Client />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
];

export default routes;
