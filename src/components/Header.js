import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Header() {
   return (
        <header className="border-b flex justify-between items-center p-3">
            <span className="font-bold">
                <Link to="/">jeeza</Link>                
            </span> 

            <Navigation />
        </header>
    )
}

export default Header;


