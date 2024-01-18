import React from "react";
import accessories from "../assets/accessories-image.jpg";
import hr from "../assets/hr.png";

function Accessories() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 px-[5%] py-[10%] bg-[#fff2f2]">
      <div className="flex flex-col items-center justify-center gap-5 laptop:flex-row laptop:px-[10%]">
        <div className="laptop:w-full">
          <div className="w-[350px] h-[350px] overflow-hidden laptop:rounded-[50%] laptop:w-[400px] laptop:h-[400px]">
            <img
              src={accessories}
              alt="accessories"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-center text-black text-[2rem] font-medium laptop:text-left">
            Get top of the line hair accessories
          </h2>
          <h3 className="text-center text-black text-[1rem] font-light laptop:text-left">
            When it comes to your looks, your hair is Key! <br />
            Your hair and hair accessories gives more importance to your
            personal taste and preferences.
          </h3>
        </div>
      </div>

      <img
        src={hr}
        alt="line break"
        className="w-[120px] pt-[20%] laptop:pt-[10%]"
      />
    </div>
  );
}

export default Accessories;
