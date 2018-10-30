import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


const OptionsDropdown = styled.select`
   -webkit-appearance: button;
   -webkit-border-radius: 2px;
   -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
   -webkit-padding-end: 20px;
   -webkit-padding-start: 2px;
   -webkit-user-select: none;
   background-image: url(http://i62.tinypic.com/15xvbd5.png), -webkit-linear-gradient(#FAFAFA, #F4F4F4 40%, #E5E5E5);
   background-position: 97% center;
   background-repeat: no-repeat;
   border: 1px solid #AAA;
   color: #555;
  //  font-size: inherit;
   margin: 5px;
   overflow: hidden;
   padding: 5px 10px;
   text-overflow: ellipsis;
   white-space: nowrap;
   width: 392px;
   font-family: Roboto;
   fony-size: 8px;
`;
const QuantityDropdown = styled.select`
   -webkit-appearance: button;
   -webkit-border-radius: 2px;
   -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
   -webkit-padding-end: 20px;
   -webkit-padding-start: 2px;
   -webkit-user-select: none;
   background-image: url(http://i62.tinypic.com/15xvbd5.png), -webkit-linear-gradient(#FAFAFA, #F4F4F4 40%, #E5E5E5);
   background-position: 97% center;
   background-repeat: no-repeat;
   border: 1px solid #AAA;
   color: #555;
  //  font-size: inherit;
   margin: 5px;
   overflow: hidden;
   padding: 5px 10px;
   text-overflow: ellipsis;
   white-space: nowrap;
   width: 53px;
   font-family: Roboto;
   font-size: 8px;
`;
const StyledText = styled.div`
  font-family: 'Roboto', sans-serif;
  padding: 5px 10px;
  margin: 5px;

`;

const Price = styled.h3`
  font-family: 'Roboto', sans-serif;
  padding: 5px 10px;
  // margin: 5px;

`;

const Title = styled.h3`
  font-family: "Times New Roman";
  font-weight: bold;
  font-size: 22px;
  padding: 5px 10px;
`;

const AskQuestion = styled.button`
    -webkit-appearance: button;
   -webkit-border-radius: 2px;
   -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
   -webkit-padding-end: 20px;
   -webkit-padding-start: 2px;
   -webkit-user-select: none;
  //  background-image: url(http://i62.tinypic.com/15xvbd5.png), -webkit-linear-gradient(#FAFAFA, #F4F4F4 40%, #E5E5E5);
   background-position: 97% center;
   background-repeat: no-repeat;
   border: 1px solid #AAA;
   color: black;
  //  font-size: inherit;
   margin-left: 5px;
   overflow: hidden;
   padding: 5px 10px;
   text-overflow: ellipsis;
   white-space: nowrap;
   width: 110px;
   font-family: Roboto;
   font-size: 10px;
   font-weight: bold;
  
`;


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
          <Title>{item.title}</Title>
          {has_variations ? <Price>${item.price}+</Price> : <Price>${item.price}</Price>}
          <AskQuestion>Ask a question</AskQuestion>
          <div>{has_variations ? <div>Choose your options</div> : <div></div>}</div>
          <div>{has_variations ? <OptionsDropdown required="required">
            <option>Select an option</option>
            {variations.map((option, i) => (<option defaultValue="Select an option" key={i} >{option}</option>))}
          </OptionsDropdown> : <div></div>}</div>
          <div>{quantity > 1 ? <QuantityDropdown required="required">{quantityArray.slice(1).map((quant, i) => (<option defaultValue="1" key={i}>{quant}</option>))}</QuantityDropdown> : <div></div>}</div>

        </div>
      );
    }
  }
}


export default Item;