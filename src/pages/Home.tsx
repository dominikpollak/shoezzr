import JordanImg from '../assets/images/homepage/jordan.png';
import NikeImg from '../assets/images/homepage/nike.jpg';
import AdidasImg from '../assets/images/homepage/adidas.png';
import HomeTextBanner from '../components/banners/HomeTextBanner';
import HomepageCard from '../components/cards/HomepageCard';
import SalesCard from '../components/cards/SalesCard';

export default function Home() {
  return (
    <div>
      <div className="h-[2000px] w-screen box-border overflow-x-hidden">
        <div className="absolute bg-gradient-to-br from-slate-800/[0.3] to-slate-500/[0.3] skew-y-12 w-[50%] h-[60%]" />
        <div className="absolute bg-gradient-to-br from-orange-400/[0.3] to-orange-600/[0.3] -skew-y-12 w-[50%] h-[60%] right-0" />
        <div className="relative flex justify-center items-center h-[8%]">
          <HomeTextBanner />
        </div>
        <div className="homepage-body h-screen w-full pt-4">
          <section className="flex justify-around items-start h-[50%]">
            <HomepageCard
              image={JordanImg}
              link={'/jordan'}
              title={'Jordan'}
              altTitle={'jordan'}
            />
            <HomepageCard
              image={NikeImg}
              link={'/nike'}
              title={'Nike'}
              altTitle={'nike'}
            />
            <HomepageCard
              image={AdidasImg}
              link={'/adidas'}
              title={'Adidas'}
              altTitle={'adidas'}
            />
          </section>
          <section className="w-full h-[20%] flex justify-center items-center">
            <SalesCard />
          </section>
        </div>
      </div>
    </div>
  );
}
