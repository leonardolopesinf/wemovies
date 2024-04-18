import { darken } from "polished";
import styled from "styled-components";

type ButtonProps = {
  type?: "primary" | "success";
};

const Button = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 4px;
  padding: 8px;
  gap: 12px;
  border: none;
  font-weight: 700;
  font-size: 12px;
  line-height: 16.34px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ type, theme }) =>
    type === "success" ? theme.backgrounds.green : theme.backgrounds.blue};

  cursor: pointer;

  &:hover {
    background-color: ${({ type, theme }) =>
      darken(
        0.05,
        type === "success" ? theme.backgrounds.green : theme.backgrounds.blue
      )};
  }
`;

export default Button;
