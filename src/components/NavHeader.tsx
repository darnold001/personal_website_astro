import { LOGO_URL_Black, LOGO_URL_White } from "../constants";
import { ROUTES } from '../constants';


function NavHeader({ currentUrl }: { currentUrl: string }) {
    const links = ROUTES.map(({ to, label }) => <a href={to} key={label} className={currentUrl === `/${label.toLowerCase()}` ? 'active' : 'inactive'} >{label} </a>);
    return (
        <div className="header-wrapper">
            <div className="header-logo">
                <img
                    src={LOGO_URL_White || LOGO_URL_Black}
                    alt="Devin Arnold Logo"
                />

                {/* <div className="nav-menu"> */}
                {/* <button
                className="nav-menu-hamburger"
                onClick={() => setHamburgerOpen(!hamburgerOpen)}
            >
                <HamburgerMenu
                    isOpen={hamburgerOpen}
                    menuClicked={() => setHamburgerOpen(!hamburgerOpen)}
                    width={23}
                    height={20}
                    strokeWidth={2}
                    rotate={0}
                    color={"white"}
                    borderRadius={0}
                    animationDuration={0.5}
                />
            </button> */}
            </div>

            <nav
                className="navigation-wrapper"
                // id={hamburgerOpen ? "active" : "inactive"}
                id='active'
            >
                {links}
            </nav>

        </div>
        // </div>


    );
};

export default NavHeader;
