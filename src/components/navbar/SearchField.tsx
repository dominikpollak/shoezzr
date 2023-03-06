import { useEffect, useState, useRef } from 'react';
import SearchIcon from '../../assets/icons/search.svg';

export default function SearchField() {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
      setOpenSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
  return (
    <>
      <input
        className="hidden h-full w-full items-center rounded-md border-[0.2rem] border-black pl-2 text-black duration-150 focus:bg-black focus:text-white focus:outline-white sm:flex"
        type="text"
        placeholder="Search..."
      />
      <button className="flex h-full w-auto sm:hidden">
        <img
          src={SearchIcon}
          alt="Search icon"
          className="h-full w-full"
          onClick={() => setOpenSearch(true)}
        />
      </button>

      {openSearch && (
        <div className="fixed top-0 right-0 z-50 h-screen w-screen bg-black bg-opacity-60">
          <div
            ref={searchRef}
            className="absolute top-[50%] left-[50%] h-[5rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white shadow-lg"
          >
            <input
              className="h-full w-full items-center rounded-md border-[0.2rem] border-black pl-2 text-black duration-150"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
      )}
    </>
  );
}
