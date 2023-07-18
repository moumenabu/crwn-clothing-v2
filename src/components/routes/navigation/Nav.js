import {Outlet, Link} from 'react-router-dom';
import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';


import {ReactComponent as Logo} from '../../assets/crown.svg';
import { manualUserSignOut } from '../../utils/firebase/firebase';
import BagIcon from "../../shopping-bag/BagIcon";
import BagDropdown from "../../shopping-bag/BagDropdown";
import "./Nav.scss";

function Nav({basketItems}){
    const {userState} = useContext(UserContext);
    const [isHidden, setIsHidden] = useState(true);

    function showDropdown(){
        setIsHidden(!isHidden);
    }

    function hideDropdown(){
        if(isHidden === false) setIsHidden(true);
    }

    return (
        <div className='nav-page'>
            <nav className='nav-bar'>
                <Link id='nav-logo' to='/'>
                    <Logo />
                </Link>
                <div className='nav-links-container'>
                    <Link to='/shop' state={()=>{console.log("hello")}}>Shop</Link>
                    {userState ? <span onClick={manualUserSignOut}>Sign Out {userState.displayName}</span> : <Link to='/authentication'>Sign in</Link>}
                    <span className='bag-icon' onClick={showDropdown}><BagIcon itemsAmount={basketItems.length}/></span>
                </div>
                <span className={`${!isHidden ? "reveal" : ""} dropdown`}><BagDropdown item={basketItems}/></span>
            </nav>
            <span onClick={hideDropdown}><Outlet /></span>
        </div>
    )
}

export default Nav;