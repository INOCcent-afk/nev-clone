import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";

// interface ButtonProps {
//   children: ReactNode;
//   additinalCN?: string;
// }

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: ReactNode;
  additinalCN?: string;
};

export const Button = ({ additinalCN, children, ...props }: ButtonProps) => {
  return (
    <button
      className={`rounded-3xl px-4 py-2 bg-white text-black flex items-center gap-3 outline outline-1 outline-gray hover:outline-4 
                 duration-300 ${additinalCN}`}
      {...props}
    >
      {children}
    </button>
  );
};
