import Logo from "../assets/img/logo.svg";

import { CgMenuRight } from "react-icons/cg";

import { AccountBtns, Nav } from "./";

export const Header = ({ setNavMobile }) => {
  return (
    <header
      className="py-[30px] lg:pt-[60px]"
      data-aos="fade-down"
      data-aos-delay="900"
      data-aos-duration="2000"
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="/">
          <img src={Logo} alt="" />
        </a>

        <div className="hidden lg:flex gap-x-[55px]">
          <Nav />
          <AccountBtns />
        </div>

        <div className="lg:hidden">
          <CgMenuRight
            className="text-2xl"
            onClick={() => setNavMobile(true)}
          />
        </div>
      </div>
    </header>
  );
};
