import { useParams } from 'react-router-dom';
import ItemCard from '../components/cards/ItemCard';
import sneakers from '../sneakers.json';

const Search = () => {
  const { searchParams } = useParams();
  const searchedShoes = sneakers.filter(
    (shoe) =>
      shoe.name
        .toLowerCase()
        .includes(searchParams?.toLowerCase().trim() || '') ||
      shoe.brand_name
        .toLowerCase()
        .includes(searchParams?.toLowerCase().trim() || '')
  );
  console.log(searchParams);

  return (
    <>
      <div className="my-5 flex w-full items-center justify-center p-2 font-main text-[3rem] text-white">
        Search results
      </div>
      <div className="grid h-auto w-full grid-cols-2 gap-6 px-6 pt-4 pb-32 sm:pt-12 md:grid-cols-3 lg:grid-cols-3 lg:px-16 xl:grid-cols-4 xl:px-24 2xl:grid-cols-5">
        {searchedShoes.map((shoe, index) => {
          return (
            <ItemCard
              key={index}
              img={shoe.main_picture_url}
              name={shoe.name}
              price={
                shoe.retail_price_cents ? shoe.retail_price_cents / 100 : 0
              }
              link={`/${shoe.brand_name.toLowerCase()}/${shoe.slug}`}
              colors={shoe.details}
            />
          );
        })}
      </div>
      {searchedShoes.length === 0 && (
        <div className="flex h-full w-full items-center justify-center font-main text-[2rem] text-white">
          No results found
        </div>
      )}
    </>
  );
};

export default Search;
