const NewsletterCard = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="h-full w-[90%] rounded-sm border-2 border-orange-600 bg-[#1e2737] font-main text-white sm:w-[400px]"
      >
        <div className="mb-2 flex w-full items-center justify-center bg-black text-center text-[1.7rem] font-extrabold text-orange-600 sm:text-[2rem]">
          FREE DISCOUNT !
        </div>
        <section className="p-5 text-[0.9rem] sm:text-base">
          <p className="text-center">
            Join our our newsletter and get a free $5 discount for your next
            purchase.
          </p>

          <label className="mt-8 flex w-full flex-col justify-center px-8 text-center">
            E-mail:
            <input
              type="text"
              className="mt-1 h-[2rem] rounded-sm border-2 border-black pl-2 text-black"
              required
            />
          </label>

          <div className="mt-8 flex w-full justify-center">
            <button
              type="submit"
              className="rounded-sm bg-orange-600 px-3 py-2 text-[1.2rem] font-bold leading-none text-black duration-150 hover:bg-orange-500 hover:tracking-wide"
            >
              GET THE GOODIES
            </button>
          </div>
        </section>
      </form>
    </>
  );
};

export default NewsletterCard;
