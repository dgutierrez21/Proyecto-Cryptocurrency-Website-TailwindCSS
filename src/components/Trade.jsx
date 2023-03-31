import { useState } from "react";
import { currency } from "../data";

import { IoIosArrowForward } from "react-icons/io";

export const Trade = () => {
  const [itemName, setItemName] = useState("Bitcoin");
  return (
    <section className="section bg-gradient-to-b from-[#f8f9fb] to-[#fafbff] text-darkblue lg:pt-[320px] lg:-mt-[320px] ">
      <div className="container mx-auto">
        <h2
          className="section-title text-center mb-16"
          data-aos="fade-up"
          data-aos-offset="400"
        >
          Trade securely and market the high growth cryptocurrencies.
        </h2>

        <div
          className="flex flex-col gap-[45px] lg:flex-row "
          data-aos="fade-up"
          data-aos-offset="450"
        >
          {currency.map((item, index) => {
            const { image, name, abbr, description } = item;

            const nameComparation = name === itemName;

            return (
              <div
                key={index}
                className={`w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition duration-300 ${
                  nameComparation ? "bg-violet  text-white" : "bg-white"
                }`}
                onClick={() => setItemName(name)}
              >
                <div className="flex flex-col justify-center items-center ">
                  <img src={image} alt="" className="mb-12" />

                  <div className="mb-4 flex items-center gap-x-2">
                    <p className="text-[32px] font-bold ">{name}</p>
                    <p className="text-lg text-gray-400 font-medium">{abbr}</p>
                  </div>

                  <p className="text-center mb-6">{description}</p>
                  <button
                    className={`border-2 border-gray-300  rounded-full h-16 flex justify-center items-center ${
                      nameComparation
                        ? "text-white bg-blue hover:bg-blue-hover border-none pl-8 pr-6 gap-x-3"
                        : "text-blue w-16"
                    }`}
                  >
                    {nameComparation && (
                      <p className="text-lg font-medium">Start Mining</p>
                    )}
                    <IoIosArrowForward
                      className={`${nameComparation ? "text-2xl" : "text-3xl"}`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
