import React from 'react';
import { Link } from 'react-router-dom';

const SalesCard = () => {
  return (
    <Link
      to="/sales"
      className="group relative w-[40%] h-[45%] ring-2 ring-white hover:ring-4 shadow-md duration-500 bg-gradient-to-b from-orange-500 to-orange-800 rounded-sm"
    >
      <div className="w-full h-full flex justify-center items-center text-white text-[2rem] font-main font-black tracking-[0.2rem] duration-300 group-hover:tracking-[0.4rem]">
        SPECIAL OFFERS
      </div>
      <div className="w-[11%] h-[75%] rotate-[-12deg] absolute bg-gradient-to-b from-yellow-400 to-yellow-600 border-4 group-hover:scale-105 border-black rounded-md bottom-0 right-0 translate-x-[50%] translate-y-[50%] flex justify-center items-center font-main text-[3rem] duration-300">
        %
      </div>
    </Link>
  );
};

export default SalesCard;
