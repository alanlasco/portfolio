import { useState } from 'react';
import '../stylesheets/navbar.css';
const Navbar = () => {
    const [active, setActive] = useState('nav-menu');
    const [toggleIcon, setToggleIcon] = useState('toggler');
    const [paginaActiva, setPaginaActiva] = useState<string>('home');


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
            <a href="" className='brand'>AXL <span className='brand-2'>Dev.</span></a>
            <ul className={active}>

                <li onClick={() => setPaginaActiva('home')} className={paginaActiva === 'home' ? 'nav-item activo' : 'nav-item'}><span className='flecha'>&gt;</span> Inicio.</li>
                <li onClick={() => setPaginaActiva('proyectos')} className={paginaActiva === 'proyectos' ? 'nav-item activo' : 'nav-item'}><span className='flecha'>&gt;</span> Proyectos.</li>
                <li onClick={() => setPaginaActiva('sobremi')} className={paginaActiva === 'sobremi' ? 'nav-item activo' : 'nav-item'}><span className='flecha'>&gt;</span> Sobre mi.</li>
                <li onClick={() => setPaginaActiva('contacto')} className={paginaActiva === 'contacto' ? 'nav-item activo' : 'nav-item'}><span className='flecha'>&gt;</span> Contacto</li>

            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

        </nav>
    );


}

export default Navbar; 
