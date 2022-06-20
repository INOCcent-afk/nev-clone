import React, { FC, ReactNode } from "react";
import { Button } from "./Button";

interface ProjectProps {
  bg: string;
  children: ReactNode;
  icon?: ReactNode;
  buttonText?: string;
}

export const Project: FC<ProjectProps> = ({
  bg,
  children,
  icon,
  buttonText,
}) => {
  return (
    <div
      className="relative flex w-full rounded-3xl bg-white bg-cover bg-center bg-no-repeat overflow-hidden dark:!bg-none dark:bg-mediumBlue border-2 border-[transparent] dark:border-extraLightBlue"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {children}
      <div className="absolute bottom-3 left-3 group">
        <Button>
          {buttonText && <span className="px-2">{buttonText}</span>}
          {icon}
        </Button>
      </div>
    </div>
  );
};
