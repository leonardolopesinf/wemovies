import { RouteObject, defer } from "react-router-dom";
import Home from "../../pages/Home";
import { getWeFitMovies } from "../../services/weFitMovies";
import ErrorElement from "../../components/ErrorElement";

export type HomeLoaderData = {
  movies: WeFitMovies.Movie[];
  searchQuery: string;
};

const homeLoader = async () => {
  const moviesPromise = getWeFitMovies();

  return defer({ movies: moviesPromise });
};

const homeSearchLoader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get("search-query");

  const moviesPromise = getWeFitMovies();

  return defer({ movies: moviesPromise, searchQuery });
};

export const homeRoutes: RouteObject = {
  path: "/",
  element: <Home />,
  errorElement: <ErrorElement />,
  loader: homeLoader,
};

export const homeSearchRoutes: RouteObject = {
  ...homeRoutes,
  path: "/search",
  loader: homeSearchLoader,
};
