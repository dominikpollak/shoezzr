import AdidasImg from '../assets/images/homepage/adidas.png';
import JordanImg from '../assets/images/homepage/jordan.png';
import NikeImg from '../assets/images/homepage/nike.jpg';
import HomeTextBanner from '../components/banners/HomeTextBanner';
import HomepageCard from '../components/cards/HomepageCard';
import SalesCard from '../components/cards/SalesCard';

export default function Home() {
  return (
    <div className="relative h-auto w-full pt-4">
      <div className="absolute left-0 h-[60%] w-[50%] skew-y-12 bg-gradient-to-br from-slate-800/[0.3] to-slate-500/[0.3]" />
      <div className="absolute right-0 h-[60%] w-[50%] -skew-y-12 bg-gradient-to-br from-orange-400/[0.3] to-orange-600/[0.3]" />
      <div className="relative my-10 flex h-[8%] w-full items-center justify-center">
        <HomeTextBanner />
      </div>
      <div className="homepage-body h-screen w-full pt-4">
        <section className="flex h-[190vh] flex-col items-center justify-around lg:h-[50%] lg:flex-row lg:items-start">
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
        <section className="flex h-[20%] w-full items-center justify-center">
          <SalesCard />
        </section>
      </div>
    </div>
  );
}
