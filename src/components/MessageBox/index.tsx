import React from "react";
import * as S from "./styles";
import { To, useNavigate } from "react-router-dom";
import Button from "../Button";

type Props = {
  route: string | number;
  message: string;
  buttonMessage: string;
  image: string;
  divider?: boolean;
};

const MessageBox: React.FC<Props> = ({
  route,
  message,
  buttonMessage,
  image,
  divider,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => navigate(route as To);

  return (
    <S.Container>
      <span>{message}</span>
      <div className={`image-container ${divider ? "border-bottom" : ""}`}>
        <img src={image} alt="erro" />
      </div>
      <Button onClick={handleButtonClick}>{buttonMessage}</Button>
    </S.Container>
  );
};

export default MessageBox;
