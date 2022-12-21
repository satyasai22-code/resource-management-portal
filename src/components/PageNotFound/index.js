import { Link } from "react-router-dom";
import notFound from '../../images/not_found.png'
import "./index.css";

const PageNotFound = () => (
  <div className="not-found-container">
    <img
      className="not-found-image"
      src={notFound}
      alt="not found"
    />
    <h1 className="not-found-heading">Page Not Found</h1>
    <p className="not-found-description">
      We are sorry, the page you requested could not be found. Please go back to
      the homepage.
    </p>
    <Link to="/resource-management-portal" className="go-back-home-link">
      <button type="button" className="go-back-to-home-btn">
        Go Back to Home
      </button>
    </Link>
  </div>
);

export default PageNotFound;