import React from "react";
import accessories from "../assets/accessories-image.jpg";
import hr from "../assets/hr.png";

function Accessories() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 px-[5%] py-[10%] bg-[#fff2f2]">
      <div className="w-[350px] h-[350px] overflow-hidden">
        <img
          src={accessories}
          alt="accessories"
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      <h2 className="text-center text-black text-[2rem] font-medium">
        Get top of the line hair accessories
      </h2>
      <h3 className="text-center text-black text-[1rem] font-light">
        When it comes to your looks, your hair is Key! Your hair and hair
        accessories gives more importance to your personal taste and
        preferences.
      </h3>
      <img src={hr} alt="line break" className="w-[120px] pt-[20%]" />
    </div>
  );
}

export default Accessories;
