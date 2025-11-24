import React from "react";
import image from "../../Images/Figma.png";
import Lottie from "lottie-react";
import animationData from "../../Images/Rotating_file.json";

const Hero = () => {
  return (
    <div className="container flex flex-col items-center py-10 md:py-1220 md:px-20 justify-evenly gap-4 px-4 pt-20 lg:pt-10
     lg:gap-0 ml-auto mr-auto">
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10">
        <div className="space-y-3 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl pecham">
            Hello! <br />
            I'm Shibashis
          </h1>
          <p className="max-w-md mx-auto md:mx-0 text-muted-foreground md:text-xl lg:text-base xl:text-xl pt-6 space">
            Graphic Designer, UI/UX Designer, <br />
            3D Designer, Brand Strategist and Creative Visionary
          </p>
          <div className="flex justify-center lg:justify-start py-8">
        <Lottie
          animationData={animationData}
          style={{ width: 200, height: 200 }}
        />
      </div>
        
        </div>
        <div className="w-full max-w-xs md:max-w-md mt-8 md:mt-12 ">
          <img
            src={image}
            className="rotate-12 hover:rotate-0 hover:transition-all duration-1000 mx-auto"
            alt="Hero"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
