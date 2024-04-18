import React from "react";
import image from "../../assets/error-img.svg";
import MessageBox from "../MessageBox";

type Props = {
  redirectToHome?: boolean;
};

const ErrorElement: React.FC<Props> = ({ redirectToHome }) => {
  return (
    <MessageBox
      route={redirectToHome ? "/" : 0}
      image={image}
      message="Parece que não há nada por aqui :("
      buttonMessage={redirectToHome ? "Voltar" : "Recarregar página"}
      divider
    />
  );
};

export default ErrorElement;
