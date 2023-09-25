// Write your JS code here
import './index.css'

const Header = () => (
  <nav>
    <div className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="nav-logout-logo"
      />
      <ul className="nav-list-container">
        <li className="each-item">Home</li>
        <li className="each-item">Products</li>
        <li className="each-item">Cart</li>
        <li className="each-item">
          <button type="button" className="button">
            Logout
          </button>
        </li>
      </ul>
    </div>
    <div>
      <ul className="nav-logos-container">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="nav-logo"
          />
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="nav-logo"
          />
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="nav-logo"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
