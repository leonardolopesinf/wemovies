import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.backgrounds.light};
`;

export default Box;
