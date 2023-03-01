export default function HomeTextBanner() {
  return (
    <div className="relative select-none font-main text-[1.7rem] tracking-wide text-white md:text-[2.5rem]">
      Shoes that{' '}
      <span className="relative ml-2 inline-block before:absolute before:-inset-2 before:block before:-skew-y-6 before:bg-gradient-to-b before:from-orange-400 before:to-orange-600 before:ring-4 before:ring-black before:ring-offset-4">
        <span className="relative bg-gradient-to-b from-black to-slate-800 bg-clip-text text-transparent">
          imprezz
        </span>
      </span>
    </div>
  );
}
