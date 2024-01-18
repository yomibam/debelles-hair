import React from "react";
import whatsapp from "../assets/whatsapp-icon.png";
import instagram from "../assets/instagram-icon.png";
import tiktok from "../assets/tiktok-icon.png";
import youtube from "../assets/youtube-icon.png";
import facebook from "../assets/facebook-icon.png";

function Hero() {
  return (
    <div className=" p-[5%] flex flex-col items-center justify-center bg-[#FCE3E9] gap-[25px]">
      <h1 className="text-center text-black text-[2.5rem] font-medium">
        Let your hair do <br /> the talking
      </h1>
      <h3 className="text-center text-black text-[1rem] font-light">
        When it comes to your looks, your hair is Key! <br /> Your hair and hair
        accessories gives more importance <br /> to your personal taste and
        preferences.
      </h3>
      <button className="px-4 py-1.5 border text-black border-black rounded-3xl text-[1rem] font-normal">
        Order Now
      </button>
      <div className="flex items-center justify-center gap-5 py-[10%]">
        <a href="https://wa.me/2349136225444" target="_blank" rel="noreferrer">
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
  );
}

export default Hero;
