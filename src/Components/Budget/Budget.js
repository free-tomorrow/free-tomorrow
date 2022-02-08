import './Budget.scss';

const Budget = () => {
  return (
    <div className="budget-form">
      <div className="txt-container">
        <h1>What's your budget for this?</h1>
        <p>No pressure on our end. Just pick whatever works for you.</p>
      </div>
      <div className="btn-container">
        <button>I'm broke. Keep it under $500!</button>
        <button>$500</button>
        <button>$1000</button>
        <button>$1500</button>
        <button>$2000</button>
        <button>The sky's the limit!</button>
      </div>
    </div>
  )
}


export default Budget;