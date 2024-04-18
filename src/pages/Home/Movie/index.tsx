import React, { useContext } from "react";
import addCart from "../../../assets/add-cart.svg";
import * as S from "./styles";
import Button from "../../../components/Button";
import { CartContext } from "../../../contexts/CartContext";
import formatPrice from "../../../utils/formatPrice";

type Props = {
  movie: WeFitMovies.Movie;
};

const Movie: React.FC<Props> = ({ movie }) => {
  const { id, image, price, title } = movie;

  const { addMovie, getMovieQuantityById } = useContext(CartContext);

  const quantityInCart = getMovieQuantityById(id);

  const handleButtonClick = () => addMovie(movie);

  return (
    <li>
      <S.Container>
        <img src={image} alt={title} />
        <span className="movie-title">{title}</span>
        <span className="movie-price">{formatPrice(price)}</span>
        <Button
          onClick={handleButtonClick}
          type={quantityInCart ? "success" : "primary"}
        >
          <S.CartQuantityContainer>
            <img src={addCart} alt="carrinho" />
            <span>{quantityInCart}</span>
          </S.CartQuantityContainer>
          ADICIONAR AO CARRINHO
        </Button>
      </S.Container>
    </li>
  );
};

export default Movie;
