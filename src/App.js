import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./screens/contact/Contact";
import Homepage from "./screens/homepage/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/contact",
    element: <Contact/>
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
