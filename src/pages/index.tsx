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

const ResponsiveGridLayout = WidthProvider(Responsive);

// const allDesktopLayout = [
//   { i: "a", x: 0, y: 0, w: 2, h: 1 },
//   { i: "b", x: 2, y: 0, w: 1, h: 1 },
//   { i: "c", x: 1, y: 1, w: 1, h: 1 },
//   { i: "d", x: 3, y: 2, w: 1, h: 2 },
//   { i: "e", x: 2, y: 4, w: 1, h: 2 },
//   { i: "f", x: 3, y: 3, w: 1, h: 1 },
//   { i: "g", x: 0, y: 1, w: 1, h: 1 },
//   { i: "h", x: 0, y: 3, w: 2, h: 1 },
//   { i: "i", x: 0, y: 4, w: 2, h: 1 },
//   { i: "j", x: 3, y: 4, w: 2, h: 1 },
// ];

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

  return (
    <div className="max-w-[400px] md:max-w-[800px] lg:max-w-[1200px] mx-auto">
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
          className={`bg-black text-white rounded-3xl flex items-center justify-center text-3xl font-bold tite`}
          key="a"
        >
          face
        </div>
        <div
          className="bg-black text-white rounded-xl flex items-center justify-center text-3xl font-bold tite"
          key="b"
        >
          map
        </div>
        <div
          className="bg-black text-white rounded-xl flex items-center justify-center text-3xl font-bold tite"
          key="c"
        >
          twitter
        </div>
        <div
          className="bg-black text-white rounded-xl flex items-center justify-center text-3xl font-bold tite"
          key="d"
        >
          1st project
        </div>
        <div
          className="bg-black text-white rounded-xl flex items-center justify-center text-3xl font-bold tite"
          key="e"
        >
          2nd project
        </div>
        <div
          className="bg-black text-white rounded-xl flex items-center justify-center text-3xl font-bold tite"
          key="f"
        >
          toggle light mode
        </div>
        <div
          className="bg-black text-white rounded-xl flex items-center justify-center text-3xl font-bold tite"
          key="g"
        >
          spotify
        </div>
        <div
          className="bg-black text-white rounded-xl flex items-center justify-center text-3xl font-bold tite"
          key="h"
        >
          how it started
        </div>
        <div
          className="bg-black text-white rounded-xl flex items-center justify-center text-3xl font-bold tite"
          key="i"
        >
          3rd project yellow
        </div>
        <div
          className="bg-black text-white rounded-xl flex items-center justify-center text-3xl font-bold tite"
          key="j"
        >
          shall I keep you inb the loops
        </div>
      </ResponsiveGridLayout>
    </div>
  );
};

export default Home;
