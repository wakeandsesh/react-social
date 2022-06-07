import { NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div>
                <div className='navbar__link'><NavLink activeClassName="navbar__link__active" to="/profile">Profile</NavLink></div>
                <div className='navbar__link'><NavLink activeClassName="navbar__link__active" to="/dialogs">Messages</NavLink></div>
                <div className='navbar__link'><NavLink activeClassName="navbar__link__active" to="/users">Users</NavLink></div>
                <div className='navbar__link'><NavLink activeClassName="navbar__link__active" to="/news">News</NavLink></div>
                <div className='navbar__link'><NavLink activeClassName="navbar__link__active" to="/music">Music</NavLink></div>

                <div className='navbar__link' style={{marginTop: '60px',   borderTop: '2px solid #B8B5B4'}}><NavLink activeClassName="navbar__link__active" to="/settings">Settings</NavLink></div>
            </div>
        </nav>
    )
}

export default Navbar;