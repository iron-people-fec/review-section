import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Reviews from './review-list/Reviews.jsx';
import Filters from './filters/Filters.jsx';
import styled from 'styled-components'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      displayedReviews: [],
      hiddenNum: 0,
      checkBoxes: [
        {id: 0, value: "with photos", isChecked: false},
        {id: 1, value: "verified purchases", isChecked: false}
      ]
    }
  }

  handleGetReviews() {
    axios.get('/products/1/reviews')
      .then((response) => {
        var someData = response.data.slice(0, 8)
        var num = response.data.length - 8;
        this.setState({
          reviews: response.data,
          displayedReviews: someData,
          hiddenNum: num
        });
      });
  }

  handleLoadMore() {
    if (this.state.hiddenNum < 8) {
      var data = this.state.reviews;
      var display = 0;
    } else {
      var display = this.state.hiddenNum - 8;
      var data = this.state.reviews.slice(0, display);
    }

    this.setState({
      hiddenNum: display,
      displayedReviews: data
    });
  }

  handleCheckedBox() {
    // this.state.checkBoxes
    console.log(event.target.value)
  }

  componentDidMount() {
    this.handleGetReviews();
  }

  render() {
    return (
      <Container >
        <Filters checkBoxes={this.state.checkBoxes} handleCheckedBox={this.handleCheckedBox.bind(this)}/>
        <span>We found {this.state.reviews.length} matching reviews</span>
        <List>
          <Reviews reviews={this.state.displayedReviews} />
        </List>
        <Button onClick={this.handleLoadMore.bind(this)} style={{ display: this.state.hiddenNum <= 0 ? "none" : "block" }}>load {this.state.hiddenNum} more</Button>
        <ReviewButton>Write a review</ReviewButton>
      </Container>
    )
  }
}



const Container = styled.div`
  margin: 0 1.5em;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 15px;
`;

const List = styled.ul`
  padding-inline-start: 0;
`

const Button = styled.button`
  display: block;
  padding: 8px 15px;
  border:#888888 solid 1px;
  border-radius: 4px;
  font-size: 12px;
  background-color: white;
  color: #333333;
  margin: 2em auto;
  transition: all 200ms ease-out 0s;

  &:hover {
    background-color: rgb(240, 240, 240);
    border-color: black;
    cursor: pointer;
  }

  &:focus {
    outline: gray 1px dashed;
    outline-offset: 2px;
  }
`

const ReviewButton = styled.button`
display: block;
padding: 8px 15px;
border-radius: 4px;
font-size: 12px;
background-color: #CC0000;
color: white;
margin: 2em auto;
border: none;
transition: all 200ms ease-out 0s;

&:hover {
  background-color: rgb(170, 0, 0);
  border-color: black;
  cursor: pointer;
}

&:focus {
  outline: gray 1px dashed;
  outline-offset: 2px;
}
`


ReactDOM.render(<App />, document.getElementById('root'));