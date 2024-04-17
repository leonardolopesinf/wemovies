import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import PurchaseCompleted from "../pages/PurchaseCompleted";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    errorElement: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/purchase-completed",
    element: <PurchaseCompleted />,
  },
];

export default routes;
