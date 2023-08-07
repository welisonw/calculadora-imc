
type Props = {
  type: string,
  value: string,
  onChange: (e: any) => void;
}

export const Input = ({ type, value, onChange } : Props) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
