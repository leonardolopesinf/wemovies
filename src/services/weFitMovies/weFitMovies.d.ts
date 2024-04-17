declare namespace WeFitMovies {
  type Movie = {
    id: number;
    image: string;
    price: number;
    title: string;
  };

  declare namespace Get {
    type Response = {
      products: Movies[];
    };
  }
}
