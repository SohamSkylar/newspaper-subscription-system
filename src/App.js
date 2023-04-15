import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./screens/contact/Contact";
import Homepage from "./screens/homepage/Homepage";
import AdminPanel from "./screens/adminPanel/AdminPanel";
import ManagePartners from "./screens/adminPanel/subScreens/ManagePartners";
import ManagePapers from "./screens/adminPanel/subScreens/ManagePapers";
import ManageSubscription from "./screens/adminPanel/subScreens/ManageSubscription";


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
    path: "/adminpanel/subscription",
    element: <ManageSubscription/>
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
