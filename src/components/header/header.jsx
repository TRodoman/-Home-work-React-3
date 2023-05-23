import React from "react";

import "../header/header.css"



const Header = ()=> {
    return(
        <header>
            <ul className="header">
                <li className="item1">inicio</li>
                <li className="item2">espacio</li>
                <li className="item3">planetas</li>
                <li className="item4">nosotros</li>
                <li className="item5">misiones</li>
            </ul>
        </header>
    )
}

export default Header;