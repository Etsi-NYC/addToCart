import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const AskQuestion = styled.button`
  width: 12px;
  height: 9.98px;
  paddng-right: 10px;




`

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {

    if (this.props.details.length < 1) {
      return (<div>Please, wait</div>);
    } else {
      var item = this.props.details[0];
      var store = this.props.details[1];
      var quantity = item.quantity;
      var quantityArray = [...Array(quantity + 1).keys()];
      var has_variations = item.has_variations;
      var variations = item.variations.split(" ");
      return (
        <div>
          <h3>{item.title}</h3>
          {has_variations ? <h3>${item.price}+</h3> : <h3>${item.price}</h3>}
          <button>Ask a question</button>
          <div>{has_variations ? <select required="required">
            <option>Select an option</option>
            {variations.map((option, i) => (<option defaultValue="Select an option" key={i} >{option}</option>))}
          </select> : <div></div>}</div>
          <div>{quantity > 1 ? <select required="required">{quantityArray.slice(1).map((quant, i) => (<option defaultValue="1" key={i}>{quant}</option>))}</select> : <div></div>}</div>

        </div>
      );
    }
  }
}


export default Item;