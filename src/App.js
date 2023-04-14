import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./screens/contact/Contact";
import Homepage from "./screens/homepage/Homepage";
import AdminPanel from "./screens/adminPanel/AdminPanel";
import Comp3 from "./screens/adminPanel/subScreens/Comp3";
import ManagePartners from "./screens/adminPanel/subScreens/ManagePartners";
import ManagePapers from "./screens/adminPanel/subScreens/ManagePapers";


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
    path: "/adminpanel/partner",
    element: <ManagePartners/>
  },
  {
    path: "/adminpanel/paper",
    element: <ManagePapers/>
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
