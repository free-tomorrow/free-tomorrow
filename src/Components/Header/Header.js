import './Header.scss'
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <p>Header!</p>
      </ NavLink>
      <section className="nav-bar">
        <NavLink to="/about" className="nav-link">About Us</NavLink>
        <NavLink to="/login" className="nav-link"><button>Log In</button></NavLink>
      </section>

    </header>
  )

}




export default Header;