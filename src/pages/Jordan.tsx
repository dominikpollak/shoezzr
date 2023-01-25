import ItemCard from '../components/cards/ItemCard';
import shoes from '../shoes.json';

export default function Men() {
  return (
    <div className="w-screen h-auto bg-gray-900">
      <div className="w-full flex justify-center items-center text-white text-[3rem] font-main my-5 p-2">
        Men shoes
      </div>
      <div className="grid grid-cols-4 gap-12 p-4 pr-8">
        {shoes
          .filter((shoe) => shoe.brand.includes('Jordan'))
          .map((shoe, index) => {
            return (
              <ItemCard
                key={index}
                img={shoe.thumbnail}
                name={shoe.shoeName}
                price={shoe.retailPrice}
                link={shoe._id}
                colors={shoe.colorway}
              />
            );
          })}
      </div>
    </div>
  );
}
