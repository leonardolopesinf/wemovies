import React from "react";
import MessageBox from "../../components/MessageBox";
import image from "../../assets/purchase-img.svg";

const PurchaseCompleted: React.FC = () => {
  return (
    <MessageBox
      buttonMessage="VOLTAR"
      image={image}
      message="Compra realizada com sucesso!"
      route="/"
    />
  );
};

export default PurchaseCompleted;
