import styled from "styled-components";
import { md } from "../../../styles/breakpoints";
import TrashButton from "../../../components/TrashButton";

export const Container = styled.div`
  display: contents;

  @media (${md}) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
    padding-left: 82px;
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  .product-image {
    width: 91px;
    height: 114px;
  }

  @media (${md}) {
    display: contents;

    .product-image {
      position: absolute;
      width: 64px;
      height: 82px;
      left: 0;
    }
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray} !important;
  }

  .product-title {
    font-size: 14px;
    line-height: 19.07px;
  }

  .product-price {
    font-size: 16px;
    line-height: 21.79px;
  }

  @media (${md}) {
    flex-direction: row;
    align-items: center;
    gap: 16px;
    height: calc(2 * 19.07px);
    position: relative;

    .product-title {
      margin-right: auto;
    }

    .product-price {
      min-width: 70px;
      text-align: right;
    }
  }
`;

export const ProductInfoTrash = styled(TrashButton)`
  display: none;

  @media (${md}) {
    display: flex;
  }
`;

export const CalcContainer = styled.div`
  display: contents;

  @media (${md}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const SubtotalContainer = styled.div`
  display: contents;

  .subtitle-label {
    display: none;
  }

  @media (${md}) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .subtitle-label {
      display: flex;
      align-self: flex-end;
      font-weight: 700;
      font-size: 12px;
      line-height: 16.34px;
    }
  }
`;

export const Subtotal = styled.span`
  margin: auto 0;
  color: ${({ theme }) => theme.colors.gray} !important;

  @media (${md}) {
    font-size: 16px !important;
    line-height: 21.79px !important;
  }
`;

export const Trash = styled(TrashButton)`
  margin: auto 0;

  @media (${md}) {
    display: none;
  }
`;
