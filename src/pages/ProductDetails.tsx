import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShoeNameAnimation from '../components/animations/ShoeNameAnimation';
import sneakers from '../sneakers.json';
import ImageZoom from '../components/ImageZoom';

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
    <div className="mt-[2rem] flex h-screen w-screen justify-center font-main text-white">
      <main className="relative h-[95%] w-[95%] rounded-lg bg-white bg-black/[0.5] lg:h-[85%] lg:w-[90%] xl:h-[80%] 2xl:h-[75%] 2xl:w-[80%]">
        <aside className="float-left flex h-auto w-[49%] items-center justify-start overflow-hidden rounded-md bg-slate-50 lg:h-[60%] xl:h-[75%]">
          <ImageZoom image={matchedShoe?.main_picture_url || ''} />
        </aside>
        <aside className="relative float-right h-full w-[50%] p-2">
          {/* Matrix animation of the shoe name*/}
          <ShoeNameAnimation shoeName={matchedShoe?.name} />
          <section className="p-4">
            <div className="float-right flex w-full justify-around pt-4 text-center text-[1rem] lg:w-[85%] xl:w-[65%] xl:text-[1.1rem] 2xl:w-[70%] 2xl:text-[1.2rem]">
              <p className="flex items-center">
                Released: {matchedShoe?.release_year || 'Unknown'}
              </p>
              <p className="flex items-center">
                Designer: {matchedShoe?.designer || 'Unknown'}
              </p>
            </div>
          </section>
          <section className="py-4 pr-4">
            <h2 className="mt-12 mb-3 w-max bg-white px-1 text-[1.1rem] text-black xl:mt-6 2xl:text-[1.2rem]">
              Description:
            </h2>
            <article
              ref={descriptionRef}
              className="border-[1px] border-orange-600 bg-orange-600/[0.1] p-3 text-[0.95rem] lg:text-base"
            />
            <div className="mt-2 flex w-full justify-between">
              <div className="flex flex-col py-3">
                <p>Size: {shoeSize}</p>
                <p>
                  Color: <span className="capitalize">{shoeColor}</span>
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
        <section className="absolute bottom-[2rem] left-5 flex h-[40%] w-[40%] flex-col items-start justify-between md:h-[35%] md:w-[55%] xl:bottom-0 xl:h-[23%] xl:w-[60%] xl:flex-row xl:items-center 2xl:w-[50%]">
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
          <div className="">
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
        </section>
        <section className="absolute right-5 bottom-5 flex-col ">
          <div className="flex text-[1.2rem] ">
            <button className="mr-3 rounded-sm bg-orange-600 p-4 text-black hover:bg-orange-500">
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
