import {Outlet, Link} from 'react-router-dom';

import './navbar.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';

function Nav({clickHandler}){
    return (
        <div>
            <nav>
                <Link id='nav-logo' to='/'>
                    <Logo />
                </Link>
                <div className='nav-links-container'>
                    <Link to='/shop'>Shop</Link>
                    <Link to='/sign-in'>Sign in</Link>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Nav;