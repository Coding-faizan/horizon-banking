interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-primary w-full text-white font-semibold text-base py-2.5 rounded-lg">
      {children}
    </button>
  );
};
