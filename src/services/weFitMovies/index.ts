import axios from "axios";

export const weFitMoviesUrl = "https://wefit-movies.vercel.app/api/movies";

const weFitMovies = axios.create({
  baseURL: "https://wefit-movies.vercel.app/api",
});

export const getWeFitMovies = async () => {
  try {
    const movies: WeFitMovies.Get.Response = (await weFitMovies.get("/movies"))
      .data;

    return movies.products;
  } catch {
    const errorMessage = "Parece que não há nada por aqui :(";

    throw new Error(errorMessage);
  }
};
