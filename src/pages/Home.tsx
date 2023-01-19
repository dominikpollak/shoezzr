import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
import KidsCard from '../assets/images/homepage/kids.jpeg';
import MenCard from '../assets/images/homepage/men.jpg';
import WomenCard from '../assets/images/homepage/women.jpg';
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
        <div className="bodydiv h-screen w-full flex justify-around items-center bg-gray-900 border-t-[0.5rem] border-orange-600 box-border overflow-x-hidden">
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
