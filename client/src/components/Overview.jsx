import React from 'react';
import axios from 'axios';

class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }



  render() {
    return (
      <div>
        <h2>Overview</h2>
        <ul>
          {/* {console.log('props in overview:   ', this.props.nonsense[0])} */}
          {/* {this.props.details[0].who_made === 'i_did'}
          <li>Handmade item</li> */}
          {/* <li>{this.props[0].materials}</li> */}
          {/* <li>{this.props.nonsense}</li> */}
          <li></li>
        </ul>
      </div>
    );
  }
}


export default Overview;