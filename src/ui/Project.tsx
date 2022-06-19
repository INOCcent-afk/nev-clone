import React, { FC, ReactNode } from "react";
import { Button } from "./Button";

interface ProjectProps {
  bg: string;
  children: ReactNode;
}

export const Project: FC<ProjectProps> = ({ bg, children }) => {
  return (
    <div
      className="relative flex w-full rounded-3xl bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {children}
      <div className="absolute bottom-3 left-3">
        <Button>Click</Button>
      </div>
    </div>
  );
};
