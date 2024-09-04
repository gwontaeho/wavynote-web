import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

export const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button {...props} className="border h-[50px] rounded-[15px] bg-black text-white">
            {children}
        </button>
    );
};
