import { useEffect, useRef, useState } from 'react';
import Magnifier from 'react-glass-magnifier';
import { useParams } from 'react-router-dom';
import ShoeNameAnimation from '../components/animations/ShoeNameAnimation';
import ImageZoom from '../components/ImageZoom';
import sneakers from '../sneakers.json';

export default function ProductDetails() {
  const [shoeSize, setShoeSize] = useState<number>();
  const { slug } = useParams();
  const matchedShoe = sneakers.find((shoe) => shoe.slug === slug);
  //   const [colorSelection, setColorSelection] = useState<string>('');
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  console.log(shoeSize);
  useEffect(() => {
    descriptionRef.current &&
      (descriptionRef.current.innerHTML =
        matchedShoe?.story_html ||
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur dolorem blanditiis nobis molestias cum odit natus quisquam sit voluptatem a facere maiores, repudiandae libero dolorum animi laboriosam necessitatibus quam temporibus.');
  }, [descriptionRef, matchedShoe?.story_html]);

  return (
    <div className="h-screen w-screen font-main flex justify-center mt-[2rem] text-white">
      <main className="relative w-[90%] h-[80%] bg-white rounded-lg bg-black/[0.5]">
        <aside className="float-left w-[50%] h-[75%] flex justify-start items-center overflow-hidden bg-white">
          <ImageZoom image={matchedShoe?.main_picture_url || ''} />
        </aside>
        <aside className="relative w-[50%] h-full float-right p-2">
          {/* Matrix animation of the shoe name*/}
          <ShoeNameAnimation shoeName={matchedShoe?.name} />
          <section className="p-4">
            <div className="text-center pt-4 flex justify-around w-[65%] float-right">
              <p>Released: {matchedShoe?.release_year || 'Unknown'}</p>
              <p>Designer: {matchedShoe?.designer || 'Unknown'}</p>
            </div>
            <h2 className="mt-8 text-black bg-white w-max px-1 mb-3 text-[1.1rem]">
              Description:
            </h2>
            <article
              ref={descriptionRef}
              className="bg-orange-600/[0.1] p-3 border-[1px] border-orange-600"
            />
          </section>
        </aside>
        <section className="absolute bottom-0 left-5 h-[25%] w-[60%] flex justify-between items-center">
          <div className="w-[35%]">
            <h2 className="mt-8 ml-1 text-black bg-white w-max px-1 mb-2 text-[1.1rem]">
              Colors variants:
            </h2>
            <ul>
              {matchedShoe?.details.split('/').map((color, index) => {
                return (
                  <li
                    key={index}
                    className="inline-block border-[1px] w-max px-1 m-1 "
                  >
                    {color}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="">
            <div className="flex items-center mb-2 w-full justify-between">
              <h2 className="mt-8 text-black bg-white px-1 text-[1.1rem]">
                Sizes:
              </h2>
              <h2 className="bg-white text-black p-1 px-3 text-[1.3rem]">?</h2>
            </div>
            <ul className="">
              {matchedShoe?.size_range.slice(0, 10).map((size) => (
                <li
                  className="inline-block border-[1px] w-[2.8rem] text-center p-2 [&:nth-last-child(1)]:ml-0 cursor-pointer"
                  onClick={(e: any) => setShoeSize(e.target.value)}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="absolute right-5 bottom-5 flex text-[1.2rem]">
          <p className="">
            $
            {matchedShoe?.retail_price_cents
              ? matchedShoe.retail_price_cents / 100
              : 0}
          </p>
          <button className="bg-orange-600 text-black p-4 rounded-sm mr-1 hover:bg-orange-500">
            Add to cart
          </button>
          <button className="bg-orange-600 text-black p-4 rounded-sm hover:bg-orange-500">
            Favorite
          </button>
        </section>
      </main>
    </div>
  );
}
