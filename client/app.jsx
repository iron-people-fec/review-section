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
      allReviews: [],
      selectedReviews: [],
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
        const responseReviews = response.data.slice()
        for (let review of responseReviews) {
          review.images = []
        }
        // var numberOfHiddenReviews = responseReviews.length - 8;
        // var someData = responseReviews.slice(0, 8)
        this.setState({
          allReviews: responseReviews,
          selectedReviews: responseReviews,
          displayedReviews: responseReviews,
          hiddenNum: 0
        });
      });
  }


  handleCheckedBox() {
    const newCheckboxes = [...this.state.checkBoxes]
    var clickedObj;
    for (var obj of newCheckboxes) {
        if (obj.value === event.target.value) {
          obj.isChecked = obj.isChecked ? false : true;
          clickedObj = obj;
          }
    }
    this.setState({
      checkBoxes: newCheckboxes,
    });
    // console.log(clickedObj.isChecked)
    if (clickedObj.isChecked) {
      this.handleCheckFilter(clickedObj.value)
    } else {
      this.handleUncheckFilter(clickedObj.value)
    }

  }

  handleCheckFilter(value) {
    if (value === "with photos") {
      var selected = []
      for (let review of this.state.allReviews) {
        if (review.images.length > 0) {
          selected.push(review);
        }
      }
      this.setState({
        selectedReviews: selected
      }, ()=>this.handleDisplayedReviews());
    }
  }

  handleUncheckFilter(value) {
    if (value === "with photos") {
      this.setState({
        selectedReviews: this.state.allReviews
      }, ()=>this.handleDisplayedReviews());
    }
  }

  handleDisplayedReviews() {
    console.log(this.state.selectedReviews)
    if (this.state.selectedReviews.length <= 8) {
      var toDisplay = this.state.selectedReviews.slice();
      var num = 0;
    } else {
      var toDisplay = this.state.selectedReviews.slice(0, 8);
      var num = this.state.selectedReviews.length - 8
    }

    this.setState({
      displayedReviews: toDisplay
    });
  }

  addPhotos(id) {
    axios.get(`/products/${id}/images`)
    .then((response) => {
        if (response.data.length !== 0) {
          var reviewsEdited = [...this.state.allReviews]
          for (var review of reviewsEdited) {
            if (review.id === id) {
              review.images = response.data.map((img) => (
                img.url
              ));
            }
          }
          this.setState({
            allReviews: reviewsEdited
          });
        }
    });
  }

  handleLoadMore() {
    if (this.state.hiddenNum < 8) {
      var data = this.state.selectedReviews;
      var display = 0;
    } else {
      var display = this.state.hiddenNum - 8;
      var data = this.state.selectedReviews.slice(0, display);
    }

    this.setState({
      hiddenNum: display,
      displayedReviews: data
    });
  }


  componentDidMount() {
    this.handleGetReviews();
  }

  render() {
    return (
      <Container >
        <Filters checkBoxes={this.state.checkBoxes} handleCheckedBox={this.handleCheckedBox.bind(this)}/>
        <span>We found {this.state.allReviews.length} matching reviews</span>
        <List>
          <Reviews reviews={this.state.displayedReviews} addPhotos={this.addPhotos.bind(this)} photosAdded={this.state.photosAdded}/>
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