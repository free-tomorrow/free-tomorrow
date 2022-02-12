import './Homepage.scss';
import TravelAliens from '../../assets/travel_aliens.png'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../state/userSlice';
import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const Homepage = () => {

  const newName = useSelector((state) => state);
  const dispatch = useDispatch();
  const url = useLocation().pathname;
  console.log(url)

  // useEffect(() => {
  //   if(url !== '/') {
  //     const id = url.split(':')[1]
  //     dispatch (
        // grab this url and put it in state somewhere

  //     )
  //   }
  // }, [])

//  useEffect on load to check if there is an id in the current URL
// if there is an id at the end of the path, grab it and put it in state with a dispatch to store


  return (
    <div className="homepage">
      <div className="welcome-container">
      <section className="welcome-txt">
        <h1>Free Tomorrow?</h1>
        <h2>An app that helps you get your travel plans out of the air and onto the ground.</h2>
      </section>
      <div className="homepg-signup-btn-container">
        <Link to="/signup" className="homepg-signup-link" style={{ width: "fit-content" }}>
          <button className="homepg-signup-btn" >Sign up to get started</button>
        </Link>
          <p className="homepg-login-link">Already a user? Log in  <Link to="/login" >here</Link></p>
      </div>
      <img src={TravelAliens} className="aliens-img" alt="one eyed aliens" />
      </div>




    </div>
  )
}






export default Homepage;