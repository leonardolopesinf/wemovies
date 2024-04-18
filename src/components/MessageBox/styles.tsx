import styled from "styled-components";
import Box from "../Box";
import Button from "../Button";

export const Container = styled(Box)`
  flex: 1;
  padding: 64px;
  gap: 24px;

  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 27.24px;
    text-align: center;
    color: ${({ theme }) => theme.colors.black};
  }

  .image-container {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 447px;
  }

  .border-bottom {
    border-bottom: 1.36px solid ${({ theme }) => theme.borders.black};
  }

  ${Button} {
    width: 173px;
  }
`;
