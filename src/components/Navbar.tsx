import { useState } from 'react';
import '../stylesheets/navbar.css';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
    const [active, setActive] = useState('nav-menu');
    const [toggleIcon, setToggleIcon] = useState('toggler');
    const [paginaActiva, setPaginaActiva] = useState('inicio');

    const navToggle = () => {
        setActive(active === 'nav-menu' ? 'nav-menu nav-active' : 'nav-menu');
        setToggleIcon(toggleIcon === 'toggler' ? 'toggler toggle' : 'toggler');
    }

    const paginaActual = (prop: string) => {
        setPaginaActiva(prop);
    }

    return (
        <nav className='nav'>
            <a href="" className='brand'>AXL <span className='brand-2'>Dev.</span></a>
            <ul className={active}>
                <li ><span className='flecha'>&gt;</span> <Link onClick={() => paginaActual('inicio')} className={paginaActiva === 'inicio' ? 'nav-item activo' : 'nav-item'} to="inicio" smooth={true} duration={500} offset={-100}> Inicio.</Link></li>
                <li ><span className='flecha'>&gt;</span> <Link onClick={() => paginaActual('proyectos')} className={paginaActiva === 'proyectos' ? 'nav-item activo' : 'nav-item'} to="proyectos" smooth={true} duration={500} offset={-100}> Proyectos.</Link></li>
                <li ><span className='flecha'>&gt;</span> <Link onClick={() => paginaActual('sobremi')} className={paginaActiva === 'sobremi' ? 'nav-item activo' : 'nav-item'} to="sobremi" smooth={true} duration={500} offset={-10}> Sobre mí.</Link></li>
                <li ><span className='flecha'>&gt;</span> <Link onClick={() => paginaActual('contacto')} className={paginaActiva === 'contacto' ? 'nav-item activo' : 'nav-item'} to="contacto" smooth={true} duration={500} offset={-100}> Contacto.</Link></li>
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
