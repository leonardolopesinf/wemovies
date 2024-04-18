import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 11px;

  input {
    width: 62px;
    height: 26px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.borders.grey};
    background-color: ${({ theme }) => theme.backgrounds.light};
    font-size: 14px;
    line-height: 19.07px;
    text-align: center;
    color: ${({ theme }) => theme.input.color};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
