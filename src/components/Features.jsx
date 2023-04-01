import { FeatureSection1, FeatureSection2, FeatureSection3 } from "./";

export const Features = () => {
  return (
    <section className="bg-violet pt-12 lg:pt-24">
      <div className="container mx-auto">
        <div className="text-center max-w-[758px] mx-auto mb-24 ">
          <h2
            className="section-title"
            data-aos="fade-up"
            data-aos-offset="400"
          >
            Market sentiments, portfolio, and run the infrastructure of your
            choice
          </h2>
        </div>
        <FeatureSection1 />
        <FeatureSection2 />
        <FeatureSection3 />
      </div>
    </section>
  );
};
