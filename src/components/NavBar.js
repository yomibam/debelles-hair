import React from "react";
import siteLogo from "../assets/debelles-logo.png";

function NavBar() {
  return (
    <div className="flex justify-between p-[5%] bg-[#FCE3E9] items-center laptop:py-[2%]">
      <img src={siteLogo} alt="site logo" className="w-28" />
      <button className="px-4 py-1.5 border text-black border-black rounded-3xl text-[1rem] font-normal">
        Contact Us
      </button>
    </div>
  );
}

export default NavBar;
