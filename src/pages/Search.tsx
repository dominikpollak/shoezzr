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
    <div className="grid h-auto w-full grid-cols-2 gap-6 px-6 pt-4 pb-32 sm:pt-12 md:grid-cols-3 lg:grid-cols-3 lg:px-16 xl:grid-cols-4 xl:px-24 2xl:grid-cols-5">
      {searchedShoes.map((shoe, index) => {
        return (
          <ItemCard
            key={index}
            img={shoe.main_picture_url}
            name={shoe.name}
            price={shoe.retail_price_cents ? shoe.retail_price_cents / 100 : 0}
            link={shoe.slug}
            colors={shoe.details}
          />
        );
      })}
    </div>
  );
};

export default Search;
