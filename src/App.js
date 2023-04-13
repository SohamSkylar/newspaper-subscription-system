import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./screens/contact/Contact";
import Homepage from "./screens/homepage/Homepage";
import AdminPanel from "./screens/adminPanel/AdminPanel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/adminpanel",
    element: <AdminPanel/>
  }
]);



function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
