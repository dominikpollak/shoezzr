import { useEffect, useRef } from 'react';
import Magnifier from 'react-glass-magnifier';
import { useParams } from 'react-router-dom';
import ShoeNameAnimation from '../components/animations/ShoeNameAnimation';
import sneakers from '../sneakers.json';

export default function ProductDetails() {
  const { slug } = useParams();
  const matchedShoe = sneakers.find((shoe) => shoe.slug === slug);
  //   const [colorSelection, setColorSelection] = useState<string>('');
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    descriptionRef.current &&
      (descriptionRef.current.innerHTML =
        matchedShoe?.story_html ||
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur dolorem blanditiis nobis molestias cum odit natus quisquam sit voluptatem a facere maiores, repudiandae libero dolorum animi laboriosam necessitatibus quam temporibus.');
  }, [descriptionRef, matchedShoe?.story_html]);

  return (
    <div className="h-screen w-screen font-main flex justify-center mt-[2rem] text-white">
      <main className="relative w-[90%] h-[80%] bg-white rounded-lg bg-black/[0.5]">
        <aside className="float-left w-[50%] h-[75%] flex justify-center items-start overflow-hidden">
          <Magnifier
            imageUrl={matchedShoe?.main_picture_url || ''}
            imgAlt="small image"
            zoomFactor={2}
            glassDimension={250}
            largeImageUrl={matchedShoe?.main_picture_url || ''}
            glassBorderColor="#ea580c"
            glassBorderWidth={2}
          />
        </aside>
        <aside className="relative w-[50%] h-full float-right p-2">
          {/* Matrix animation of the shoe name*/}
          <ShoeNameAnimation shoeName={matchedShoe?.name} />
          <section className="p-4">
            <div className="text-center pt-2">
              <p>Released: {matchedShoe?.release_year || 'Unknown'}</p>
              <p>Designer: {matchedShoe?.designer || 'Unknown'}</p>
            </div>
            <h2 className="mt-4 text-black bg-white w-max px-1 mb-3 text-[1.1rem]">
              Description:
            </h2>
            <article
              ref={descriptionRef}
              className="bg-orange-600/[0.1] p-3 border-[1px] border-orange-600"
            />
          </section>
        </aside>
        <section className="absolute bottom-0 left-5 h-[25%] w-[65%] flex justify-between items-center">
          <div>
            <h2 className="mt-8 text-black bg-white w-max px-1 mb-2 text-[1.1rem]">
              Colors variants:
            </h2>
            <ul>
              {matchedShoe?.details.split('/').map((color, index) => {
                return (
                  <li
                    key={index}
                    className="inline-block border-[1px] w-max px-1 m-1 [&:nth-last-child(1)]:ml-0"
                  >
                    {color}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 className="mt-8 text-black bg-white w-max px-1 ml-1 mb-2 text-[1.1rem]">
              Sizes:
            </h2>
            <ul>
              {matchedShoe?.size_range.map((size) => (
                <li className="inline-block border-[1px] w-max text-center p-2 m-1 [&:nth-last-child(1)]:ml-0 ">
                  {size}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
