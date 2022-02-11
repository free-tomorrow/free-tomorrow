import './Share.scss';
import TripCard from '../TripCard/TripCard';
import { useSelector, useDispatch } from 'react-redux';

const Share = () => {

  

  return (
    <div className="share-pg">
      <div className="share-card-wrapper">
        <TripCard/>
      </div>
    </div>
  )
}






export default Share;