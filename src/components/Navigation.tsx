import { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { ROUTES } from '../constants';
// import { useThemeContext } from "./themeContext";
function Navigation() {
    //   const { dark } = useThemeContext();
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const links = ROUTES.map(({ to, label }) =>  <a href={to} key={label}>{label} </a>);


    return (
        <div className="nav-menu">
            <button
                className="nav-menu-hamburger"
                onClick={() => setHamburgerOpen(!hamburgerOpen)}
            >
                {/* <HamburgerMenu
                    isOpen={hamburgerOpen}
                    menuClicked={() => setHamburgerOpen(!hamburgerOpen)}
                    width={23}
                    height={20}
                    strokeWidth={2}
                    rotate={0}
                    color={"white"}
                    borderRadius={0}
                    animationDuration={0.5}
                /> */}
            </button>
            <nav
                className="navigation-wrapper"
                id={hamburgerOpen ? "active" : "inactive"}
            >
                {links}
            </nav>
        </div>
    );
}

export default Navigation;