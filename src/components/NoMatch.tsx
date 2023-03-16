import SadEmoji from '../assets/icons/sad-emoji.svg';

export default function NoMatch() {
  return (
    <div className="h-screen w-screen flex justify-center mt-[5rem] font-main text-white text-[2rem]">
      <div className="w-[50%] text-center">
        Sorry, this page doesn't exist.
        <div>
          <img className="invert w-[15%] mx-auto mt-4" src={SadEmoji} alt="" />
        </div>
      </div>
    </div>
  );
}
