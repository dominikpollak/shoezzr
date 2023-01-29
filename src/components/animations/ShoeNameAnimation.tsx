import { useEffect, useRef } from 'react';

interface ShoeNameAnimationProps {
  shoeName: string | undefined;
}

const ShoeNameAnimation: React.FC<ShoeNameAnimationProps> = ({ shoeName }) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nameRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    const height = nameRef.current?.offsetHeight;
    nameRef.current?.style.setProperty('--height', `${height}px`);
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
    }, 40 - shoeName?.length * 0.4);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <h1
      ref={nameRef}
      className="rounded-lg text-center text-[2rem] box-border font-mono w-full break-words p-2 font-black uppercase text-black bg-orange-600"
    >
      {shoeName}
    </h1>
  );
};

export default ShoeNameAnimation;
