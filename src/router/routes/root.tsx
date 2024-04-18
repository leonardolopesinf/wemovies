import { RouteObject } from "react-router-dom";
import { homeRoutes, homeSearchRoutes } from "./home";
import cartRoutes from "./cart";
import purchaseCompletedRoutes from "./purchaseCompleted";
import Root from "../../pages/Root";

const rootRoutes: RouteObject = {
  path: "/",
  element: <Root />,
  children: [homeRoutes, homeSearchRoutes, cartRoutes, purchaseCompletedRoutes],
};

export default rootRoutes;
