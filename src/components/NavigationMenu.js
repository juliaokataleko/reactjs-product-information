import React from 'react';

import {
    Link
} from "react-router-dom";

function NavigationMenu(props) {
    return (
        <div>

            <div className="font-bold p-3">
                jeeza
            </div>
            <ul>
                <li>
                    <Link to="/"
                        onClick={props.closeMenu}
                        className="text-blue-500 border-t p-3 block">
                            Home
                        </Link>
                </li>
                <li>
                    <Link to="/about"
                        onClick={props.closeMenu}
                        className="text-blue-500 border-t border-b p-3 block">About</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu;