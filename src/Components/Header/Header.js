import './Header.scss'
import {NavLink} from 'react-router-dom';
import logo from '../../assets/co_logo.svg';
import { removeUserFromStore } from '../../state/userSlice';
import { useSelector, useDispatch } from 'react-redux';


const Header = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const signOut = (e) => {
    e.preventDefault()
    dispatch (
      removeUserFromStore()
    )
    localStorage.clear()
   
    // window.location.replace('/')
  }

  const toggleButton = () => {
    if(!state.users.id) {
      return (
        <NavLink to="/login" className="nav-link"><button className="login-btn">Log In</button></NavLink>
      )
    } else {
      return (
        <NavLink to="/" className="nav-link"><button onClick={(e) => signOut(e)} className="signout-btn">Sign Out</button></NavLink>
      )
    }
  }


  return (
    <header className="header">
      <div className="logo-container">
        <NavLink to="/">
          <img src={logo} className="logo"></img>
        </ NavLink>
      </div>
      <section className="nav-bar">
        <NavLink to="/about" className="nav-link">About Us</NavLink>
        {toggleButton()}
      </section>

    </header>
  )

}




export default Header;