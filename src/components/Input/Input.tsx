
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
        className="border-b-2 border-gray-300"
      />
    </>
  );
};
