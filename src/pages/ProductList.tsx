import ItemCard from '../components/cards/ItemCard';
import sneakers from '../sneakers.json';

interface ProductListProps {
  brandName: string;
}

const ProductList: React.FC<ProductListProps> = ({ brandName }) => {
  return (
    <div className="relative h-auto w-full bg-gray-900">
      <div className="flex w-full items-center justify-center bg-black p-2 py-6 font-main text-[2.2rem] text-orange-600 sm:py-10 sm:text-[3rem]">
        {brandName.charAt(0).toUpperCase() + brandName.slice(1)}
      </div>
      <div className="grid h-auto w-full grid-cols-2 gap-6 px-6 pb-32 pt-1 sm:grid-cols-3 lg:grid-cols-4 lg:px-16 xl:px-24 2xl:grid-cols-5">
        {sneakers
          .filter((shoe) => shoe.brand_name.includes(brandName))
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
};
export default ProductList;
