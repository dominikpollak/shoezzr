import { useParams } from 'react-router-dom';
import Magnifier from 'react-glass-magnifier';
import ShoeNameAnimation from '../components/animations/ShoeNameAnimation';
import shoes from '../shoes.json';

export default function ProductDetails() {
  const { slug } = useParams();
  const matchedShoe = shoes.find((shoe) => shoe._id === slug);
  //   const [colorSelection, setColorSelection] = useState<string>('');
  let releaseDate = matchedShoe?.releaseDate.split('-').reverse().join('.');
  if (releaseDate === '') releaseDate = 'unknown';
  let description = matchedShoe?.description;
  if (description === '' || description === '\n')
    description =
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur dolorem blanditiis nobis molestias cum odit natus quisquam sit voluptatem a facere maiores, repudiandae libero dolorum animi laboriosam necessitatibus quam temporibus.';
  const colorArray = matchedShoe?.colorway.split('/');
  const colorList = Array.from(new Set(colorArray));
  const sizeList = [42, 43, 44, 45.5, 46];

  return (
    <div className="h-screen w-screen font-main flex justify-center mt-[2rem] text-white">
      <main className="relative w-[90%] h-[80%] bg-white rounded-lg bg-black/[0.5]">
        <aside className="float-left w-[50%] h-[75%] flex justify-center items-start overflow-hidden">
          <Magnifier
            imageUrl={matchedShoe?.thumbnail || ''}
            imgAlt="small image"
            zoomFactor={2}
            glassDimension={250}
            largeImageUrl={matchedShoe?.thumbnail || ''}
            glassBorderColor="#ea580c"
            glassBorderWidth={2}
          />
        </aside>
        <aside className="relative w-[50%] h-full float-right p-2">
          {/* Matrix animation of the shoe name*/}
          <ShoeNameAnimation shoeName={matchedShoe?.shoeName} />
          <section className="p-4">
            <div className="text-center pt-2">Released: {releaseDate}</div>
            <h2 className="mt-4 text-black bg-white w-max px-1 mb-3 text-[1.1rem]">
              Description:
            </h2>
            <article className="bg-orange-600/[0.1] p-3 border-[1px] border-orange-600">
              {description}
            </article>
          </section>
        </aside>
        <section className="absolute bottom-0 left-5 h-[25%] w-[65%] flex justify-between items-center">
          <div>
            <h2 className="mt-8 text-black bg-white w-max px-1 mb-2 text-[1.1rem]">
              Colors variants:
            </h2>
            <ul>
              {colorList.map((color, index) => {
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
              {sizeList.map((size) => (
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
