import { Hero } from "./components/Hero";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <>
      <Hero />
    </>
  );
};

export default App;
