interface InputProps {
  placeholder?: string;
}

export const Input = ({ placeholder }: InputProps) => {
  return (
    <input
      className="input-border px-3.5 py-2.5 rounded-lg"
      placeholder={placeholder}
    />
  );
};
