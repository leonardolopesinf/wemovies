declare namespace Cart {
  type Movie = WeFitMovies.Movie & {
    quantity: number;
  };
}
