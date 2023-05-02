import React from "react";
import './button.css';

type ButtonProps = {
  value: string,
  type: "button" | "submit" | "reset" | undefined,
  btnClass?: string,
  action?: () => void
};
const index: React.FC<ButtonProps> = (props) => {
  const { value, type, btnClass, action } = props;

  return <button className={`button ${btnClass}`} type={type} onClick={action}>{value}</button>;
};

export default index;
