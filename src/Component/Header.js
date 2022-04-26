import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faHandPointer } from '@fortawesome/free-solid-svg-icons';


/**
 * 
 * @returns Navbar Menu for Productlists and Tutorial Component
 */
const Header = () => {
    return (
            <div className="main-nav-wrapper " >
                <nav className="uk-navbar-container uk-navbar" uk-navbar="">
                    <div className="uk-navbar-center">
                        <ul className="uk-navbar-nav">
                            <li className="uk-active"><Link to={{ pathname: "/" }} ><span className='nav-ul-link'> Products </span><FontAwesomeIcon className='nav-ul-icon' icon={faBagShopping} /></Link></li>
                            <li className="uk-active"><Link to={{ pathname: "/tuto" }} ><span className='nav-ul-link'>Tutorial</span><FontAwesomeIcon className='nav-ul-icon' icon={faHandPointer} /></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
    );
}

export default Header;