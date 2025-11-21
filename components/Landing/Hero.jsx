import { TextAnimate } from "@/components/ui/text-animate";
import React from "react";
import Image from "next/image";
import { AuroraText } from "@/components/ui/aurora-text"
import Featuregrid from "./Featuregrid";
import Footer from "./Footer";

function Hero() {
  return (
    <div>
    <div className="w-full min-h-screen px-6 py-12 flex flex-col items-center">
      <h1 className="text-6xl w-[100%] h-[19%] font-bold text-center mb-5 z-11">
        Start <AuroraText className="text-7xl">BootStrap!</AuroraText>
      </h1>
      <div className="w-[100%] h-[50%] max-w-7xl flex items-center justify-between gap-10 mb-12">
        <div className="w-[65%] h-[100%]">
          <TextAnimate animation="slideLeft" by="word" as="p" className="text-3xl md:text-5xl font-bold leading-snug z-11">
            This is a sample landing page build using Tailwindcss and React.
          </TextAnimate>
          <TextAnimate animation="fadeIn" by="line" as="p" className="mt-4 text-lg text-black z-11">
            In this project i have build several components that are responsive and are used at various places in the project.
          </TextAnimate>
          <button className="mt-8 bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg transition z-11">
            Sign up
          </button>
        </div>
        <Image
          src="/uiux.png"
          alt="Image"
          width={320}
          height={320}
          className="object-contain w-[35%] h-[100%] z-11 hover:scale-110 transition-transform duration-500"
        />
      </div>
      <Featuregrid />
    </div>
    <Footer/>
    </div>
  );
}
export default Hero;
