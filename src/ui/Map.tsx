import React from "react";
import { Map } from "pigeon-maps";
import { stamenTerrain } from "pigeon-maps/providers";
import Image from "next/image";
import { motion } from "framer-motion";

export const MapCard = () => {
  return (
    <>
      <Map
        height={300}
        provider={stamenTerrain}
        defaultCenter={[50.879, 4.6997]}
        defaultZoom={11}
      ></Map>
      <motion.div
        variants={{
          jiggle: {
            rotate: [0, 0, -40, 0, 0],
            transition: { repeat: Infinity, duration: 1.5 },
          },
        }}
        whileHover={"jiggle"}
        className="absolute bg-blue px-6 py-4 border-4 border-white bg-opacity-80 rounded-full top-[15%] left-[35%] laptop:left-[25%] desktop:left-[35%] md:top-[30%]"
      >
        <Image
          src="/memoji-1.png"
          alt="me emoji"
          layout="fixed"
          height={50}
          width={40}
        />
      </motion.div>
    </>
  );
};
