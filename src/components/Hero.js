import React from "react";
import heroImage from "../assets/header-image.png";
import whatsapp from "../assets/whatsapp-icon.png";
import instagram from "../assets/instagram-icon.png";
import tiktok from "../assets/tiktok-icon.png";
import youtube from "../assets/youtube-icon.png";
import facebook from "../assets/facebook-icon.png";

function Hero() {
  return (
    <div className=" p-[5%] flex flex-col items-center justify-center bg-[#FCE3E9] gap-[25px] laptop:flex-row laptop:gap-0 laptop:py-0 laptop:px-[10%]">
      <div className="flex flex-col items-center justify-center gap-[25px] laptop:items-start laptop:w-full">
        <h1 className="text-center text-black text-[2.5rem] font-medium laptop:text-left">
          Let your hair do <br /> the talking
        </h1>
        <h3 className="text-center text-black text-[1rem] font-light laptop:text-left">
          When it comes to your looks, your hair is Key! <br /> Your hair and
          hair accessories gives more importance <br /> to your personal taste
          and preferences.
        </h3>
        <button className="px-4 py-1.5 border text-black border-black rounded-3xl text-[1rem] font-normal">
          Order Now
        </button>
      </div>
      <div className="flex flex-col w-full laptop:items-end">
        <div className="hidden w-[650px] h-auto overflow-hidden laptop:block">
          <img
            src={heroImage}
            alt="hero"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex items-center justify-center gap-5 py-[10%] laptop:py-0 laptop:pb-[15%]">
          <a
            href="https://wa.me/2349136225444"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="whatsapp link" className="w-10 h-auto" />
          </a>
          <a
            href="https://instagram.com/debelles_signature"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="instagram link" className="w-10 h-auto" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">
            <img src={tiktok} alt="tiktok link" className="w-10 h-auto" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <img src={youtube} alt="youtube link" className="w-10 h-auto" />
          </a>
          <a
            href="https://www.facebook.com/debelleshair"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="facebook link" className="w-10 h-auto" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
