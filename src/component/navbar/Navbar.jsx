import './navbar.css';
import acclogo from '../../assests/Login logo/user-interface.png'
import { Link } from 'react-router-dom';
import logo from '../../assests/website logo/logo.png'
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
         <Link to="/"><img src={logo}></img></Link>
        </div>
        <ul className='nav-menu'>
            <li><Link  to="/men">Men</Link></li>
            <li><Link  to="/women">Women</Link></li>
            <li><Link  to="/trend">Trending</Link></li>
            <li><Link  to="/fashion">Fashionable</Link></li>
        </ul>
        <div className='nav-login'>
          <Link to='/login'><img src={acclogo}></img></Link> 
        </div>
    </div>

  );
}
