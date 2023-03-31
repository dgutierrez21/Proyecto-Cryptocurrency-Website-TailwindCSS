import { navData } from "../data";

export const Nav = () => {
  return (
    <nav className="flex items-center">
      <ul className="text-xl flex gap-x-8">
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <a className="nav-link" href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
