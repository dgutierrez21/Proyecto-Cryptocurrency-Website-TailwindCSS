import {
  Hero,
  Header,
  NavMobile,
  Stats,
  Why,
  Calculate,
  Trade,
  Features,
  Newsletter,
  Footer,
} from "./components";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const App = () => {
  const [navMobile, setNavMobile] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <div className="overflow-hidden">
      <Header setNavMobile={setNavMobile} />
      <Hero />

      <div
        className={`${
          navMobile ? "right-0" : "-right-[320px]"
        } fixed z-10 top-0 h-full transition-all ease-in-out duration-300`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Stats />
      <Why />
      <Calculate />
      <Trade />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
