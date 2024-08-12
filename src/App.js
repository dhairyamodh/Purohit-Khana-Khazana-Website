import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutus from "./Pages/Aboutus";
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import Home from "./Pages/Home";
import PickupMenu from "./Components/PickupMenu";
import RailwayMenu from "./Components/RailwayMenu";
import AdminDashboard from "./Components/AdminDashboard";
import PickupDashboard from "./Components/PickUpDashboard";
import RailwayDashboard from "./Components/RailwayDashboard";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/aboutus",
      element: <Aboutus />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },
    {
      path: "/pickup-menu",
      element: <PickupMenu />,
    },
    {
      path: "/railway-menu",
      element: <RailwayMenu />,
    },
    {
      path:"/purohit/admin",
      element:<AdminDashboard/>
    },
    {
      path:"/purohit/admin/pickup",
      element:<PickupDashboard/>
    },
    {
      path:"/purohit/admin/railway",
      element:<RailwayDashboard/>
    },
    {
      path:"/privacy-policy",
      element:<PrivacyPolicy/>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
