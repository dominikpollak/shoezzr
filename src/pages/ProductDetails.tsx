import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import shoes from '../shoes.json';

export default function ProductDetails() {
  const { slug } = useParams();
  const matchedShoe = shoes.find((shoe) => shoe._id === slug);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let releaseDate = matchedShoe?.releaseDate.split('-').reverse().join('.');
  if (releaseDate === '') releaseDate = 'unknown';
  let description = matchedShoe?.description;
  if (description === '' || description === '\n')
    description =
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur dolorem blanditiis nobis molestias cum odit natus quisquam sit voluptatem a facere maiores, repudiandae libero dolorum animi laboriosam necessitatibus quam temporibus.';

  useEffect(() => {
    window.scrollTo(0, 0);

    let iteration = 0;

    const interval = setInterval(() => {
      if (nameRef.current) {
        const newName = nameRef.current.innerText
          .split('')
          .map((letter, index) => {
            if (letter === ' ') return letter;
            if (index < iteration) {
              return matchedShoe?.shoeName[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join('');

        if (matchedShoe) {
          if (iteration >= matchedShoe?.shoeName.length) {
            clearInterval(interval);
          }
        }

        nameRef.current.innerText = newName;
      }
      iteration++;
    }, matchedShoe && 40 - matchedShoe.shoeName.length * 0.4);

    return () => clearInterval(interval);
  });

  return (
    <div className="h-screen w-screen font-main flex justify-center mt-[2rem] text-white ">
      <main className="w-[90%] h-[80%] bg-white rounded-lg">
        <aside className="w-[50%] h-full bg-black/[0.9] float-right p-2">
          <h1
            ref={nameRef}
            className="text-center rounded-lg text-[2rem] uppercase text-black bg-orange-600 break-words"
          >
            {matchedShoe?.shoeName}
          </h1>
          <div className="p-4">
            <span>Released:</span>
            <span> {releaseDate}</span>
            <h2 className="mt-4 text-black bg-white w-min px-1 mb-2 text-[1.1rem]">
              Description:
            </h2>
            <article>{description}</article>
          </div>
        </aside>
        <aside className="left-0 w-[50%] h-full p-2 flex  justify-center items-center">
          <img className="w-[85%]" src={matchedShoe?.thumbnail} alt="" />
        </aside>
      </main>
    </div>
  );
}
