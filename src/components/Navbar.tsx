import React, {useState} from 'react';
import '../stylesheets/navbar.css';

export const Navbar = () => {
    const [active, setActive] = useState<string>('nav-menu');
    const [toggleIcon, setToggleIcon] = useState<string>('toggler');


    const navToggle = () => {
        active === 'nav-menu'
            ? setActive('nav-menu nav-active')
            : setActive('nav-menu');

        /**/
        toggleIcon === 'toggler'
            ? setToggleIcon('toggler toggle')
            : setToggleIcon('toggler');
    }

    return (
        <nav className='nav'>
            <a href="" className="brand">Alan</a>
            <ul className={active}>
                <li className="nav-item"><a href="">Inicio</a></li>
                <li className="nav-item"><a href="">Proyectos</a></li>
                <li className="nav-item"><a href="">Sobre mi</a></li>
                <li className="nav-item"><a href="">Contacto</a></li>

            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

        </nav>
    );
}
