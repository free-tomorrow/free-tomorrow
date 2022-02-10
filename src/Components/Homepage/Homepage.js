import './Homepage.scss';
import TravelAliens from '../../assets/travel_aliens.png'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../state/userSlice';

const Homepage = () => {

  const newName = useSelector((state) => state);
  const dispatch = useDispatch();

  // const addNewPerson = () => {
  //   dispatch(
  //     addUser({ name: 'Lola' })
  //   )
  //   console.log(newName)
  // }


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
          <p>Already a user? Log in  <Link to="/login" className="homepg-login-link">here.</Link></p>
      </div>
      <img src={TravelAliens} className="aliens-img" alt="one eyed aliens" />
      </div>




    </div>
  )
}






export default Homepage;