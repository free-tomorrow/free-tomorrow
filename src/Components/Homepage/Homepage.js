import './Homepage.scss'
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-content" >

      <section className="welcome-txt">
        <h1>Free Tomorrow?</h1>
        <h2>An app that helps you get your travel plans out of the air and onto the ground.</h2>
      </section>

      <div className="start-btn-container">
        <Link to="/schedule" className="start-link" style={{width: "fit-content"}}>
          <button className="start-btn">Get Started</button>
        </Link>
      </div>
      </div>

      
    </div>
  )
}






export default Homepage;