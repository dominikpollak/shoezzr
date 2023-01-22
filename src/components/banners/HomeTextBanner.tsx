export default function HomeTextBanner() {
  return (
    <div className="relative text-white text-[2.5rem] font-main tracking-wide select-none">
      Shoes that{' '}
      <span className="ml-2 before:block before:absolute before:-inset-2 before:-skew-y-6 before:ring-4 before:ring-black before:ring-offset-4 before:bg-gradient-to-b before:from-orange-400 before:to-orange-600 relative inline-block">
        <span className="relative bg-clip-text text-transparent bg-gradient-to-b from-black to-slate-800">
          imprezz
        </span>
      </span>
    </div>
  );
}
