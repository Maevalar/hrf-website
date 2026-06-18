import { NAV_ITEMS } from "../../../utilities/constants";
import { MainButton } from "../../atoms/buttons/MainButton/MainButton";
import "./Navbar.scss";

type NavbarProps = {
  className?: string;
};

export const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  return (
    <nav className={`navbar ${className}`}>
      <div className="navbar__links">
        {NAV_ITEMS.map((item) => {
          return (
            <a href={item.path} className="navbar__link title" key={item.text}>
              {item.text}
            </a>
          );
        })}
      </div>
      <MainButton text="Browse recipes" className="navbar__button" />
    </nav>
  );
};
