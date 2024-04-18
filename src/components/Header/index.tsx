import React, { useContext } from "react";
import cart from "../../assets/cart.svg";
import * as S from "./styles";
import { CartContext } from "../../contexts/CartContext";

const Header: React.FC = () => {
  const { moviesCount } = useContext(CartContext);

  return (
    <S.Container>
      <S.LogoContainer to="/">
        <h1>WeMovies</h1>
      </S.LogoContainer>
      <S.Cart to="/cart">
        <S.LabelContainer>
          <span className="cart-title">Meu Carrinho</span>
          <span className="cart-label">
            {moviesCount} ite{moviesCount === 1 ? "m" : "ns"}
          </span>
        </S.LabelContainer>
        <img src={cart} alt="carrinho" />
      </S.Cart>
    </S.Container>
  );
};

export default Header;
