// Write your JS code here
import {Component} from 'react'
import Header from '../Header/index'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="bg-container">
        <Header />
        <div>
          <div className="image-and-content-container">
            <div className="content-container">
              <h1 className="heading">Clothes That Get YOU Noticed</h1>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                  alt="clothes that get you noticed"
                  className="main-image1"
                />
              </div>
              <p className="description">
                Fashion is part of the daily air it does not quite help that it
                changes all the time. Clothes have always been a marker of the
                era and we are in a revolution. Your fashion makes you been seen
                and heard that way you are. So, celebrate the seasons new and
                exciting fashion in your own way.
              </p>
              <button type="button" className="button">
                Shop Now
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                alt="clothes that get you noticed"
                className="main-image2"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
