import styled from "styled-components";
import Box from "../../../components/Box";
import Button from "../../../components/Button";

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  padding: 16px;
  gap: 8px;

  img {
    width: 147px;
    height: 188px;
  }

  span {
    font-weight: 700;
    text-align: center;
  }

  .movie-title {
    font-size: 12px;
    line-height: 16.34px;
    color: ${({ theme }) => theme.colors.black};
  }

  .movie-price {
    font-size: 16px;
    line-height: 21.79px;
    color: ${({ theme }) => theme.colors.gray};
  }

  ${Button} {
    width: 100%;
  }
`;

export const CartQuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }

  span {
    font-size: 12px;
    line-height: 16.34px;
  }
`;
