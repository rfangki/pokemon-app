import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../home";
import Detail from "../detail";
import Mypokemon from "../mypokemon";
import Battle from "../battle";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/detail/:status/:pokeId",
      element: <Detail />,
    },
    {
      path: "/mypokemon",
      element: <Mypokemon />,
    },
    {
      path: "/battle",
      element: <Battle />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
