import './Homepage.scss';
import CalendarImg from '../../assets/calendar_green.png'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../state/userSlice';
import React, {useEffect} from 'react';
import { useLocation,  Navigate } from 'react-router-dom';

const Homepage = () => {

  const newName = useSelector((state) => state);
  const dispatch = useDispatch();
  const url = useLocation().pathname;
  console.log(url)

  const isLoggedIn = localStorage.getItem('savedUser') ? true : false


  useEffect(() => {
    if(url !== '/') {
      const id = url.split(':')[1]
      localStorage.setItem('sharedTripId', id)
      console.log(id)
    }
  }, [])

  const redirectIfLoggedIn = () => {
    const currentUser = localStorage.getItem('savedUser')
    let homepgLinks;
    if(currentUser) {
      const parsedUserId = JSON.parse(currentUser).id;
      homepgLinks = 
      <div className="homepg-signup-btn-container">
        <Link to={`/dashboard/${parsedUserId}`} className="homepg-signup-link" style={{ width: "fit-content" }}>
          <button className="homepg-signup-btn" >Visit your dashboard</button>
        </Link>
      </div>
    } else {
      homepgLinks = 
        <div className="homepg-signup-btn-container">
        <Link to="/signup" className="homepg-signup-link" style={{ width: "fit-content" }}>
          <button className="homepg-signup-btn" >Sign up to get started</button>
        </Link>
          <p className="homepg-login-link">Already a user? Log in  <Link to="/login" >here</Link></p>
      </div>
    }
  

    return homepgLinks;
  }

//  useEffect on load to check if there is an id in the current URL
// if there is an id at the end of the path, grab it and put it in local storage


  return (
    <div className="homepage">
      <div className="welcome-container">
      <section className="welcome-txt">
        <h1>Free Tomorrow?</h1>
        <h2>An app that helps you get your travel plans out of the air and onto the ground.</h2>
      </section>
      {redirectIfLoggedIn()}
      <img src={CalendarImg} className="aliens-img" alt="one eyed aliens" />
      </div>




    </div>
  )
}






export default Homepage;