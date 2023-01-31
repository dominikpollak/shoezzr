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
  const colorList = Array.from(new Set(colors.split('/')));
  return (
    <Link
      to={link}
      className="group/body relative ring-4 ring-white hover:ring-offset-4 ring-offset-black flex flex-col bg-white rounded-md font-main duration-300"
    >
      <section className="p-4 w-auto min-h-[200px] overflow-hidden">
        <img
          src={img}
          alt=""
          className="w-[90%] group-hover/body:scale-110 duration-300"
        />
      </section>
      <div className="h-[60%] lg:h-[40%] rounded-b-md group-hover/body:bg-black duration-300">
        <section className="p-2 pb-12 border-t-[0.4rem] border-orange-600 lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] leading-[1.5rem] text-center capitalize group-hover/body:text-white">
          {name}
        </section>
        <section className="absolute left-2 bottom-1 lg:text-[1.3rem] xl:text-[1.5rem] bg-black text-white px-2 rounded-md leading-[1.9rem] group-hover/body:text-black group-hover/body:bg-white">
          <span className="text-green-500 mr-1 lg:text-[1.5rem] xl:text-[1.8rem]">
            $
          </span>
          {price}
        </section>
        <section className="group/colors absolute text-[1.1rem] bottom-1 right-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-blue-500 to-red-500 hover:from-yellow-400 hover:via-blue-400 hover:to-red-400 duration-200">
          Show colors
          <div
            className="absolute flex flex-col justify-around right-0 z-[70] opacity-0 group-hover/colors:w-[250px] group-hover/colors:opacity-100 text-white w-0 bg-black/[0.7] border-2 border-orange-600 p-2 origin-right duration-300 overflow-y-hidden"
            style={{ height: `${3.7 * colorList.length}rem` }}
          >
            {colorList.map((color, index) => (
              <>
                <div className="w-auto p-1 text-transparent capitalize group-hover/colors:delay-300 group-hover/colors:text-white [&:nth-last-child(1)]:pb-0">
                  {color}
                </div>
                {index !== colors.length - 1 && (
                  <div className="h-[1px] bg-orange-600/[0.7] w-full [&:nth-last-child(1)]:hidden" />
                )}
              </>
            ))}
          </div>
        </section>
      </div>
    </Link>
  );
};
export default ItemCard;
