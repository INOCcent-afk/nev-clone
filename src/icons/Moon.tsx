import React, { forwardRef } from "react";

export const Moon = forwardRef<any, any>((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="19"
      viewBox="0 0 17 19"
      className="MoonSVG__SVG-jbpqn0-0 eweehR"
      transform-origin="8.477352142333984px 9.486003313912079px"
      ref={ref}
    >
      <path
        id="moon"
        d="M36.7,18.974a9.469,9.469,0,0,0,7.369-3.513.445.445,0,0,0-.428-.717A7.432,7.432,0,0,1,38.571.982a.445.445,0,0,0-.139-.824A9.488,9.488,0,1,0,36.7,18.974Z"
        transform="translate(-27.211)"
        fill="#ffe3a4"
      ></path>
    </svg>
  );
});
