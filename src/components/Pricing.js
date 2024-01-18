import React from "react";
import wigData from "../data/WigData";
import frontalData from "../data/FrontalData";
import careData from "../data/CareData";
import hrLong from "../assets/hr-long.png";
import priceImage from "../assets/pricing-img.png";

const DisplayWig = ({ wigs }) => {
  return wigs.map((wig) => (
    <div className="flex items-center justify-between pt-[3%]">
      <div className="text-black text-[15px] font-light">{wig.wigName}</div>
      <div className="text-black text-[15px] font-light">{wig.wigPrice}</div>
    </div>
  ));
};
const DisplayFrontal = ({ frontals }) => {
  return frontals.map((frontal) => (
    <div className="flex items-center justify-between pt-[3%]">
      <div className="text-black text-[15px] font-light">
        {frontal.frontalName}
      </div>
      <div className="text-black text-[15px] font-light">
        {frontal.frontalPrice}
      </div>
    </div>
  ));
};
const DisplayCare = ({ cares }) => {
  return cares.map((care) => (
    <div className="flex items-center justify-between pt-[3%]">
      <div className="text-black text-[15px] font-light">{care.careName}</div>
      <div className="text-black text-[15px] font-light">{care.carePrice}</div>
    </div>
  ));
};

function Pricing() {
  return (
    <div className="bg-[#fff2f2] flex flex-col gap-5 items-center">
      <h2 className="text-center text-black text-[2rem] font-medium px-[5%]">
        Our Priciing
      </h2>
      <h3 className="text-center text-black text-[1rem] font-light px-[6%]">
        When it comes to your looks, your hair is Key! <br />
        Your hair and hair accessories give more importance to your personal
        taste and preferences.
      </h3>

      <div className="flex items-center justify-center w-full laptop:justify-between laptop:px-[7%] laptop:pt-[5%]">
        <div className="flex flex-col gap-20 py-[10%] px-[5%] w-full laptop:w-auto laptop:p-0 laptop:gap-10">
          <div>
            <h3 className="text-3xl font-medium text-black">Wig</h3>
            <div>
              <DisplayWig wigs={wigData} />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-medium text-black">Frontal</h3>
            <div>
              <DisplayFrontal frontals={frontalData} />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-medium text-black">Wig Care</h3>
            <div>
              <DisplayCare cares={careData} />
            </div>
          </div>
        </div>
        <div className="hidden w-[500px] h-[500px] overflow-hidden laptop:block">
          <img
            src={priceImage}
            alt="price"
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
      </div>

      <img
        src={hrLong}
        alt="line break"
        className="w-[300px] pt-[20%] laptop:pt-[10%] laptop:w-[70%]"
      />
    </div>
  );
}

export default Pricing;
