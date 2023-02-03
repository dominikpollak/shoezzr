import { useEffect, useRef } from 'react';

interface ShoeNameAnimationProps {
  shoeName: string | undefined;
}

const ShoeNameAnimation: React.FC<ShoeNameAnimationProps> = ({ shoeName }) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nameRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    let iteration = 0;

    if (!shoeName || !nameRef.current) return;

    const interval = setInterval(() => {
      if (nameRef.current) {
        const newName = nameRef.current.innerHTML
          .split('')
          .map((letter, index) => {
            if (letter === ' ') return letter;
            if (index < iteration) {
              return shoeName[index];
            }

            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join('');

        if (iteration >= shoeName.length) {
          clearInterval(interval);
        }

        nameRef.current.innerHTML = newName;
      }
      iteration++;
    }, 40 - shoeName?.length * 0.5);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <h1
      ref={nameRef}
      className="box-border w-full break-words rounded-lg bg-orange-600 p-2 text-center font-mono text-[1.5rem] font-black uppercase text-black lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]"
    >
      {shoeName}
    </h1>
  );
};

export default ShoeNameAnimation;
