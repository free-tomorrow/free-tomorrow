import './Header.scss'
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <p>Header!</p>
      </ NavLink>
      <section className="nav-bar">
        <NavLink className="nav-link">About Us</NavLink>
        <NavLink className="nav-link">Log In</NavLink>
        <NavLink className="nav-link"><button>Sign Up</button></NavLink>
      </section>

    </header>
  )

}




export default Header;