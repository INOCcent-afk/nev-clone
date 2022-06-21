import type { NextPage } from "next";
import { useContext, useEffect, useRef, useState } from "react";
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
import { Face } from "../ui/Face";
import { Project } from "../ui/Project";
import Image from "next/image";
import { MapCard } from "../ui/Map";
import { ArrowIcon } from "../icons/ArrowIcon";
import { Twitter } from "../ui/Twitter";
import { Started } from "../ui/Started";
import { Shall } from "../ui/Shall";
import { Spotify } from "../ui/Spotify";
import { ToggleMode } from "../ui/ToggleMode";
import { ThemeContext } from "../context/themeContext";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Home: NextPage = () => {
  const { tab } = useContext(TabbingContext);
  const [rowHeight, setRowHeight] = useState<number | null>();
  const { theme } = useContext(ThemeContext);

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
      className="max-w-[400px] laptop:max-w-[800px] desktop:max-w-[1200px] mx-auto"
    >
      <ResponsiveGridLayout
        className="layout"
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
          className={`flex box-shadow tite ${
            isTab2 ? "opacity-100" : "opacity-50"
          }`}
          key="face"
        >
          <Face />
        </div>
        <div
          className={`flex overflow-hidden rounded-3xl box-shadow ${
            isTab2 ? "opacity-100" : "opacity-50"
          }`}
          key="map"
        >
          <MapCard />
        </div>
        <div
          className={`flex box-shadow ${isTab2 ? "opacity-100" : "opacity-50"}`}
          key="twitter"
        >
          <Twitter />
        </div>
        <div
          className={`flex box-shadow ${isTab3 ? "opacity-100" : "opacity-50"}`}
          key="project1"
        >
          <Project
            bg="/recroot-bg.svg"
            icon={<ArrowIcon />}
            buttonText="Recroot"
          >
            <Image
              src="/recroot.png"
              alt="recroot"
              layout="fill"
              objectFit="cover"
              priority
            />
          </Project>
        </div>
        <div
          className={`flex box-shadow ${isTab3 ? "opacity-100" : "opacity-50"}`}
          key="project2"
        >
          <Project
            bg="/vouch-for-bg.svg"
            icon={<ArrowIcon />}
            buttonText="Vouch For"
          >
            <Image
              src="/vouch-for.png"
              alt="vouch"
              layout="fill"
              objectFit="cover"
            />
          </Project>
        </div>
        <div
          className={`flex box-shadow ${isTab1 ? "opacity-100" : "opacity-50"}`}
          key="toggleMode"
        >
          <ToggleMode />
        </div>
        <div
          className={`flex box-shadow ${isTab4 ? "opacity-100" : "opacity-50"}`}
          key="spotify"
        >
          <Spotify />
        </div>
        <div
          className={`flex box-shadow ${isTab4 ? "opacity-100" : "opacity-50"}`}
          key="started"
        >
          <Started />
        </div>
        <div
          className={`flex box-shadow ${isTab3 ? "opacity-100" : "opacity-50"}`}
          key="project3"
        >
          <Project bg="/wrap-bg.svg" icon={<ArrowIcon />} buttonText="Wrap">
            <Image src="/wrap.png" alt="wrap" layout="fill" objectFit="cover" />
          </Project>
        </div>
        <div
          className={`flex box-shadow ${isTab4 ? "opacity-100" : "opacity-50"}`}
          key="shall"
        >
          <Shall />
        </div>
      </ResponsiveGridLayout>
    </motion.div>
  );
};

export default Home;
