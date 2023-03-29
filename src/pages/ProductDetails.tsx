import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ShoeNameAnimation from '../components/animations/ShoeNameAnimation';
import ImageZoom from '../components/ImageZoom';
import { addToCart } from '../features/cartSlice';
import sneakers from '../sneakers.json';
import type { CartItem } from '../features/cartSlice';

export default function ProductDetails() {
  const { slug } = useParams();
  const [shoeSize, setShoeSize] = useState<number>();
  const [shoeColor, setShoeColor] = useState<string>();
  const matchedShoe = sneakers.find((shoe) => shoe.slug === slug);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const dispatch = useDispatch();

  const handleAddToCart = (product: object) => {
    dispatch(addToCart(product as CartItem));
  };

  useEffect(() => {
    descriptionRef.current &&
      (descriptionRef.current.innerHTML =
        matchedShoe?.story_html ||
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur dolorem blanditiis nobis molestias cum odit natus quisquam sit voluptatem a facere maiores, repudiandae libero dolorum animi laboriosam necessitatibus quam temporibus. <br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur dolorem blanditiis nobis molestias cum odit natus quisquam sit voluptatem a facere maiores, repudiandae libero dolorum animi laboriosam necessitatibus quam temporibus.');
  }, [descriptionRef, matchedShoe?.story_html]);

  return (
    <div className="mt-[1rem] flex h-auto w-screen justify-center font-main text-white sm:h-screen">
      <main className="relative flex h-auto w-full flex-col rounded-lg bg-white bg-black/[0.5] p-2 pb-10 sm:flex-row sm:p-0 sm:pb-2 md:h-[70%] lg:h-[60%] lg:w-[90%] xl:h-[85%] 2xl:w-[80%]">
        <aside className="hidden w-full items-center justify-start overflow-hidden rounded-md bg-slate-50 sm:float-left sm:flex sm:h-[40%] sm:w-[49%] md:h-1/2 lg:h-[60%] xl:h-[75%]">
          <ImageZoom image={matchedShoe?.main_picture_url || ''} />
        </aside>

        <aside className="h-auto w-full sm:float-right sm:ml-auto sm:h-full sm:w-[50%] sm:p-2">
          {/* Matrix animation of the shoe name*/}
          <ShoeNameAnimation shoeName={matchedShoe?.name} />

          <section className="mt-2 flex h-auto w-full items-center justify-start overflow-hidden rounded-md bg-slate-50 sm:hidden">
            <ImageZoom image={matchedShoe?.main_picture_url || ''} />
          </section>

          <section className="p-4">
            <div className="float-right mr-2 flex w-full pt-4 text-center text-[1rem] lg:w-[85%] xl:w-[65%] xl:text-[1.1rem] 2xl:w-[70%] 2xl:text-[1.2rem]">
              <p className="flex w-1/2 items-center">
                <span className="mr-2 text-orange-600">Released: </span>
                {matchedShoe?.release_year || 'Unknown'}
              </p>
              <p className="flex w-1/2 items-center">
                <span className="mr-2 text-orange-600">Designer: </span>
                {matchedShoe?.designer || 'Unknown'}
              </p>
            </div>
          </section>

          <section className="py-4 sm:pr-4">
            <h2 className="mt-12 mb-3 w-max bg-white px-1 text-[1.1rem] text-black xl:mt-6 2xl:text-[1.2rem]">
              Description:
            </h2>
            <article
              ref={descriptionRef}
              className="border-[1px] border-orange-600 bg-orange-600/[0.1] p-3 text-[0.95rem] lg:text-base"
            />
            <div className="mt-2 flex w-full justify-between">
              <div className="flex flex-col py-3">
                <p>
                  <span className="text-orange-600">Size: </span>
                  {shoeSize}
                </p>
                <p>
                  <span className="text-orange-600">Color: </span>
                  <span className="capitalize">{shoeColor}</span>
                </p>
              </div>
              <p className="p-3 text-[2rem]">
                $
                {matchedShoe?.retail_price_cents
                  ? matchedShoe.retail_price_cents / 100
                  : 0}
              </p>
            </div>
          </section>
        </aside>

        <div className="relative flex w-full flex-col items-start justify-between pb-12 sm:absolute sm:bottom-[2rem] sm:left-5 sm:h-[40%] sm:w-[40%] md:h-[35%] md:w-[55%] xl:bottom-0 xl:h-[23%] xl:w-[60%] xl:flex-row xl:items-center 2xl:w-[50%]">
          <div className="w-[50%] xl:w-[35%]">
            <h2 className="mt-8 ml-1 mb-2 w-max bg-white px-1 text-[1.1rem] text-black">
              Colors variants:
            </h2>
            <ul>
              {matchedShoe?.details.split('/').map((color, index) => {
                return (
                  <li
                    key={index}
                    className={
                      shoeColor === color
                        ? 'm-1 inline-block w-max cursor-pointer border-[1px] bg-orange-600 px-1'
                        : 'm-1 inline-block w-max cursor-pointer border-[1px] px-1'
                    }
                    onClick={(e) => setShoeColor(color)}
                  >
                    {color}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="pb-12 sm:pb-0">
            <h2 className="mt-8 mb-2 w-max bg-white px-1 text-[1.1rem] text-black">
              Sizes:
            </h2>

            <ul className="select-none">
              {matchedShoe?.size_range.slice(0, 10).map((size) => (
                <li
                  key={size}
                  className={
                    shoeSize === size
                      ? 'inline-block w-[2.8rem] cursor-pointer border-[1px] bg-orange-600 p-2 text-center [&:nth-last-child(1)]:ml-0'
                      : 'inline-block w-[2.8rem] cursor-pointer border-[1px] p-2 text-center [&:nth-last-child(1)]:ml-0'
                  }
                  onClick={(e) => setShoeSize(size)}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute right-1 bottom-0 mt-4 pb-4 sm:hidden">
            <div className="flex text-[1.2rem] ">
              <button className="mr-3 rounded-sm bg-orange-600 p-4 text-black hover:bg-orange-500">
                Add to cart
              </button>
              <button className="rounded-sm bg-orange-600 p-4 text-black hover:bg-orange-500">
                Favorite
              </button>
            </div>
          </div>
        </div>

        <section className="absolute right-5 bottom-5 hidden sm:block">
          <div className="flex text-[1.2rem] ">
            <button
              onClick={() => handleAddToCart(matchedShoe || {})}
              className="mr-3 rounded-sm bg-orange-600 p-4 text-black hover:bg-orange-500"
            >
              Add to cart
            </button>
            <button className="rounded-sm bg-orange-600 p-4 text-black hover:bg-orange-500">
              Favorite
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
