import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css';
import Layout from './Component/Layout';
import Home from './Component/Container/Home';
import Quote from './Component/Container/Quote';
import Resturants from './Component/Container/Resturants';
import Food from './Component/Container/Food';
import Contact from './Component/Container/Contact';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{
        path: "/",
        element: <Home />
      },
      {
        path: "/Quote",
        element: <Quote />
      },
      {
        path: "/Resturants",
        element: <Resturants />
      },
      {
        path: "/Food",
        element: <Food />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
    }
  ])
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  );
}
export default App;
