import React from 'react';
import { Link } from 'react-router-dom';

interface HomepageCardProps {
  image: string;
  link: string;
  title: string;
  altTitle: string;
}

const HomepageCard: React.FC<HomepageCardProps> = ({
  image,
  link,
  title,
  altTitle,
}) => {
  return (
    <Link
      to={link}
      className="group ring-4 ring-white hover:ring-offset-4 ring-offset-black relative w-[500px] h-full rounded-2xl shadow-md duration-300 overflow-hidden"
    >
      <div className="h-[85%] w-full">
        <img
          src={image}
          alt={altTitle}
          draggable={false}
          className="w-full h-full object-cover object-center rounded-t-2xl duration-500 group-hover:scale-110 group-hover:brightness-[80%]"
        />
      </div>
      <div className="absolute h-[15%] w-full flex justify-center items-center text-xl bg-white font-main tracking-wider rounded-b-2xl border-t-[0.5rem] border-orange-600 duration-500 group-hover:tracking-[0.4rem] group-hover:bg-black group-hover:text-white">
        {title}
      </div>
    </Link>
  );
};

export default HomepageCard;
