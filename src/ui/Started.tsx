import React from "react";
import { ArrowIcon } from "../icons/ArrowIcon";
import { Button } from "./Button";

export const Started = () => {
  return (
    <div className="bg-white rounded-3xl w-full p-8 flex flex-col justify-between">
      <div className="flex flex-col gap-4 desktop:gap-2">
        <h4 className="text-3xl font-bold desktop:text-2xl">
          How it started vs. how its going
        </h4>
        <p className="text-lg tracking-wider">
          A short personal history as it relates to design and development, and
          how Ive found value in the cross-section between both disciplines.
        </p>
      </div>
      <div className="flex justify-between items-center">
        <Button>
          <ArrowIcon />
          <span className="px-2">Read more</span>
        </Button>
        <span className="text-fontGray font-bold">May 5, 2021</span>
      </div>
    </div>
  );
};
