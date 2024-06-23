export const Button = ({ children, ...props }: any) => {
  return (
    <button
      {...props}
      className="border h-[50px] rounded-[15px] bg-black text-white"
    >
      {children}
    </button>
  );
};
