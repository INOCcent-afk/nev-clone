import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { TabbingContext } from "../context/tabContext";
import {
  aboutDesktopLayout,
  aboutMobileLayout,
  aboutTabletLayout,
} from "../layoutGrids/aboutLayout";
import {
  allDesktopLayout,
  allMobileLayout,
  allTabletLayout,
} from "../layoutGrids/allLayout";
import {
  mediaDesktopLayout,
  mediaMobileLayout,
  mediaTabletLayout,
} from "../layoutGrids/mediaLayout";
import {
  projectsDesktopLayout,
  projectsMobileLayout,
  projectsTabletLayout,
} from "../layoutGrids/projectsLayout";
import { useWindowSize } from "../shared-components/useWindowSize";
import { motion } from "framer-motion";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Home: NextPage = () => {
  const { tab } = useContext(TabbingContext);
  const [rowHeight, setRowHeight] = useState<number | null>();

  const [width] = useWindowSize();

  let tab1 = {
    lg: allDesktopLayout,
    md: allTabletLayout,
    sm: allTabletLayout,
    xs: allMobileLayout,
    xxs: allMobileLayout,
  };

  let tab2 = {
    lg: aboutDesktopLayout,
    md: aboutDesktopLayout,
    sm: aboutTabletLayout,
    xs: aboutMobileLayout,
    xxs: aboutMobileLayout,
  };

  let tab3 = {
    lg: projectsDesktopLayout,
    md: projectsDesktopLayout,
    sm: projectsTabletLayout,
    xs: projectsMobileLayout,
    xxs: projectsMobileLayout,
  };

  let tab4 = {
    lg: mediaDesktopLayout,
    md: mediaDesktopLayout,
    sm: mediaTabletLayout,
    xs: mediaMobileLayout,
    xxs: mediaMobileLayout,
  };

  const getLayoutToDisplay = () => {
    if (tab === 1) return tab1;
    if (tab === 2) return tab2;
    if (tab === 3) return tab3;

    return tab4;
  };

  const layout = getLayoutToDisplay();

  const getRowHeight = () => {
    width > 1199
      ? setRowHeight(260)
      : width <= 1199 && width > 768
      ? setRowHeight(200)
      : setRowHeight(140);
  };

  useEffect(() => {
    getRowHeight();
  }, [width]);

  if (!rowHeight) {
    return null;
  }

  let isTab1 = tab === 1;
  let isTab2 = tab === 2 || isTab1;
  let isTab3 = tab === 3 || isTab1;
  let isTab4 = tab === 4 || isTab1;

  return (
    <motion.div
      variants={{
        transitionIn: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.8,
          },
        },
        initial: {
          y: 2,
          opacity: 0,
        },
      }}
      animate="transitionIn"
      initial="initial"
      className="max-w-[400px] md:max-w-[800px] lg:max-w-[1200px] mx-auto"
    >
      <ResponsiveGridLayout
        className="layout text-center"
        breakpoints={{ lg: 1199, md: 996, sm: 768, xs: 480, xxs: 0 }}
        layouts={{
          lg: layout.lg,
          md: layout.md,
          sm: layout.sm,
          xs: layout.xs,
          xxs: layout.xxs,
        }}
        useCSSTransforms={false}
        measureBeforeMount={true}
        cols={{
          lg: 4,
          md: 4,
          sm: 4,
          xs: 2,
          xxs: 2,
        }}
        rowHeight={rowHeight as number}
      >
        <div
          className={`bg-black text-white rounded-3xl flex items-center justify-center text-3xl font-bold box-shadow ${
            isTab2 ? "opacity-100" : "opacity-50"
          }`}
          key="face"
        >
          face
        </div>
        <div
          className={`bg-black text-white rounded-3xl flex items-center justify-center text-3xl font-bold box-shadow ${
            isTab2 ? "opacity-100" : "opacity-50"
          }`}
          key="map"
        >
          map
        </div>
        <div
          className={`bg-black text-white rounded-3xl flex items-center justify-center text-3xl font-bold box-shadow ${
            isTab2 ? "opacity-100" : "opacity-50"
          }`}
          key="twitter"
        >
          twitter
        </div>
        <div
          className={`bg-black text-white rounded-3xl flex items-center justify-center text-3xl font-bold box-shadow ${
            isTab3 ? "opacity-100" : "opacity-50"
          }`}
          key="project1"
        >
          1st project
        </div>
        <div
          className={`bg-black text-white rounded-3xl flex items-center justify-center text-3xl font-bold box-shadow ${
            isTab3 ? "opacity-100" : "opacity-50"
          }`}
          key="project2"
        >
          2nd project
        </div>
        <div
          className={`bg-black text-white rounded-3xl flex items-center justify-center text-3xl font-bold box-shadow ${
            isTab1 ? "opacity-100" : "opacity-50"
          }`}
          key="toggleMode"
        >
          toggle light mode
        </div>
        <div
          className={`bg-black text-white rounded-3xl flex items-center justify-center text-3xl font-bold box-shadow ${
            isTab4 ? "opacity-100" : "opacity-50"
          }`}
          key="spotify"
        >
          spotify
        </div>
        <div
          className={`bg-black text-white rounded-3xl flex items-center justify-center text-3xl font-bold box-shadow ${
            isTab4 ? "opacity-100" : "opacity-50"
          }`}
          key="started"
        >
          how it started
        </div>
        <div
          className={`bg-black text-white rounded-3xl flex items-center justify-center text-3xl font-bold box-shadow ${
            isTab3 ? "opacity-100" : "opacity-50"
          }`}
          key="project3"
        >
          3rd project yellow
        </div>
        <div
          className={`bg-black text-white rounded-3xl flex items-center justify-center text-3xl font-bold box-shadow ${
            isTab4 ? "opacity-100" : "opacity-50"
          }`}
          key="shall"
        >
          shall I keep you inb the loops
        </div>
      </ResponsiveGridLayout>
    </motion.div>
  );
};

export default Home;
