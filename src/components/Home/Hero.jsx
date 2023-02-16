import React from "react";
import Image from "next/image";
import PH from "../../assets/pink_hoodie.png";
import TPH from "../../assets/transp-pinkhoodie.png";
const Hero = () => {
  return (
    <section className="px-8 py-2">
      <div className="p-0 w-full h-hero bg-heroBiege flex justify-end rounded-3xl px-6">
        <Image
          src={TPH}
          alt="Woman with hoodie"
          className="max-h-full h-full object-contain float-right w-fit"
        />
      </div>
    </section>
  );
};

export default Hero;
