import './Budget.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Budget = () => {

  const [budget, setBudget] = useState(0);

  const createBudget = () => {
    dispatch (

    )
  }

  return (
    <div className="budget-form">
      <div className="txt-container">
        <h1>What's your budget for this?</h1>
        <p>No pressure on our end. Just pick whatever works for you.</p>
      </div>
      <div className="btn-container">
        <button onClick={}>I'm broke. Keep it under $500!</button>
        <button onClick={}>$500</button>
        <button>$1000</button>
        <button>$1500</button>
        <button>$2000</button>
        <button>The sky's the limit!</button>
      </div>
      <Link to="/share">
        <button>Continue</button>
      </Link>
    </div>
  )
}


export default Budget;