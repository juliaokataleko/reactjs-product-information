import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring';

import NavigationMenu from './NavigationMenu';

function Navigation() {

    const [showMenu, setShowMenu] = useState(false);

    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });

    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' }
    });

    return (
        <nav>
            <span className=" cursor-pointer">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>

            {
                maskTransitions.map(({ item, key, props }) =>
                    item && <animated.div key={key}
                        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                        onClick={() => setShowMenu(false)}
                        style={props}>
                        
                    </animated.div>
                )
            }

            {
                menuTransitions.map(({ item, key, props }) =>
                    item && <animated.div key={key}
                        className="fixed bg-white h-full z-50 shadow top-0 left-0 w-4/5 max-w-sm"
                        style={props}>
                        
                        <NavigationMenu closeMenu={() => setShowMenu(false)} />

                    </animated.div>
                )
            }

        </nav>
    )
}

export default Navigation;