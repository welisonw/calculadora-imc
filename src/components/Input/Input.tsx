
import { ChangeEvent } from "react";

type Props = {
  type: string,
  value: number | string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string,
  className?: string,
}

export const Input = ({ type, value, onChange, placeholder, className  } : Props) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
      />
    </>
  );
};
