export const NewsletterForm = () => {
  return (
    <form className="flex-1 flex flex-col items-center w-full gap-y-6 lg:flex-row lg:items-center lg:gap-x-10">
      <input
        type="text"
        placeholder="Enter your email"
        className="input text-base text-white placeholder:text-white placeholder:text-base"
      />
      <button className="btn bg-violet hover:bg-white hover:text-darkblue duration-300">
        Subscribe
      </button>
    </form>
  );
};
