export const CalcForm = () => {
  return (
    <div
      className=" bg-white w-full max-w-[942px] mx-auto rounded-2xl text-darkblue p-12 shadow-primary"
      data-aos="fade-up"
      data-aos-offset="500"
    >
      <form
        action=""
        className="flex flex-col items-center space-y-12 lg:flex-row lg:justify-between lg:space-y-0"
      >
        <input
          type="text"
          placeholder="Enter your hash"
          className="placeholder:text-darkblue input"
        />
        <select name="" id="" className="select">
          <option value="">TH/s</option>
          <option value="">H/s</option>
          <option value="">KH/s</option>
          <option value="">MH/s</option>
          <option value="">GH/s</option>
        </select>

        <button className="btn text-white px-8">Calculate</button>
      </form>

      <div className="mt-24">
        <p className="text-blue font-medium mb-4">ESTIMATED 24 HOUR REVENUE:</p>
        <p className="text-[32px] font-bold mb-3">
          0.055 130 59 ETH <span className="text-blue">($1275)</span>
        </p>
        <p className="text-gray-500 tracking-wider">
          Revenue will change based on mining difficulty and Ethereum price.
        </p>
      </div>
    </div>
  );
};
