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
    const interval = setInterval(() => {
      let iterations = 0;
      if (nameRef.current) {
        const substrings = nameRef.current.innerText.split('');
        const newText = substrings
          .map((substring) => {
            if (substring === ' ') {
              return substring;
            } else {
              return substring
                .split('')
                .map(
                  (letter) =>
                    letters[Math.floor(Math.random() * letters.length)]
                );
            }
          })
          .join('');
        nameRef.current.innerText = newText;
      }
      if (iterations >= 9) clearInterval(interval);

      iterations++;
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen font-main flex justify-center mt-[2rem]">
      <main className="w-[90%] h-[80%] bg-white rounded-lg">
        <aside className="w-[50%] h-full bg-black/[0.8] float-right p-2">
          <h1
            ref={nameRef}
            className="text-center rounded-tr-lg text-[2rem] uppercase text-white break-words"
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
