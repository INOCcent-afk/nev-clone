import React from "react";
import { ArrowIcon } from "../icons/ArrowIcon";
import { TwitterOutlined } from "@ant-design/icons";
import { Button } from "./Button";

export const Twitter = () => {
  return (
    <div className="bg-blue dark:bg-mediumBlue border-2 border-[transparent] dark:border-extraLightBlue w-full flex items-center justify-center rounded-3xl relative">
      <div className="text-7xl leading-[0px] text-white dark:text-blue">
        <TwitterOutlined />
      </div>

      <Button additinalCN="absolute left-3 bottom-3">
        <ArrowIcon />
      </Button>
    </div>
  );
};
