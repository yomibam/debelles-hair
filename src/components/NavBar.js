import React from "react";
import siteLogo from "../assets/debelles-logo.png";

const handleContactUS = (e) => {
  e.preventDefault();
  window.open(
    "https://wa.me/2349136225444?text=Hello,%20I'd%20like%20to%20make%20some%20inquires%20about%20your%20products%20and%20services.",
    "_blank",
    "noopener noreferrer"
  );
};

function NavBar() {
  return (
    <div className="flex justify-between p-[5%] bg-[#FCE3E9] items-center laptop:py-[2%]">
      <img src={siteLogo} alt="site logo" className="w-28" />
      <button
        className="px-4 py-1.5 border text-black border-black rounded-3xl text-[1rem] font-normal"
        onClick={handleContactUS}
      >
        Contact Us
      </button>
    </div>
  );
}

export default NavBar;
