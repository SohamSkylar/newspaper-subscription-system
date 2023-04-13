import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./screens/contact/Contact";
import Homepage from "./screens/homepage/Homepage";
import AdminPanel from "./screens/adminPanel/AdminPanel";
import Comp1 from "./screens/adminPanel/subScreens/Comp1";
import Comp2 from "./screens/adminPanel/subScreens/Comp2";
import Comp3 from "./screens/adminPanel/subScreens/Comp3";


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
    path: "/adminpanel/",
    element: <AdminPanel/>
  },
  {
    path: "/adminpanel/first",
    element: <Comp1/>
  },
  {
    path: "/adminpanel/second",
    element: <Comp2/>
  },
  {
    path: "/adminpanel/third",
    element: <Comp3/>
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
