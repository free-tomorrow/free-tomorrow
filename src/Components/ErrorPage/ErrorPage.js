import './ErrorPage.scss';
import { useParams, Link } from 'react-router-dom';



const ErrorPage = () => {
  const params = useParams()
  return (
    <div className='error-page'>
      <div className='error-content'>
        <div className='error-text'>
          <h1>Whoops!</h1>
          <p>Looks like you took a wrong turn</p>
          <p>Or we can't find what you're looking for</p>
        </div>
        <Link to="/">
          <button className="error-btn">
            Back to the beaten path?
          </button></Link>
      </div>
    </div>
  )

}


export default ErrorPage;