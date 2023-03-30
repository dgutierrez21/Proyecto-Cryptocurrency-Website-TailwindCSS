import HeroImg from "../assets/img/hero-img.png";

import { IoMdArrowDroprightCircle } from "react-icons/io";

export const Hero = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="flex-1">
            <h1
              className="font-bold leading-tight text-[32px] lg:text-[64px] mb-6"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Fastest & secure platform to invest in crypto.
            </h1>
            <p
              className="max-w-[440px] leading-relaxed mb-8"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Buy and sell cryptocurrencies, trusted by 10M wallets with over
              $30 billion in transactions.
            </p>
            <button
              className="btn gap-x-6 text-base lg:h-16"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              Try for free
              <IoMdArrowDroprightCircle className="text-2xl lg:text-3xl" />
            </button>
          </div>

          <div className="flex-1">
            <img src={HeroImg} alt="" data-aos="fade-up" data-aos-delay="600" />
          </div>
        </div>
      </div>
    </section>
  );
};
