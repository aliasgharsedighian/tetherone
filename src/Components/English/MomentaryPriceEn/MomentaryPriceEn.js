import React from "react";
import { Link } from "react-router-dom";

function MomentaryPriceEn() {
  return (
    <section className="momentary-section-container shadow-xl">
      <div className="momentary-container">
        <div className="momentary-tether">
          <img
            className="momentary-tether-img"
            alt=""
            src="./images/home/tether-bg.svg"
          />
          <div className="momentary-tether-child">
            <span className="text-[#78e9da] font-bold">46,800Toman</span>
            <span className="text-gray-600">Online price</span>
          </div>
        </div>
        <div className="hours-past">
          <Link to="#">Last 24 hours</Link>
        </div>
        <div className="time-past-change-price">
          <div className="flex flex-col justify-center items-center text-xs md:text-sm lg:text-[16px]">
            <span className="text-[#d85140] font-bold"> % 9.32-</span>
            <span>Change</span>
          </div>
        </div>

        <div className="higher-tether-change">
          <span className="font-bold"> {(51500).toLocaleString()}</span>
          <span style={{ textAlign: "center" }}>Highest price</span>
        </div>
        <div className="lower-change-price-nemodar">
          <span className="font-bold"> {(46700).toLocaleString()}</span>
          <span style={{ textAlign: "center" }}>Lowest Price</span>
        </div>
        <div className="lower-change-price-nemodar2">
          <div className="momentary-nemodar">
            <button>Tether chart</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MomentaryPriceEn;
