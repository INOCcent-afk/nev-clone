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
      className={`rounded-3xl px-2 py-2 bg-white dark:bg-mediumBlue dark:text-white text-black flex items-center transition-shadow duration-300 shadow-[0px_0px_0px_1px_#f0f2f8] hover:shadow-[0px_0px_0px_5px_#f0f2f8] dark:shadow-extraLightBlue ${
        animateExtend ? "" : ""
      } ${additinalCN}`}
      {...props}
    >
      {children}
    </button>
  );
};
