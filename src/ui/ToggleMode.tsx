import React, { useState } from "react";
import { motion } from "framer-motion";
import { Moon } from "../icons/Moon";
import { SunIcon } from "../icons/SunIcon";

const MotionSunIcon = motion(SunIcon);
const MotionMoonIcon = motion(Moon);

export const ToggleMode = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  const spring = {
    type: "spring",
    stiffness: 100,
    damping: 10,
  };

  return (
    <div className="bg-white rounded-3xl w-full flex items-center justify-center">
      <div
        className="w-[80px] h-[48px] bg-lightGray flex justify-start rounded-[50px] items-center px-2 cursor-pointer switch"
        data-ison={isOn}
        onClick={toggleSwitch}
      >
        <motion.div
          className="w-[36px] h-[36px] bg-black rounded-full flex items-center justify-center"
          layout
          transition={spring}
        >
          {isOn ? (
            <MotionSunIcon
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <MotionMoonIcon
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};
