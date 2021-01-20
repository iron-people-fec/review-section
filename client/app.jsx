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
      ],
      reviewsWithPhotos: [],
      photosAdded: false
    }
  }

  handleGetReviews() {
    axios.get('/products/1/reviews')
      .then((response) => {
        const responseReviews = [...response.data]
        for (let review of responseReviews) {
          review.images = []
        }
        console.log(responseReviews)
        var someData = responseReviews.slice(0, 8)
        var num = responseReviews.length - 8;
        this.setState({
          reviews: responseReviews,
          displayedReviews: someData,
          hiddenNum: num
        });
      });
  }


  handleCheckedBox() {
    const newCheckboxes = [...this.state.checkBoxes]
    var clickedObjVal;
    for (var obj of newCheckboxes) {
        if (obj.value === event.target.value) {
          obj.isChecked = obj.isChecked ? false : true;
          clickedObjVal = obj.value;
          }
    }
    this.setState({
      checkBoxes: newCheckboxes,
      photosAdded: true
    });

    // this.handleFilter(clickedObjVal)
  }

  addPhotos(id) {
    axios.get(`/products/${id}/images`)
    .then((response) => {
        if (response.data.length !== 0) {
          var reviewsEdited = [...this.state.reviews]
          for (var review of reviewsEdited) {
            if (review.id === id) {
              review.images = response.data.map((img) => (
                img.url
              ));
            }
          }
          console.log(reviewsEdited)
          this.setState({
            reviews: reviewsEdited
          });
        }
    });
  }


  componentDidMount() {
    this.handleGetReviews();
  }

  render() {
    return (
      <Container >
        {/* <Filters checkBoxes={this.state.checkBoxes} handleCheckedBox={this.handleCheckedBox.bind(this)}/> */}
        <span>We found {this.state.reviews.length} matching reviews</span>
        <List>
          <Reviews reviews={this.state.displayedReviews} addPhotos={this.addPhotos.bind(this)} photosAdded={this.state.photosAdded}/>
        </List>
        {/* <Button onClick={this.handleLoadMore.bind(this)} style={{ display: this.state.hiddenNum <= 0 ? "none" : "block" }}>load {this.state.hiddenNum} more</Button> */}
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