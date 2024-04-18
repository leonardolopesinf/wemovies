import React, { ChangeEvent, useState } from "react";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import * as S from "./styles";

type Props = {
  value: number;
  onChange: (count: number) => void;
};

const CountInput: React.FC<Props> = ({ value, onChange }) => {
  const [count, setCount] = useState<string>(String(value));

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setCount(newValue);

    if (!newValue) return;

    onChange(Number(newValue));
  };

  const handleInputBlur = () => setCount(String(value));

  const handleButtonClick = (newValue: number) => {
    setCount(String(newValue));

    onChange(newValue);
  };

  return (
    <S.Container>
      <button onClick={() => handleButtonClick(value - 1)}>
        <img src={minus} alt="menos" />
      </button>
      <input
        type="text"
        value={count}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <button onClick={() => handleButtonClick(value + 1)}>
        <img src={plus} alt="mais" />
      </button>
    </S.Container>
  );
};

export default CountInput;
