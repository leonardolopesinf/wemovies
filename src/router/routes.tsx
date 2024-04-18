import { Navigate, RouteObject } from "react-router-dom";
import rootRoutes from "./routes/root";

const routes: RouteObject[] = [
  rootRoutes,
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

export default routes;
