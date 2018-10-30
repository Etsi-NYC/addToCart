import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Buttons from './components/Buttons.jsx';
import Item from './components/Item.jsx';
import Overview from './components/Overview.jsx';
import styled from 'styled-components';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      details: [],
      id: ""
    };
    this.getItemStoreDetails = this.getItemStoreDetails.bind(this);
  }


  componentDidMount() {
    var id = window.location.pathname.split('/')[2];
    this.getItemStoreDetails(id);

  }

  getItemStoreDetails(id) {
    axios.get('/listings', { params: { id } })
      .then(response => {
        this.setState({ details: response.data }, () => {
          console.log('details', this.state.details);
        })
      })
      .catch(err => {
        console.log('err when getting item details and store details', err)
      })
  }


  render() {
    return (
      <div className="app">
        <div className="main">
          <Item details={this.state.details} />
          {/* <Buttons details={this.state.details} /> */}
          <Overview details={this.state.details} />
        </div>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));