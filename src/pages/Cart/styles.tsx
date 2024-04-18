import styled from "styled-components";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { lg, md } from "../../styles/breakpoints";

export const Container = styled(Box)`
  width: 100%;
  height: fit-content;
  padding: 24px;
  gap: 24px;

  .divider {
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.grey};
  }

  @media (${md}) {
    padding: 16px;
    gap: 21px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 280px repeat(2, 1fr) 24px;
  width: 100%;
  row-gap: 24px;

  span {
    font-weight: 700;
    font-size: 14px;
    line-height: 19.07px;
    color: ${({ theme }) => theme.colors.grey};
  }

  @media (${lg}) {
    grid-template-columns: 250px repeat(2, 1fr) 24px;
  }

  @media (${md}) {
    grid-template-columns: 1fr;
    .grid-header {
      display: none;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  ${Button} {
    width: 173px;
    height: 34px;
  }

  @media (${md}) {
    flex-direction: column-reverse;
    gap: 16px;

    ${Button} {
      width: 100%;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    text-align: center;
  }

  .total-label {
    width: 62px;
    font-size: 14px;
    line-height: 19.07px;
    color: ${({ theme }) => theme.colors.grey};
  }

  .total-value {
    width: 130px;
    font-size: 24px;
    line-height: 32.68px;
    color: ${({ theme }) => theme.colors.gray};
  }

  @media (${md}) {
    justify-content: space-between;
    width: 100%;

    .total-label {
      justify-content: flex-start;
    }

    .total-value {
      justify-content: flex-end;
    }
  }
`;
