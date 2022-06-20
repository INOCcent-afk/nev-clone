import React from "react";
import { ArrowIcon } from "../icons/ArrowIcon";
import { Button } from "./Button";

export const Shall = () => {
  return (
    <div className="bg-white rounded-3xl w-full p-8 flex flex-col justify-between">
      <div className="flex flex-col gap-4 desktop:gap-2">
        <h4 className="text-3xl font-bold desktop:text-2xl">
          Shall I keep you in the loop?
        </h4>
        <p className="text-lg tracking-wider">
          Content includes articles, early access to products, and ongoing
          learnings.
        </p>
      </div>
      <div className="flex justify-between items-center">
        <Button>
          <ArrowIcon />
          <span className="px-2">Read more</span>
        </Button>
        <span className="text-fontGray font-bold">
          <span className="text-black text-lg font-bold">237</span> subscribers
        </span>
      </div>
    </div>
  );
};
