import './assets/bootstrap.min.css';
import './assets/style.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing,Booking,Dashboard,Error } from "./pages";
import { NavigationLayout } from './components'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationLayout />, 
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <Error/>,
  },
])

export function App() {
  return <RouterProvider router={router} />;
}

export default App
