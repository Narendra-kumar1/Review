// Write your code here

import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {Item: 0}

  onUpdateLeft = () => {
    const {Item} = this.state
    if (Item !== 0) {
      this.setState(prevState => ({Item: prevState.Item - 1}))
    }
  }

  onUpdateRight = () => {
    const {Item} = this.state
    if (Item !== 3) this.setState(prevState => ({Item: prevState.Item + 1}))
  }

  render() {
    const {reviewsList} = this.props
    const {Item} = this.state

    const Item1 = reviewsList[Item]

    return (
      <div className="big-container">
        <div className="container">
          <h1 className="heading">Reviews</h1>
          <img src={Item1.imgUrl} alt={Item1.username} className="image" />
          <div className="arrow-con">
            <button data-testid="rightArrow" type="button" className="button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow"
                onClick={this.onUpdateLeft}
              />
            </button>
            <p>{Item1.username}</p>
            <button data-testid="leftArrow" type="button" className="button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow"
                onClick={this.onUpdateRight}
              />
            </button>
          </div>

          <p>{Item1.companyName}</p>
          <p>{Item1.description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
