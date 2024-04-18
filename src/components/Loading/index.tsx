import React from "react";
import spinner from "../../assets/loading.svg";
import * as S from "./styles";

const Loading: React.FC = () => {
  return (
    <S.Container>
      <img src={spinner} alt="loading" />
    </S.Container>
  );
};

export default Loading;
