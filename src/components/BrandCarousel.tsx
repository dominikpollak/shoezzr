import AdidasLogo from '../assets/logos/adidas.png';
import ConverseLogo from '../assets/logos/converse.png';
import JordanLogo from '../assets/logos/jordan.svg';
import NikeLogo from '../assets/logos/nike.jpg';
import PumaLogo from '../assets/logos/puma.jpg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const BrandCarousel = () => {
  const logos = [
    {
      src: AdidasLogo,
    },
    {
      src: ConverseLogo,
    },
    {
      src: JordanLogo,
    },
    {
      src: NikeLogo,
    },
    {
      src: PumaLogo,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    pauseOnHover: false,
    autoplaySpeed: 0,
    cssEase: 'linear',
  };

  return (
    <div className="isolate z-[1000] h-full bg-white/100 pt-[1rem]">
      <Slider {...settings}>
        {logos.map((logo) => (
          <div className="">
            <img
              src={logo.src}
              alt=""
              className="h-[100px] w-auto md:h-[150px] 2xl:h-[200px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandCarousel;
