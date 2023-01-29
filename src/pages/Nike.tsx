import ItemCard from '../components/cards/ItemCard';
import sneakers from '../sneakers.json';

export default function Jordan() {
  return (
    <div className="relative w-full h-auto bg-gray-900">
      <div className="w-full flex justify-center items-center text-white text-[3rem] font-main my-5 p-2">
        Nike
      </div>
      <div className="w-full h-auto py-12 px-16 xl:px-24 grid grid-cols-3 lg:grid-cols-4 gap-6">
        {sneakers
          .filter((shoe) => shoe.brand_name.includes('Nike'))
          .map((shoe, index) => {
            return (
              <ItemCard
                key={index}
                img={shoe.main_picture_url}
                name={shoe.name}
                price={
                  shoe.retail_price_cents ? shoe.retail_price_cents / 100 : 0
                }
                link={shoe.slug}
                colors={shoe.details}
              />
            );
          })}
      </div>
    </div>
  );
}
