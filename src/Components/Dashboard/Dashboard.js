import '../Dashboard/Dashboard.scss';
import TripCard from '../TripCard/TripCard';
import { Link } from 'react-router-dom';

const Dashboard = () => {

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <h1>Welcome User!</h1>
        <p>Here's an overview of your account</p>
        <Link to="/schedule">
          <button className="create-trip-btn">Create a new trip</button>
        </Link>
        <div className="dashboard-cards">
          <TripCard />
          <TripCard />
        </div>
      </div>
    </div>
  )

}

export default Dashboard