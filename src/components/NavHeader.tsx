import { LOGO_URL_Black, LOGO_URL_White } from "../constants";
import Navigation from "./Navigation";
import type { FC } from 'react'

function NavHeader (){
    return (
        <div className="header-wrapper">
            <div className="header-logo">
                <img
                    src={LOGO_URL_White || LOGO_URL_Black}
                    alt="Devin Arnold Logo"
                />
            </div>
            <Navigation/>
        </div>
    );
};

export default NavHeader;
