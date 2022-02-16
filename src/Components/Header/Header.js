import './Header.scss'
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/Header-Icon.png';
import { removeUserFromStore } from '../../state/userSlice';
import { useSelector, useDispatch } from 'react-redux';


const Header = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const signOut = (e) => {
    e.preventDefault()
    navigate('/')
    dispatch (
      removeUserFromStore()
    )
    localStorage.clear()
  }


  const isLoggedIn = state.users.id ? true : false

  const toggleButton = () => {
    return isLoggedIn ? (
      <NavLink to="/" className="logout-link"><button onClick={(e) => signOut(e)} className="logout-btn">Log Out</button></NavLink>
    )
      :
      (
        <NavLink to="/login" className="login-link"><button className="login-btn">Log In</button></NavLink>
      )
  }

  const showDashboard = () => {
    if (isLoggedIn) {
      console.log(state.users.id, 'isLoggedIn')
      const currentUser = localStorage.getItem('savedUser');
      const parsedUserId = JSON.parse(currentUser).id;
  
      return (
        <NavLink to={`/dashboard/:${parsedUserId}`} className="nav-link">Dashboard</NavLink>
      )
    } else {
      console.log(state.users.id, 'else')
    }
  }

  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} className="logo"></img>
      </ NavLink>
      <section className="nav-bar">
        <NavLink to="/about" className="nav-link">About Us</NavLink>
        {showDashboard()}
        {toggleButton()}
      </section>

    </header>
  )

}




export default Header;