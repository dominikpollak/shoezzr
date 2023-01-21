import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
import KidsCard from '../assets/images/homepage/kids.jpeg';
import MenCard from '../assets/images/homepage/men.jpg';
import WomenCard from '../assets/images/homepage/women.jpg';
import HomeTextBanner from '../components/banners/HomeTextBanner';
import HomepageCard from '../components/cards/HomepageCard';

export default function Home() {
  useEffect(() => {
    anime({
      targets: '.bodydiv .card',
      scale: [0, 1],
      duration: 500,
      easing: 'easeInOutQuad',
      delay: 3650,
    });
  });
  return (
    <div>
      <div className="h-[2000px] bg-gray-900 w-screen box-border overflow-x-hidden">
        <div className="absolute bg-gradient-to-br from-slate-800/[0.3] to-slate-500/[0.3] skew-y-12 w-[50%] h-[60%]" />
        <div className="absolute bg-gradient-to-br from-orange-400/[0.3] to-orange-600/[0.3] -skew-y-12 w-[50%] h-[60%] right-0" />
        <div className="relative flex justify-center items-center h-[11%]">
          <HomeTextBanner />
        </div>
        <div className="bodydiv h-screen w-full flex justify-around items-start pt-4 bg-gray-900 box-border overflow-x-hidden">
          <HomepageCard
            image={MenCard}
            link={'/men'}
            title={'Men'}
            altTitle={'men'}
          />
          <HomepageCard
            image={WomenCard}
            link={'/women'}
            title={'Women'}
            altTitle={'women'}
          />
          <HomepageCard
            image={KidsCard}
            link={'/kids'}
            title={'Kids'}
            altTitle={'kids'}
          />
          {/* <HomepageCard
          image={}
          link={'/sales'}
          title={'Sales'}
          altTitle={'sales'}
        /> */}
        </div>
      </div>
    </div>
  );
}
