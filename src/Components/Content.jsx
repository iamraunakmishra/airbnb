import React from "react";
import { LuDot } from "react-icons/lu";

function Content() {
  return (
    <div className="max-w-[1150px] mx-auto px-4 mt-5 flex flex-col">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
        Entire villa in Jalandhar, India
      </h1>
      <h1 className="flex flex-wrap gap-1 sm:gap-2 md:gap-3 text-sm sm:text-lg md:text-xl items-center">
        <LuDot /> 16+ guests <LuDot /> 6 bedrooms <LuDot /> 10 beds <LuDot /> 8 bathrooms
      </h1>
    </div>
  );
}

export default Content;
