import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Moon } from "../icons/Moon";
import { SunIcon } from "../icons/SunIcon";
import { ThemeContext } from "../context/themeContext";

const MotionSunIcon = motion(SunIcon);
const MotionMoonIcon = motion(Moon);

export const ToggleMode = () => {
  const [isOn, setIsOn] = useState(false);
  const { setTheme, colorTheme } = useContext(ThemeContext);

  const toggleSwitch = () => {
    setIsOn(!isOn);

    setTheme(colorTheme);
  };

  const spring = {
    type: "spring",
    stiffness: 100,
    damping: 10,
  };

  return (
    <div className="bg-white dark:bg-mediumBlue rounded-3xl w-full border-2 border-white dark:border-extraLightBlue flex items-center justify-center">
      <motion.button
        className="w-[80px] h-[48px] bg-lightGray dark:bg-extraLightBlue flex justify-start rounded-[50px] items-center px-2 cursor-pointer switch"
        data-ison={isOn}
        onTap={toggleSwitch}
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
      </motion.button>
    </div>
  );
};
