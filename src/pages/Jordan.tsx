import ItemCard from '../components/cards/ItemCard';
import sneakers from '../sneakers.json';

export default function Jordan() {
  return (
    <div className="relative h-auto w-full bg-gray-900">
      <div className="my-5 flex w-full items-center justify-center p-2 font-main text-[3rem] text-white">
        Air Jordan
      </div>
      <div className="grid h-auto w-full grid-cols-2 gap-6 px-6 pt-12 pb-32 lg:grid-cols-4 lg:px-16 xl:px-24 2xl:grid-cols-5">
        {sneakers
          .filter((shoe) => shoe.brand_name.includes('Air Jordan'))
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
