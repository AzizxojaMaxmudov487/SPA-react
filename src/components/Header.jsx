import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <>
            <nav>
                <div className="nav-wrapper header">
                    <Link to='/' className='brand-logo'>React</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header