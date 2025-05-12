import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Oproducts from "./components/Oproducts/Oproducts.jsx";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <Oproducts /> },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
