import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TabbingContext } from "../context/tabContext";

export const Header = () => {
  const [activeIndicatorLeft, setActiveIndicatorLeft] = useState<
    number | null | undefined
  >(8);
  const [activeIndicatorWidth, setActiveIndicatorWidth] = useState<
    number | null | undefined
  >(42);

  const { tab, setTab } = useContext(TabbingContext);

  const containerRef = useRef<HTMLElement>(null);

  const allRef = useRef<HTMLLIElement>(null);
  const aboutRef = useRef<HTMLLIElement>(null);
  const projectsRef = useRef<HTMLLIElement>(null);
  const mediaRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const getXOfCurrentTab = (tab: number) => {
      let x;
      let width;

      switch (tab) {
        case 1:
          x = allRef.current?.getBoundingClientRect().x;
          width = allRef.current?.offsetWidth;
          break;
        case 2:
          x = aboutRef.current?.getBoundingClientRect().x;
          width = aboutRef.current?.offsetWidth;
          break;
        case 3:
          x = projectsRef.current?.getBoundingClientRect().x;
          width = projectsRef.current?.offsetWidth;
          break;
        case 4:
          x = mediaRef.current?.getBoundingClientRect().x;
          width = mediaRef.current?.offsetWidth;
          break;
      }

      return { x, width };
    };

    let { x, width } = getXOfCurrentTab(tab);

    setActiveIndicatorLeft(
      x &&
        containerRef.current &&
        x - containerRef.current?.getBoundingClientRect().x
    );

    setActiveIndicatorWidth(width);
  }, [tab]);

  return (
    <header className="flex flex-col items-center gap-5 px-7 pt-24 pb-10 justify-between sm:flex-row sm:py-16 md:px-14">
      <div className="">
        <Image src="/logo.svg" alt="Nev logo" width={72} height={24} />
      </div>
      <nav ref={containerRef}>
        <ul className="flex px-2 py-1 rounded-3xl bg-gray border border-gray dark:bg-mediumBlue dark:border-extraLightBlue items-center gap-2 relative">
          <motion.div
            key={tab}
            variants={{
              move: {
                x: activeIndicatorLeft as number,
                width: activeIndicatorWidth as number,
                transition: {
                  duration: 0.5,
                },
              },
            }}
            animate={"move"}
            initial={false}
            className={`absolute h-7 rounded-3xl left-0 bg-white dark:bg-extraLightBlue`}
          ></motion.div>
          <li
            className="hover:opacity-50 transition-opacity ease-in-out duration-300 cursor-pointer px-3 py-1 z-10 dark:text-white"
            ref={allRef}
            onClick={() => setTab(1)}
          >
            All
          </li>
          <li
            className="hover:opacity-50 transition-opacity ease-in-out duration-300 cursor-pointer px-3 py-1 z-10 dark:text-white"
            ref={aboutRef}
            onClick={() => setTab(2)}
          >
            About
          </li>
          <li
            className="hover:opacity-50 transition-opacity ease-in-out duration-300 cursor-pointer px-3 py-1 z-10 dark:text-white"
            ref={projectsRef}
            onClick={() => setTab(3)}
          >
            Projects
          </li>
          <li
            className="hover:opacity-50 transition-opacity ease-in-out duration-300 cursor-pointer px-3 py-1 z-10 dark:text-white"
            ref={mediaRef}
            onClick={() => setTab(4)}
          >
            Media
          </li>
        </ul>
      </nav>
      <div className="hidden sm:block dark:text-white">Contact</div>
    </header>
  );
};
