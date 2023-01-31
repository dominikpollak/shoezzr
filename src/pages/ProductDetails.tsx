import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShoeNameAnimation from '../components/animations/ShoeNameAnimation';
import ImageZoom from '../components/ImageZoom';
import sneakers from '../sneakers.json';

export default function ProductDetails() {
  const [shoeSize, setShoeSize] = useState<number>();
  const [shoeColor, setShoeColor] = useState<string>();
  const { slug } = useParams();
  const matchedShoe = sneakers.find((shoe) => shoe.slug === slug);
  //   const [colorSelection, setColorSelection] = useState<string>('');
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  console.log(shoeSize);
  useEffect(() => {
    descriptionRef.current &&
      (descriptionRef.current.innerHTML =
        matchedShoe?.story_html ||
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur dolorem blanditiis nobis molestias cum odit natus quisquam sit voluptatem a facere maiores, repudiandae libero dolorum animi laboriosam necessitatibus quam temporibus. <br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur dolorem blanditiis nobis molestias cum odit natus quisquam sit voluptatem a facere maiores, repudiandae libero dolorum animi laboriosam necessitatibus quam temporibus.');
  }, [descriptionRef, matchedShoe?.story_html]);

  return (
    <div className="h-screen w-screen font-main flex justify-center mt-[2rem] text-white">
      <main className="relative w-[90%] 2xl:w-[80%] h-[80%] 2xl:h-[75%] bg-white rounded-lg bg-black/[0.5]">
        <aside className="float-left w-[48%] h-[75%] flex justify-start items-center overflow-hidden bg-slate-50 rounded-md">
          <ImageZoom image={matchedShoe?.main_picture_url || ''} />
        </aside>
        <aside className="relative w-[50%] h-full float-right p-2">
          {/* Matrix animation of the shoe name*/}
          <ShoeNameAnimation shoeName={matchedShoe?.name} />
          <section className="p-4">
            <div className="text-center pt-4 flex justify-around w-[65%] 2xl:w-[70%] float-right text-[1.1rem] 2xl:text-[1.2rem]">
              <p className="flex items-center">
                Released: {matchedShoe?.release_year || 'Unknown'}
              </p>
              <p className="flex items-center">
                Designer: {matchedShoe?.designer || 'Unknown'}
              </p>
            </div>
          </section>
          <section className="p-4">
            <h2 className="mt-4 2xl:mt-16 text-black bg-white w-max px-1 mb-3 text-[1.1rem] 2xl:text-[1.2rem]">
              Description:
            </h2>
            <article
              ref={descriptionRef}
              className="bg-orange-600/[0.1] p-3 border-[1px] border-orange-600"
            />
            <p className="float-right p-3 text-[2rem]">
              $
              {matchedShoe?.retail_price_cents
                ? matchedShoe.retail_price_cents / 100
                : 0}
            </p>
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
                    className={
                      shoeColor === color
                        ? 'inline-block border-[1px] w-max px-1 m-1 bg-orange-600 cursor-pointer'
                        : 'inline-block border-[1px] w-max px-1 m-1 cursor-pointer'
                    }
                    onClick={(e) => setShoeColor(color)}
                  >
                    {color}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="">
            <h2 className="mt-8 text-black bg-white w-max mb-2 px-1 text-[1.1rem]">
              Sizes:
            </h2>

            <ul className="select-none">
              {matchedShoe?.size_range.slice(0, 10).map((size) => (
                <li
                  key={size}
                  className={
                    shoeSize === size
                      ? 'inline-block border-[1px] w-[2.8rem] text-center p-2 bg-orange-600 [&:nth-last-child(1)]:ml-0 cursor-pointer'
                      : 'inline-block border-[1px] w-[2.8rem] text-center p-2 [&:nth-last-child(1)]:ml-0 cursor-pointer'
                  }
                  onClick={(e) => setShoeSize(size)}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="absolute right-5 bottom-5 flex-col ">
          <div className="flex text-[1.2rem] ">
            <button className="bg-orange-600 text-black p-4 rounded-sm mr-3 hover:bg-orange-500">
              Add to cart
            </button>
            <button className="bg-orange-600 text-black p-4 rounded-sm hover:bg-orange-500">
              Favorite
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
