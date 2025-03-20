import React from "react";
import { PiDotsNineBold } from "react-icons/pi";

function Main() {
  return (
    <div className="max-w-[1150px] mx-auto px-4 mt-2">
      <h1 className="text-[3.5vh] font-semibold pt-3 pb-5">
        Villa La Vida Jalandhar - Luxe FarmStay with Pool
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 rounded-lg overflow-hidden">
        
        {/* Large Main Image */}
        <div className="w-full h-[250px] md:h-full">
          <img
            src="public/3s.avif"
            alt="Large Main"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Small Images Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          <img
            src="public/2s.avif"
            alt="Photo 2"
            className="w-full h-[120px] md:h-full object-cover rounded-lg"
          />
          <img
            src="public/1s.avif"
            alt="Photo 3"
            className="w-full h-[120px] md:h-full object-cover rounded-lg"
          />
          <img
            src="public/4s.avif"
            alt="Photo 4"
            className="w-full h-[120px] md:h-full object-cover rounded-lg"
          />

          {/* Last Image with "Show all photos" Button */}
          <div className="relative">
            <img
              src="public/5s.avif"
              alt="Photo 5"
              className="w-full h-[120px] md:h-full object-cover rounded-lg"
            />
            <button className="absolute bottom-2 right-2 bg-white text-black px-3 py-1 rounded-md shadow-md text-sm font-medium flex items-center gap-2 hover:bg-zinc-200">
              <PiDotsNineBold className="text-lg" />
              Show all photos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
