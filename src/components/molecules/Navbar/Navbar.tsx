import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../../utilities/constants";
import { MainButton } from "../../atoms/buttons/MainButton/MainButton";
import "./Navbar.scss";

type NavbarProps = {
    onClose: () => void;
  className?: string;
};

export const Navbar: React.FC<NavbarProps> = ({onClose, className = "" }) => {
  return (
    <nav className={`navbar ${className}`}>
      <div className="navbar__links">
        {NAV_ITEMS.map((item) => {
          return (
            <NavLink
              to={item.path}
              className="navbar__link title"
              key={item.text}
              onClick={onClose}
            >
              {item.text}
            </NavLink>
          );
        })}
      </div>
      <MainButton text="Browse recipes" className="navbar__button" />
    </nav>
  );
};
