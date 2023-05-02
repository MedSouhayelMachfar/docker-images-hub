import React, { useState, useRef } from "react";
import "./input.css";

type inputProps = {
  label: string;
  type: string;
};
const index: React.FC<inputProps> = (props) => {
  const { label, type } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [moveLabel, setMoveLavel] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
  };

  const handleBlur = () => {
    if (inputValue.length === 0) setMoveLavel(false);
    else setMoveLavel(true);
  };

  return (
    <div className="input-group">
      <label htmlFor={label} className={moveLabel ? "move" : ""}>
        {label}
      </label>
      <input
        ref={inputRef}
        type={type}
        id={label}
        onFocus={() => setMoveLavel(true)}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </div>
  );
};

export default index;
