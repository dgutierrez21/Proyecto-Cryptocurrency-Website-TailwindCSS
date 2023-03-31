import { navData } from "../data";

import { CgClose } from "react-icons/cg";
import { AccountBtns } from "./AccountBtns";

export const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className="lg:hidden bg-violet h-full top-0 bottom-0 w-80 flex flex-col gap-y-16 justify-center items-center">
      <div className="absolute top-2 left-2">
        <CgClose className="text-3xl" onClick={() => setNavMobile(false)} />
      </div>

      <ul className="text-xl flex flex-col gap-y-8">
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
      <AccountBtns />
    </nav>
  );
};
