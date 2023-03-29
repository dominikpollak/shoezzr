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
      className="group relative mb-8 h-[350px] w-[80%] overflow-hidden rounded-2xl shadow-md ring-4 ring-white ring-offset-black duration-300 hover:ring-offset-4 sm:h-[500px] sm:w-[550px] lg:h-[400px] lg:w-[350px] xl:mb-0 xl:h-[500px] xl:w-[440px] 2xl:w-[530px] [&:last-child]:mb-0"
    >
      <div className="h-[85%] w-full">
        <img
          src={image}
          alt={altTitle}
          draggable={false}
          className="h-full w-full rounded-t-2xl object-cover object-center duration-500 group-hover:scale-110 group-hover:brightness-[80%]"
        />
      </div>
      <div className="absolute flex h-[15%] w-full items-center justify-center rounded-b-2xl border-t-[0.5rem] border-orange-600 bg-white font-main text-xl tracking-wider duration-500 group-hover:bg-black group-hover:tracking-[0.4rem] group-hover:text-white">
        {title}
      </div>
    </Link>
  );
};

export default HomepageCard;
