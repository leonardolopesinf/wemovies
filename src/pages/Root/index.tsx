import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import * as S from "./styles";

const Root: React.FC = () => {
  return (
    <>
      <Header />
      <S.Main>
        <Outlet />
      </S.Main>
    </>
  );
};

export default Root;
