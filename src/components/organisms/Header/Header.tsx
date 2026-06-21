import { useState } from 'react'
import { Burger } from '../../atoms/buttons/Burger/Burger'
import { Navbar } from '../../molecules/Navbar/Navbar'
import './Header.scss'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'

export const Header: React.FC = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    return (
      <header className="header-block">
        <NavLink to='/' className="header-block__logo">
          <img src="/logo.svg" alt="" className="header-logo__image" />
          <h1 className="header-logo__text">Healthy Recipe Finder</h1>
        </NavLink>
        <Navbar
          className={cn("header-block__navbar", { active: isMenuActive })}
          onClose={() => setIsMenuActive(false)}
        />
        <Burger
          className={cn("header-block__burger", {active: isMenuActive})}
          onClick={() => setIsMenuActive((prev) => !prev)}
        />
      </header>
    );
}