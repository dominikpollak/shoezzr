import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import AdidasLogo from '../assets/logos/adidas.png';
import ConverseLogo from '../assets/logos/converse.png';
import JordanLogo from '../assets/logos/jordan.svg';
import NikeLogo from '../assets/logos/nike.jpg';
import PumaLogo from '../assets/logos/puma.jpg';

const BrandCarousel = () => {
  const autoplayOptions = {
    delay: 0,
    stopOnInteraction: false,
  };
  const [emblaRef] = useEmblaCarousel({ loop: true, speed: 0.1 }, [
    Autoplay(autoplayOptions),
  ]);

  return (
    <div className="isolate h-full overflow-hidden bg-white" ref={emblaRef}>
      <div className="flex h-full py-5">
        <div className="mr-[6rem] min-w-0 flex-shrink-0 flex-grow-0 basis-1/4 sm:mr-0 sm:basis-1/3">
          <img src={AdidasLogo} className="h-full w-auto" alt="" />
        </div>
        <div className="mr-[6rem] min-w-0 flex-shrink-0 flex-grow-0 basis-1/4 sm:mr-0 sm:basis-1/3">
          <img src={ConverseLogo} className="h-full w-auto" alt="" />
        </div>
        <div className="mr-[6rem] min-w-0 flex-shrink-0 flex-grow-0 basis-1/4 sm:mr-0 sm:basis-1/3">
          <img src={JordanLogo} className="h-full w-auto" alt="" />
        </div>
        <div className="mr-[6rem] min-w-0 flex-shrink-0 flex-grow-0 basis-1/4 sm:mr-0 sm:basis-1/3">
          <img src={NikeLogo} className="h-full w-auto" alt="" />
        </div>
        <div className="mr-[6rem] min-w-0 flex-shrink-0 flex-grow-0 basis-1/4 sm:mr-0 sm:basis-1/3">
          <img src={PumaLogo} className="h-full w-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;
