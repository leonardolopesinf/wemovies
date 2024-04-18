import styled from "styled-components";
import { md } from "../../styles/breakpoints";
import { Link } from "react-router-dom";

export const Container = styled.header`
  height: 88px;
  display: flex;
  justify-content: space-between;
  padding: 24px 16px;
`;

export const LogoContainer = styled(Link)`
  align-self: center;

  h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 27.24px;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  height: 40px;

  img {
    margin: 8px;
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;

  .cart-title {
    font-weight: 600;
    font-size: 14px;
    line-height: 19.07px;

    @media (${md}) {
      display: none;
    }
  }

  .cart-label {
    align-self: flex-end;
    font-weight: 600;
    font-size: 12px;
    line-height: 16.34px;
    color: ${({ theme }) => theme.colors.grey};
  }
`;
