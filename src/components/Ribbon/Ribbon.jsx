import React from 'react';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Marquee from "react-fast-marquee";

const Ribbon = () => {
  const items = [
    "Verified Courses",
    "Convenient buying options",
    "Finest Materials",
    "Flexibility to expand rental period",
    "Flexibility to expand rental period"
  ];

  return (
    <div className="bg-[#f79f7d] w-full py-5 overflow-hidden">
      <Marquee direction="right" className="flex justify-around">
        {items.map((item, index) => (
          <div key={index} className="flex items-center w-full ">
            <div className='flex justify-between text-black font-bold items-centera gap-2 w-full mx-16 space'> 
              <IoIosCheckmarkCircleOutline size={22} />
              <span>{item}</span>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Ribbon;