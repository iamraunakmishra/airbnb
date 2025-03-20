import React from "react";
import { MdFamilyRestroom } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import { IoBalloonOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";

function VillaDetails() {
  return (
    <div className="w-full lg:max-w-[50%] mx-auto p-4 lg:ml-[12%] pb-5">
      
      <div className="border border-zinc-300 rounded-lg mt-5 p-4 md:p-5 flex flex-col md:flex-row items-center gap-4 md:justify-between shadow-md mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <div className="text-center font-semibold">
            <p>Guest</p>
            <p>favourite</p>
          </div>
          <span className="text-2xl">🌿</span>
        </div>

        {/* Middle Text */}
        <p className="text-gray-600 text-sm text-center md:text-left">
          One of the most loved homes on Airbnb, according to guests
        </p>

        {/* Rating and Reviews */}
        <div className="flex items-center gap-4">
          <div>
            <span className="text-xl font-semibold">5.0</span>
            <span className="text-yellow-500 ml-1">⭐</span>
          </div>
          <div className="border-l pl-4">
            <p className="text-lg font-semibold">29</p>
            <p className="text-black text-sm cursor-pointer hover:underline">Reviews</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-5 mb-5">
        <img
          src="\7s.avif"
          alt="Host"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold">Hosted by Mandeep Singh</p>
          <p className="text-gray-500 text-sm">Superhost · 2 years hosting</p>
        </div>
      </div>

      {/* Separator */}
      <hr className="mb-4 bg-zinc-300" />

      {/* Feature List */}
      <div className="space-y-4 mt-10 mb">
        {/* Top 1% of homes */}
        <div className="flex items-start gap-3">
          <span className="text-yellow-500 text-lg mt-1 flex-shrink-0"><FaTrophy /></span>
          <div>
            <p className="font-semibold">Top 1% of homes</p>
            <p className="text-gray-500 text-sm">
              This home is one of the highest ranked based on ratings, reviews, and reliability.
            </p>
          </div>
        </div>

        {/* Perfect ratings from families */}
        <div className="flex items-start gap-3">
          <span className="text-gray-600 text-lg mt-1 flex-shrink-0"><MdFamilyRestroom /></span>
          <div>
            <p className="font-semibold">Perfect ratings from families</p>
            <p className="text-gray-500 text-sm">
              100% of families who stayed here in the past year rated it 5 stars overall.
            </p>
          </div>
        </div>

        {/* Fun and games for kids */}
        <div className="flex items-start gap-3 border-bottom">
          <span className="text-gray-600 text-lg mt-1 flex-shrink-0"><IoBalloonOutline /></span>
          <div>
            <p className="font-semibold">Exceptional check-in experience</p>
            <p className="text-gray-500 text-sm">
              Recent guests gave the check-in process a 5-star rating.
            </p>
          </div>
        </div>
        <div>
          <hr className="mb-4 bg-zinc-300" />
          <div className="mb-5">
            <h1 className="text-xl mb-4 mt-5">La vida - The life.</h1>
            <p className="text-sm text-zinc-600">This 3 Acre, 10,000 sq ft modern Farmhouse is inspired from the Mega Mansions of Marbella, Spain. <br className="hidden sm:block" />
            Overlooking a beautiful orchard, enjoy the magnificent pool, warm yourselves in the fire pit next to it while relishing a delicious barbecue meal, you will be spoilt for choice..!..</p>
            <h1 className="mt-2 underline flex items-center cursor-pointer">Show More <span className="mt-1.5"><FaAngleRight /></span></h1>
          </div>
          <hr className="mb-4 bg-zinc-300" />
        </div>
      </div>
    </div>
  );
}

export default VillaDetails;
