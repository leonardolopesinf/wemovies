import React, { useContext } from "react";
import * as S from "./styles";
import formatPrice from "../../../utils/formatPrice";
import CountInput from "../../../components/CountInput/CountInput";
import { CartContext } from "../../../contexts/CartContext";

type Props = {
  movie: Cart.Movie;
};

const CartItem: React.FC<Props> = ({
  movie: { id, image, price, quantity, title },
}) => {
  const { removeMovie, changeMovieQuantity } = useContext(CartContext);

  const handleQuantityChange = (newValue: number) => {
    changeMovieQuantity(id, newValue);

    if (newValue === 0) removeMovie(id);
  };

  return (
    <S.Container>
      <S.Product>
        <img className="product-image" src={image} alt={title} />
        <S.ProductInfo>
          <span className="product-title">{title}</span>
          <span className="product-price">{formatPrice(price)}</span>
          <S.ProductInfoTrash onClick={() => handleQuantityChange(0)} />
        </S.ProductInfo>
      </S.Product>
      <S.CalcContainer>
        <CountInput value={quantity} onChange={handleQuantityChange} />
        <S.SubtotalContainer>
          <span className="subtitle-label">SUBTOTAL</span>
          <S.Subtotal>{formatPrice(price * quantity)}</S.Subtotal>
        </S.SubtotalContainer>
      </S.CalcContainer>
      <S.Trash onClick={() => handleQuantityChange(0)} />
    </S.Container>
  );
};

export default CartItem;
