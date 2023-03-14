import { Link } from 'react-router-dom';
import FacebookIcon from '../../assets/icons/socials/facebook.svg';
import InstagramIcon from '../../assets/icons/socials/instagram.svg';
import PinterestIcon from '../../assets/icons/socials/pinterest.svg';
import TwitterIcon from '../../assets/icons/socials/twitter.svg';

const Socials = () => {
  return (
    <div className="mr-1 flex h-full w-[30%] items-center justify-around sm:mr-0 lg:w-[20%] ">
      <Link to="#" className="duration-150 hover:brightness-150">
        <img src={FacebookIcon} alt="" />
      </Link>
      <Link to="#" className="duration-150 hover:brightness-150">
        <img src={InstagramIcon} alt="" />
      </Link>
      <Link to="#" className="duration-150 hover:brightness-150">
        <img src={TwitterIcon} alt="" />
      </Link>
      <Link to="#" className="duration-150 hover:brightness-150">
        <img src={PinterestIcon} alt="" />
      </Link>
    </div>
  );
};

export default Socials;
