import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Buttons from './components/Buttons.jsx';
import Item from './components/Item.jsx';
import Overview from './components/Overview.jsx';



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
    this.setState({ id: id }, () => this.getItemStoreDetails(this.state.id));
  }

  getItemStoreDetails(id) {
    // console.log(id, 'IDDDD')
    axios.get('/listings', { params: { id } })
      .then(response => {
        // console.log('response', response);
        this.setState({ details: response.data }, () => {
          console.log('this state detail;', this.state.details)
        })
      })
      .catch(err => {
        console.log('err when getting overview', err)
      })
  }


  render() {
    return (
      <div className="app">
        <div className="main">
          {/* <Item details={this.state.details} /> */}
          {/* <AskQuestionButton /> */}
          {/* <Buttons details={this.state.details} /> */}
          <Overview nonsense={this.state.details} />
        </div>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));