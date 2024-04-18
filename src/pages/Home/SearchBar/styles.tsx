import { Form } from "react-router-dom";
import styled from "styled-components";

export const SearchBarForm = styled(Form)`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding-right: 16px;
  margin: 2px 0;
  gap: 16px;
  background-color: ${({ theme }) => theme.input.background};

  &:focus-within {
    margin: 0;
    border: 2px solid ${({ theme }) => theme.input.focusBorder};
  }

  input {
    display: flex;
    flex: 1;
    height: 56px;
    border-radius: 8px 0 0 8px;
    padding-left: 16px;
    font-size: 16px;
    line-height: 21.79px;
    color: ${({ theme }) => theme.input.color};
    border: none;
    background-color: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.input.placeholder};
    }

    &::-ms-clear {
      display: none;
      width: 0;
      height: 0;
    }

    &::-ms-reveal {
      display: none;
      width: 0;
      height: 0;
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }
  }
`;
