import React from 'react';
import { Link } from 'react-router-dom';

const SalesCard = () => {
  return (
    <Link
      to="/sales"
      className="group homepage-card ring-4 ring-white hover:ring-offset-4 ring-offset-black relative w-[25%] h-[50%] rounded-2xl shadow-md duration-300 overflow-hidden"
    ></Link>
  );
};

export default SalesCard;
