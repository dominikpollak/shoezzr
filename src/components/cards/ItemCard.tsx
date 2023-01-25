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
  return (
    <Link
      to={link}
      className="relative flex flex-col bg-white rounded-lg p-2 box-border font-main"
    >
      <div className="w-auto">
        <img src={img} alt="" />
      </div>
      <section className="h-[30%] pl-2 flex flex-col justify-between border-t-4 border-orange-600">
        <div className="text-[1.2rem]">{name}</div>
        <div>${price}</div>
      </section>
      <section className="text-[0.9rem] flex justify-end">
        <div>{colors}</div>
      </section>
    </Link>
  );
};
export default ItemCard;
