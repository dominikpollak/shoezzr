import { Link } from 'react-router-dom';
import Socials from './Socials';

const Footer = () => {
  return (
    <div className="relative bottom-0 mt-[8rem] left-0 flex h-[7vh] w-full justify-between border-t-2 border-orange-600 bg-[#1e2737] font-main">
      <div className="ml-2 flex h-full w-[60%] items-center justify-between text-[0.7rem] text-orange-600 md:ml-7 lg:w-[40%] md:text-base">
        <p className="text-white">©2023 Shoezzr</p>
        <Link className="text-center duration-150 hover:brightness-150" to="#">
          Cookies
        </Link>
        <Link className="text-center duration-150 hover:brightness-150" to="#">
          Terms of agreement
        </Link>
        <Link className="text-center duration-150 hover:brightness-150" to="#">
          GDPR
        </Link>
      </div>
      <Socials />
    </div>
  );
};

export default Footer;
