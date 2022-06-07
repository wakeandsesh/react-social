import { NavLink } from 'react-router-dom';
import './header.css'


const Header = (props) => {
    return (
        <header className='header'>
            <img src="https://w7.pngwing.com/pngs/224/696/png-transparent-nike-logo-movement-brands-black.png" alt="" />
            <div className='login__block'>
                { props.isAuth ? <div>{props.login} <button onClick={props.logoutThunk}>Logout</button></div> : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;