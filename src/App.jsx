import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layouts from "./Layouts/Layouts"
import Home from "./Pages/Home/Home"
import Realestate from "./Pages/Realestate/Realestate"
import Faq from "./Pages/Faq/Faq"
import Agents from "./Pages/Agents/Agents"
import Contact from "./Pages/Contact/Contact"
import Profile from "./Pages/Profile/Profile"
import NotFound from "./Pages/NotFound/NotFound"
import AgentDetails from './Pages/AgentDetails/AgentDetails';
import RealestateDetails from './Pages/RealestateDetails/RealestateDetails';
import { ToastContainer } from 'react-toastify';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      children: [
        { path: "/", element: <Home/> },
        { path: "/Realestate", element: <Realestate/> },
        { path: "/Realestate/:id", element: <RealestateDetails/> },
        { path: "/faq", element: <Faq/> },
        { path: "/agent", element: <Agents/> },
        { path: "/agent/:id", element: <AgentDetails/> },
        { path: "/contact", element: <Contact/> },
        { path: "/profile", element: <Profile/> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
    <ToastContainer />
    <RouterProvider router={router} />
    </>
  )
}

export default App

