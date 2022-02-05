import './Homepage.scss'
// import Arrow from '../../assets/right_arrow.svg'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../state/userSlice'

const Homepage = () => {

  const newName = useSelector((state) => state);
  const dispatch = useDispatch();

  const addNewPerson = () => {
    dispatch(
      addUser({name: 'Lola'})
    )
    console.log(newName)
  }


  return (
    <div className="homepage">
      <section className="welcome-txt">
        <h1>Free Tomorrow?</h1>
        <h2>An app that helps you get your travel plans out of the air and onto the ground.</h2>
      </section>
    
      <div className="start-btn-container">
        <Link to="/schedule" className="start-link" style={{width: "fit-content"}}>
          <button className="start-btn" onClick={addNewPerson}>Let's get started</button>
        </Link>
      </div>

      
    </div>
  )
}






export default Homepage;