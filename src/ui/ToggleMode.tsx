import React, { useState } from "react";
import { motion } from "framer-motion";
import { Moon } from "../icons/Moon";
import { SunIcon } from "../icons/SunIcon";

const MotionSunIcon = motion(SunIcon);
const MotionMoonIcon = motion(Moon);

export const ToggleMode = () => {
  const [theme, setTheme] = React.useState<string | null>(null);
  const colorTheme = theme === "dark" ? "light" : "dark";
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);

    setTheme(colorTheme);
  };

  const spring = {
    type: "spring",
    stiffness: 100,
    damping: 10,
  };

  React.useEffect(() => {
    setTheme(window.localStorage.theme);
  }, []);

  React.useEffect(() => {
    const root = document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme as any);
    window.localStorage.setItem("theme", theme as any);
  }, [theme]);

  return (
    <div className="bg-white dark:bg-mediumBlue rounded-3xl w-full border-2 border-white dark:border-extraLightBlue flex items-center justify-center">
      <div
        className="w-[80px] h-[48px] bg-lightGray dark:bg-extraLightBlue flex justify-start rounded-[50px] items-center px-2 cursor-pointer switch"
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
