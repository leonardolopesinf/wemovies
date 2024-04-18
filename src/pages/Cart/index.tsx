import React, { useContext } from "react";
import * as S from "./styles";
import CartItem from "./Item";
import { CartContext } from "../../contexts/CartContext";
import Button from "../../components/Button";
import formatPrice from "../../utils/formatPrice";
import { useNavigate } from "react-router-dom";
import ErrorElement from "../../components/ErrorElement";

const Cart: React.FC = () => {
  const { movies, totalValue, clear } = useContext(CartContext);
  const navigate = useNavigate();

  const cartIsEmpty = movies.length === 0;

  const handleClickButton = () => {
    navigate("/purchase-completed");
    clear();
  };

  return !cartIsEmpty ? (
    <S.Container>
      <S.Grid>
        <span className="grid-header">PRODUTO</span>
        <span className="grid-header">QTD</span>
        <span className="grid-header">SUBTOTAL</span>
        <div className="grid-header" />
        {movies.map((movie) => (
          <CartItem movie={movie} key={movie.id} />
        ))}
      </S.Grid>
      <div className="divider" />
      <S.Footer>
        <Button onClick={handleClickButton}>FINALIZAR PEDIDO</Button>
        <S.Total>
          <span className="total-label">TOTAL</span>
          <span className="total-value">{formatPrice(totalValue)}</span>
        </S.Total>
      </S.Footer>
    </S.Container>
  ) : (
    <ErrorElement redirectToHome />
  );
};

export default Cart;
