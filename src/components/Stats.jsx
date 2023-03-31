import { HiChartBar, HiUser, HiGlobe } from "react-icons/hi";

export const Stats = () => {
  return (
    <section className="pt-24" data-aos="fade-up" data-aos-delay="1200">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-6 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-x-6">
            <div className="bg-white/10 w-20 h-20 rounded-full grid place-items-center text-blue text-2xl lg:text-4xl">
              <HiChartBar />
            </div>

            <div>
              <p className="text-2xl font-bold lg:text-[40px] lg:mb-2 ">$30B</p>
              <p className="text-gray">Digital Currency Exchanged</p>
            </div>
          </div>

          <div className="flex items-center gap-x-6">
            <div className="bg-white/10 w-20 h-20 rounded-full grid place-items-center text-blue text-2xl lg:text-4xl">
              <HiUser />
            </div>

            <div>
              <p className="text-2xl font-bold lg:text-[40px] lg:mb-2 ">
                $10M+
              </p>
              <p className="text-gray">Trusted Wallets Investor</p>
            </div>
          </div>

          <div className="flex items-center gap-x-6">
            <div className="bg-white/10 w-20 h-20 rounded-full grid place-items-center text-blue text-2xl lg:text-4xl">
              <HiGlobe />
            </div>

            <div>
              <p className="text-2xl font-bold lg:text-[40px] lg:mb-2 ">195</p>
              <p className="text-gray">Countries Supported</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
