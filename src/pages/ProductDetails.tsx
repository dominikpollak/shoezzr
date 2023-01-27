import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import shoes from '../shoes.json';

export default function ProductDetails() {
  const { slug } = useParams();
  const matchedShoe = shoes.find((shoe) => shoe._id === slug);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

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
      iteration += 1;
    }, 30);

    return () => clearInterval(interval);
  });

  return (
    <div className="h-screen w-screen font-main flex justify-center mt-[2rem]">
      <main className="w-[90%] h-[80%] bg-white rounded-lg">
        <aside className="w-[50%] h-full bg-black/[0.9] float-right p-2">
          <h1
            ref={nameRef}
            className="text-center rounded-lg text-[2rem] uppercase text-white break-words"
          >
            {matchedShoe?.shoeName}
          </h1>
        </aside>
        <aside className="left-0 w-[50%] h-full p-2 flex  justify-center items-center">
          <img className="w-[85%]" src={matchedShoe?.thumbnail} alt="" />
        </aside>
      </main>
    </div>
  );
}
