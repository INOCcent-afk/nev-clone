import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const Spotify = () => {
  return (
    <div className="flex flex-col justify-between py-8 px-8 border-2 border-white dark:border-extraLightBlue dark:bg-mediumBlue bg-white w-full rounded-3xl">
      <div className="relative w-14 h-14 laptop:w-9 laptop:h-9 desktop:w-14 desktop:h-14">
        <Image src="/spotify.svg" alt="spotify" layout="fill" />
      </div>
      <div className="">
        <span className="text-green font-bold mt-3 flex items-center gap-2">
          <div className="flex gap-1">
            <motion.div
              animate={{ scaleY: [0.4, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="h-4 w-1 bg-green rounded-md"
            ></motion.div>
            <motion.div
              animate={{ scaleY: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="h-4 w-1 bg-green rounded-md"
            ></motion.div>
            <motion.div
              animate={{ scaleY: [0.5, 1, 0.7] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="h-4 w-1 bg-green rounded-md"
            ></motion.div>
          </div>
          Offline. Last played
        </span>
        <h4 className="text-2xl font-bold dark:text-white">I Dont Belong</h4>
        <p className="dark:text-white">Fontaines D.C.</p>
      </div>
    </div>
  );
};
