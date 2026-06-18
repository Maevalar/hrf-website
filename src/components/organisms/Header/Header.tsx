import { Burger } from '../../atoms/buttons/Burger/Burger'
import { Navbar } from '../../molecules/Navbar/Navbar'
import './Header.scss'

export const Header: React.FC = () => {
    return (
      <header className="header-block">
        <a href='#' className="header-block__logo">
          <img src="/logo.svg" alt="" className="header-logo__image" />
          <h1 className="header-logo__text">Healthy Recipe Finder</h1>
        </a>
        <Navbar className="header-block__navbar active" />
        <Burger className="header-block__burger" />
      </header>
    );
}