import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

type CartContextType = {
  movies: Cart.Movie[];
  moviesCount: number;
  totalValue: number;
  addMovie: (movie: WeFitMovies.Movie) => void;
  removeMovie: (movieId: number) => void;
  changeMovieQuantity: (movieId: number, newQuantity: number) => void;
  getMovieQuantityById: (movieId: number) => number;
  clear: () => void;
};

export const CartContext = createContext({} as CartContextType);

const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const localStorageValues = {
    movies: JSON.parse(localStorage.getItem("cart") || "[]"),
    moviesCount: Number(localStorage.getItem("cartCount") || "0"),
  };

  const [movies, setMovies] = useState<Cart.Movie[]>(
    localStorageValues.movies || []
  );
  const [moviesCount, setMoviesCount] = useState<number>(
    localStorageValues.moviesCount ?? 0
  );

  const totalValue = useMemo(() => {
    if (movies.length > 0)
      return movies
        .map(({ price, quantity }) => price * quantity)
        .reduce((previous, current) => previous + current);

    return 0;
  }, [movies]);

  const addMovie = useCallback((movie: WeFitMovies.Movie) => {
    setMovies((state) => {
      const movieIdInChart = state.findIndex(({ id }) => movie.id === id);

      if (movieIdInChart < 0) return [...state, { ...movie, quantity: 1 }];

      state[movieIdInChart].quantity += 1;

      return [...state];
    });

    setMoviesCount((state) => state + 1);
  }, []);

  const removeMovie = useCallback(
    (movieId: number) =>
      setMovies((state) => state.filter(({ id }) => movieId !== id)),
    []
  );

  const changeMovieQuantity = useCallback(
    (movieId: number, newQuantity: number) => {
      setMovies((state) => {
        const movieIdInChart = state.findIndex(({ id }) => movieId === id);

        const diff = newQuantity - state[movieIdInChart].quantity;

        if (movieIdInChart >= 0) state[movieIdInChart].quantity = newQuantity;

        setMoviesCount((state) => state + diff);

        return [...state];
      });
    },
    []
  );

  const getMovieQuantityById = useCallback(
    (movieId: number) => {
      const targetMovie = movies.find(({ id }) => id === movieId);

      return targetMovie ? targetMovie.quantity : 0;
    },
    [movies]
  );

  const clear = useCallback(() => {
    setMovies([]);
    setMoviesCount(0);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(movies));
  }, [movies]);

  useEffect(() => {
    localStorage.setItem("cartCount", String(moviesCount));
  }, [moviesCount]);

  return (
    <CartContext.Provider
      value={{
        movies,
        moviesCount,
        totalValue,
        addMovie,
        removeMovie,
        changeMovieQuantity,
        getMovieQuantityById,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
