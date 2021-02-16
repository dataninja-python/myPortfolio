import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => {
        setClick(false);
    }
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                {/* logo start */}
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        AJI <i class="fa fa-save" aria-hidden="true"></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    {/* logo end */}
                    {/* nav bar menu */}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {/* nav bar menu */}
                    {/* sign up button start*/}
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                    {/* sign up button end*/}
                </div>
            </nav>   
        </>
    )
}
