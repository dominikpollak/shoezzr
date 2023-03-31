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
      className="group/body relative flex flex-col rounded-md bg-white font-main ring-4 ring-white ring-offset-black duration-300 hover:ring-offset-4"
    >
      <div className="w-full overflow-hidden sm:min-h-[160px] sm:p-4 sm:pt-0 xl:min-h-[210px] 2xl:min-h-[230px]">
        <img
          src={img}
          alt=""
          className="w-full duration-300 group-hover/body:scale-110 sm:w-[90%]"
        />
      </div>

      <div className="h-[60%] rounded-b-md duration-300 group-hover/body:bg-black lg:h-[70%]">
        <section className="border-t-[0.2rem] border-orange-600 p-2 pb-8 text-center text-[0.9rem] capitalize leading-[1.5rem] group-hover/body:text-white sm:border-t-[0.4rem] sm:text-[1.1rem] 2xl:text-[1.2rem]">
          {name}
        </section>
        <section className="absolute left-2 bottom-1 rounded-md bg-black px-2 text-[1rem] leading-[1.9rem] text-white group-hover/body:bg-white group-hover/body:text-black sm:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.5rem]">
          <span className="mr-1 text-[1.3rem] text-green-500 sm:text-[1.5rem] lg:text-[1.5rem] xl:text-[1.8rem]">
            $
          </span>
          {price}
        </section>
        <section className="group/colors absolute bottom-1 right-4 hidden bg-gradient-to-r from-yellow-500 via-blue-500 to-red-500 bg-clip-text text-[1.1rem] text-transparent duration-200 hover:from-yellow-400 hover:via-blue-400 hover:to-red-400 sm:block">
          Show colors
          <div
            className="absolute right-0 z-[70] flex w-0 origin-right flex-col justify-around overflow-y-hidden border-2 border-orange-600 bg-black/[0.7] p-2 text-white opacity-0 duration-300 group-hover/colors:w-[250px] group-hover/colors:opacity-100"
            style={{ height: `${3.7 * colorList.length}rem` }}
          >
            {colorList.map((color, index) => (
              <>
                <div className="w-auto p-1 capitalize text-transparent group-hover/colors:text-white group-hover/colors:delay-300 [&:nth-last-child(1)]:pb-0">
                  {color}
                </div>
                {index !== colors.length - 1 && (
                  <div className="h-[1px] w-full bg-orange-600/[0.7] [&:nth-last-child(1)]:hidden" />
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
