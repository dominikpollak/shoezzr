import ItemCard from '../components/cards/ItemCard';
import shoes from '../shoes.json';

export default function Nike() {
  return (
    <div className="relative w-full h-auto bg-gray-900">
      <div className="w-full flex justify-center items-center text-white text-[3rem] font-main my-5 p-2">
        Nike
      </div>
      <div className="w-full h-auto py-12 px-24 grid grid-cols-4 gap-6">
        {shoes
          .filter(
            (shoe) =>
              shoe.brand.includes('Nike') &&
              !shoe.shoeName.includes('Hoodie') &&
              !shoe.shoeName.includes('Jacket')
          )
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
