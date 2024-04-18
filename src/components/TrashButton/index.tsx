import React from "react";
import trash from "../../assets/trash.svg";

type Props = {
  onClick: () => void;
  className?: string;
};

const TrashButton: React.FC<Props> = ({ onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      <img src={trash} alt="lixeira" />
    </button>
  );
};

export default TrashButton;
