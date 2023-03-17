import React from 'react';
import { Link } from 'react-router-dom';

const SalesCard = () => {
  return (
    <Link
      to="/sales"
      className="group relative h-[45%] w-[80%] rounded-sm bg-black shadow-md ring-2 ring-yellow-500 duration-500 hover:ring-[3px] sm:w-[70%] lg:w-[40%]"
    >
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-t from-yellow-50 to-yellow-600 bg-clip-text font-main text-[1.6rem] font-black tracking-[0.2rem] text-transparent duration-300 group-hover:tracking-[0.3rem] sm:text-[2rem]">
        SPECIAL OFFERS
      </div>
      <div className="absolute bottom-0 right-0 flex h-[70%] w-[18%] translate-x-[50%] translate-y-[50%] rotate-[-12deg] items-center justify-center rounded-md border-4 border-black bg-gradient-to-b from-yellow-300 to-yellow-600 font-main text-[2.6rem] duration-300 group-hover:scale-105 sm:h-[75%] sm:w-[11%] sm:text-[3rem]">
        %
      </div>
    </Link>
  );
};

export default SalesCard;
