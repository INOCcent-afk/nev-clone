import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import { RefreshIcon } from "../icons/RefreshIcon";
import { motion, useAnimation, useCycle } from "framer-motion";

const MotionRefreshIcon = motion(RefreshIcon);

export const Face = () => {
  const controls = useAnimation();

  const [animate, cycle] = useCycle({ rotate: 0 }, { rotate: 180 });
  const [animate1, cycle1] = useCycle(
    { rotate: 0, scale: 0, opacity: 0 },
    { rotate: 0, scale: 1, opacity: 1 }
  );
  const [animate2, cycle2] = useCycle(
    { rotate: -10, scale: 1, opacity: 1 },
    { rotate: 0, scale: 0, opacity: 0 }
  );

  const startAnimation = () => {
    cycle();
    cycle1();
    cycle2();
    controls.start("wave");
  };

  return (
    <div className="bg-white flex flex-col md:gap-5 desktop:gap-0 w-full rounded-3xl pb-2 pt-8 px-10 relative overflow-hidden">
      <Button
        additinalCN="absolute right-4 top-5"
        onClick={() => {
          startAnimation();
          controls.set({ scale: -40 });
        }}
      >
        <MotionRefreshIcon animate={animate} transition={{ duration: 0.5 }} />
        <span>Toggle lockdown</span>
      </Button>
      <div className="relative h-[96px] w-[69px] md:h-[132px] md:w-[94px] desktop:h-[105px] desktop:w-[75px]">
        <motion.div
          variants={{
            wave: {
              scale: 80,
              opacity: [0.5, 0],
              transition: { duration: 0.5 },
            },

            hide: {
              scale: 1,
              opacity: 0,
            },
          }}
          animate={controls}
          onAnimationComplete={() => {
            controls.set("hide");
          }}
          className="absolute bg-black w-1 h-1 rounded-full opacity-0 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"
        ></motion.div>
        <div className="absolute">
          <motion.div
            animate={animate2}
            transition={{ duration: 0.5 }}
            initial={false}
            className="relative h-[96px] w-[69px] md:h-[132px] md:w-[94px] desktop:h-[105px] desktop:w-[75px]"
          >
            <Image
              src="/memoji-1.png"
              alt="my look a like emoji"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </div>
        <div className="absolute">
          <motion.div
            animate={animate1}
            transition={{ duration: 0.5 }}
            initial={false}
            className="relative h-[96px] w-[90px] md:h-[132px] md:w-[120px] desktop:h-[105px] desktop:w-[90px]"
          >
            <Image
              src="/memoji-2.png"
              alt="my look a like emoji"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </div>
      </div>
      <div className="">
        <p className="text-base tracking-wider md:tracking-widest">
          I'm
          <span className="px-2 text-5xl font-bold">nev</span>, a developer and
          product designer from Ireland. I'm interested in React, Node, Product
          Design, Jamstack, Startups, Cryptocurrencies and Music.
        </p>
      </div>
    </div>
  );
};
