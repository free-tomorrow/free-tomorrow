import React from 'react';
import './AddToTrip.scss';
import { useSelector } from 'react-redux';

const AddToTrip = () => {

  const state = useSelector((state) => state);
  const [sharedTrip, setSharedTrip] = useState('');

  const retrieveTrip = () => {
    setSharedTrip(state.trips.sharedTrip)
  }

  useEffect(() => {
    retrieveTrip()
  }, [])
  

  return (
    <>
      <div className="greeting-container">
        <h1>You've been invited to do something with {sharedTrip.created_by}!</h1>
      </div>
      <div className="dates-container">
      
      </div>
      <div className="budget-container">

      </div>
      <button>Accept this trip?</button>
    </>
  )
}

export default AddToTrip;