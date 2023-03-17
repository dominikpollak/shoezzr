import ItemCard from '../components/cards/ItemCard';
import sneakers from '../sneakers.json';

export default function Jordan() {
  return (
    <div className="relative h-auto w-full bg-gray-900">
      <div className="flex w-full items-center justify-center bg-black p-2 py-5 font-main text-[3rem] text-orange-600">
        Nike
      </div>
      <div className="grid h-auto w-full grid-cols-2 gap-6 px-6 pt-4 pb-32 sm:pt-12 md:grid-cols-3 lg:grid-cols-3 lg:px-16 xl:grid-cols-4 xl:px-24 2xl:grid-cols-5">
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
