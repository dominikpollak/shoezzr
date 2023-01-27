import React from 'react';
import { Link } from 'react-router-dom';

interface ItemCardProps {
  img: string;
  name: string;
  price: number | undefined;
  link: string;
  colors: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  img,
  name,
  price,
  link,
  colors,
}) => {
  const colorArray = colors.split('/');
  const colorList = Array.from(new Set(colorArray));

  return (
    <Link
      to={link}
      className="group/body relative ring-4 ring-white hover:ring-offset-4 ring-offset-black flex flex-col bg-white rounded-md font-main duration-300"
    >
      <section className="p-6 w-auto h-[80%]">
        <img
          src={img}
          alt=""
          className=" group-hover/body:scale-110 duration-300"
        />
      </section>
      <div className="rounded-b-md group-hover/body:bg-black duration-300">
        <section className="h-[40%] p-2 pb-12 border-t-[0.4rem] border-orange-600 text-[1.2rem] leading-[1.5rem] capitalize group-hover/body:text-white">
          {name}
        </section>
        <section className="absolute left-2 bottom-1 text-[1.5rem] bg-black text-white px-2 rounded-md leading-[1.9rem] group-hover/body:text-black group-hover/body:bg-white">
          <span className="text-green-500 mr-1 text-[1.8rem]">$</span>
          {price}
        </section>
        <section className="group/colors absolute text-[1.1rem] bottom-1 right-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-blue-500 to-red-500 hover:from-yellow-400 hover:via-blue-400 hover:to-red-400 duration-200">
          Show colors
          <div className="colors absolute right-0 z-[70] opacity-0 whitespace-nowrap group-hover/colors:whitespace-normal group-hover/colors:w-[300px] group-hover/colors:opacity-100 text-white w-0 bg-black/[0.7] border-2 border-orange-600 p-2 origin-right duration-300">
            {colorList.map((color) => (
              <div className="w-auto p-1 border-b-[1px] text-transparent group-hover/colors:text-white delay-200 border-orange-600/[0.7] [&:nth-last-child(1)]:border-b-0 [&:nth-last-child(1)]:pb-0">
                {color}
              </div>
            ))}
          </div>
        </section>
      </div>
    </Link>
  );
};
export default ItemCard;
