import React, { Component } from 'react';
import { connect } from 'react-redux';
import './GoToTop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

class GoToTop extends Component<any> {

  state = {
    intervalId: 0,
    thePosition: false,
    scrollStepInPx: 50,
    delayInMs: 30
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      // console.log("scroll: " + window.scrollY);
      if (window.scrollY > 170) {
        this.setState({ thePosition: true })
      } else {
        this.setState({ thePosition: false })
      }
    });
    window.scrollTo(0, 0);
  }

  scrollToTop() {
    window.scroll(0, 0);
    // let intervalId = setInterval(this.onScrollStep(), this.state.delayInMs);
    // this.setState({ intervalId: intervalId });
  }


  render() {
    return (
      <React.Fragment>
        {
          this.state.thePosition &&
          <div className="go-to-top" onClick={this.scrollToTop}>
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
        }
      </React.Fragment>)
  }
}

export default connect(
  (state: any) => state
)(GoToTop);