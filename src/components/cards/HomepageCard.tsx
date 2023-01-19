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
    <Link to={link} className="w-[20%] h-[40%]">
      <div className="h-[90%] w-full rounded-lg">
        <img
          src={image}
          alt={altTitle}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-[15%] w-full flex justify-center items-center text-xl bg-white">
        {title}
      </div>
    </Link>
  );
};

export default HomepageCard;
