import { useEffect, useRef, useState } from 'react';
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from 'react-image-magnifiers';

interface ImageFocusProps {
  image: string | undefined;
}

const ImageFocus: React.FC<ImageFocusProps> = ({ image }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (event: MouseEvent) => {
    setCursorPos({ x: event.clientX, y: event.clientY });
  };

  //   const style = isZoomed
  //     ? imgRef.current && {
  //         transform: 'scale(1.5)',
  //         transform: translate(`${cursorPos.x - imgRef.current.offsetWidth}px,
  //             ${cursorPos.y - imgRef.current.offsetHeight}px`),
  //       }
  //     : {};
  //   const cssStyle = style || {};

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return document.removeEventListener('mousemove', handleMouseMove);
  });

  return (
    <>
      <div
        className="absolute h-[150px] w-[150px] border-2 border-black"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <img
        ref={imgRef}
        // style={cssStyle}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        className="w-[85%]"
        src={image}
        alt=""
      />
    </>
  );
};
export default ImageFocus;
