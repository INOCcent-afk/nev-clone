import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: ReactNode;
  additinalCN?: string;
  animateExtend?: boolean;
};

export const Button = ({
  additinalCN,
  animateExtend,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`rounded-3xl px-2 py-2 bg-white text-black flex items-center border-btn ${
        animateExtend ? "" : ""
      } ${additinalCN}`}
      {...props}
    >
      {children}
    </button>
  );
};
