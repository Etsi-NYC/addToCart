import React from 'react';
import axios from 'axios';
// import { throws } from 'assert';
import styled from 'styled-components';

const ImageComponent = styled.img`
  width: 12px;
  height: 9.98px;
  padding-right: 8px;




`

class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }



  render() {
    var item = this.props.details[0];
    var store = this.props.details[1];
    if (this.props.details.length < 1) {
      return (<div>Please, wait</div>);
    } else {
      return (
        <div>
          <h2>Overview</h2>
          <ul>
            {item.who_made.length > 0 && <li>Handmade item</li>}
            <li>Materials: {item.materials.split(' ').join(', ')}</li>
            <li>Style/themes: {item.style.split(' ').join(', ')}</li>
            <li>Favorited by: {item.num_favorers} people</li>
            {item.gift && <li>Gift message available</li>}
          </ul>
          {store.gift_card &&
            <div >
              <span><ImageComponent src="https://i.imgur.com/YI7vuuW.png" /></span>
              <span>This shop accepts ETSI gift cards</span>
            </div>}
        </div>
      );
    }
  }
}


export default Overview;