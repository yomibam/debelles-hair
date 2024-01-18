import React from "react";
import wigData from "../data/WigData";
import frontalData from "../data/FrontalData";
import careData from "../data/CareData";
import hr from "../assets/hr.png";

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
        When it comes to your looks, your hair is Key! Your hair and hair
        accessories give more importance to your personal taste and preferences.
      </h3>
      <div className="flex flex-col gap-20 py-[10%] px-[5%] w-[100%]">
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
      <img src={hr} alt="line break" className="w-[300px] pt-[20%]" />
    </div>
  );
}

export default Pricing;
