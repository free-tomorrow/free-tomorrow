import '../Dashboard/Dashboard.scss';
import TripCard from '../TripCard/TripCard';

const Dashboard = () => {

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <h1>Welcome User!</h1>
        <p>Here's an overview of your account</p>
        <div className="dashboard-cards">
          <TripCard />
          <TripCard />
        </div>
      </div>
    </div>
  )

}

export default Dashboard