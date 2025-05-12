import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Oproducts from "./components/Oproducts/Oproducts.jsx";
import Home from "./components/Home/Home.jsx";

const router = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "/products", element: <Oproducts/>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)

// createRoot(document.getElementById("root")).render(<App />);
