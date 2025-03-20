import React, { useState, useEffect } from "react";

function BookingCard() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [price, setPrice] = useState(0); 

  const pricePerNight = 29670;

  const calculateNights = (start, end) => {
    if (!start || !end) return 0; 
    const startDate = new Date(start);
    const endDate = new Date(end);
    const difference = (endDate - startDate) / (1000 * 60 * 60 * 24);
    return difference > 0 ? difference : 0; 
  };

  useEffect(() => {
    const nights = calculateNights(checkIn, checkOut);
    setPrice(nights * pricePerNight);
  }, [checkIn, checkOut]);

  return (
    <div className="w-full md:max-w-sm mx-auto lg:mx-0 lg:absolute lg:right-50 lg:top-150 p-4 bg-white shadow-lg rounded-lg">
      
      <div className="bg-gray-100 p-2 text-center rounded-lg mb-3">
        <span className="text-sm font-semibold">🏷 Prices include all fees</span>
      </div>

      <h2 className="text-2xl font-bold flex flex-col sm:flex-row sm:items-center gap-1">
        ₹{price.toLocaleString()}{" "}
        {price > 0 && (
          <span className="text-gray-500 text-sm">
            for {calculateNights(checkIn, checkOut)} nights
          </span>
        )}
      </h2>

      <div className="flex flex-col sm:flex-row border rounded-lg overflow-hidden mt-3">
        <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r">
          <p className="text-xs font-semibold">CHECK-IN</p>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full text-sm"
          />
        </div>
        <div className="w-full sm:w-1/2 p-2">
          <p className="text-xs font-semibold">CHECKOUT</p>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full text-sm"
          />
        </div>
      </div>

      <div className="border rounded-lg p-2 mt-3 relative">
        <p className="text-xs font-semibold">GUESTS</p>
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full text-sm"
        >
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1} guests
            </option>
          ))}
        </select>
      </div>

      <button
        className="bg-pink-600 text-white font-bold py-2 w-full mt-3 rounded-lg disabled:opacity-50"
        disabled={price === 0}
      >
        Reserve
      </button>

      <p className="text-center text-gray-500 text-sm mt-2">
        You won't be charged yet
      </p>     
    </div>
  );
}

export default BookingCard;