import { LOGO_URL_Black, LOGO_URL_White } from "../constants";
import type { FC } from 'react'

const NavHeader: FC = () => {
    return (
        <div className="header-wrapper">
            <div className="header-logo">
                <img
                    src={LOGO_URL_White || LOGO_URL_Black}
                    alt="Devin Arnold Logo"
                />
            </div>
        </div>
    );
};

export default NavHeader;
