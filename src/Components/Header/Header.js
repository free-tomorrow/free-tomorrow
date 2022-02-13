import './Header.scss'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/co_logo.svg';
import { removeUserFromStore } from '../../state/userSlice';
import { useSelector, useDispatch } from 'react-redux';


const Header = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const signOut = (e) => {
    e.preventDefault()
    window.location.replace('/')
    localStorage.clear()

    // window.location.replace('/')
  }

  const toggleButton = () => {
    if (!state.users.id) {
      return (
        <NavLink to="/login" className="login-link"><button className="login-btn">Log In</button></NavLink>
      )
    } else {
      return (
        <NavLink to="/" className="logout-link"><button onClick={(e) => signOut(e)} className="logout-btn">Log Out</button></NavLink>
      )
    }
  }


  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} className="logo"></img>
      </ NavLink>
      <section className="nav-bar">
        <NavLink to="/about" className="nav-link">About Us</NavLink>
        {toggleButton()}
      </section>

    </header>
  )

}




export default Header;