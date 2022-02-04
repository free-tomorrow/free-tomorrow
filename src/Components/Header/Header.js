import './Header.scss'
import {NavLink} from 'react-router-dom';
import logo from '../../assets/ft_logo.svg';


const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <NavLink to="/">
          <img src={logo} className="logo"></img>
        </ NavLink>
      </div>
      <section className="nav-bar">
        <NavLink to="/about" className="nav-link">About Us</NavLink>
        <NavLink to="/login" className="nav-link"><button className="login-btn">Log In</button></NavLink>
      </section>

    </header>
  )

}




export default Header;