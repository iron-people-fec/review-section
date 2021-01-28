import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Reviews from './reviews/Reviews.jsx';
import Filters from './filters/Filters.jsx';
import Gallery from './Gallery.jsx';
import OverallRatings from './overall-ratings/OverallRatings.jsx';
import styled from 'styled-components'
import Modal from './Modal.jsx';


const Container = styled.div`
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  width: 1230px;
  margin: 0 auto;
  color: #333333;
`
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
margin: 2.5em auto;
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

const Words = styled.div`
  position: absolute;
  width: 100%;
`
const Circle = styled.div`
  width:60px;
`

const PCircle = styled.svg`
width: 100%;
`

const FoundMatches = styled.span`
  display: inline-block;
  padding: 0.3em 2em;
  font-size: 16px;
`


class App extends React.Component {
  constructor(props) {
    super(props);
    this.reviewsWithImages = [];
    this.state = {
      allReviews: [],
      selectedReviews: [],
      displayedReviews: []
    }
  }

  getReviews() {
    axios.get('http://localhost:8004/products/5/reviews')
    .then((response) => {
      const responseReviews = response.data.slice()
      for (let review of responseReviews) {
        review.images = []
      }

      this.setState({
        allReviews: responseReviews,
        selectedReviews: responseReviews,
        displayedReviews: responseReviews,
      });
    });
  }

  getImages(id) {
    axios.get(`http://localhost:8004/products/${id}/images`)
      .then((response) => {
        const images = response.data;
        if (images.length !== 0) {
          const reviews = [...this.state.allReviews]
          for (let review of reviews) {
            if (review.id === id) {
              review.images = images.map((img) => (img.url));
              this.reviewsWithImages.push(review);
            }
          }
          this.setState({
            allReviews: reviews
          });
        }
    });
  }

  helpful(id) {
    var i = event.target.getAttribute('data-id');
    var reviews = this.state.allReviews.slice();
    reviews[i].helpful_count++;
    console.log(reviews);

    this.setState({
      allReviews: reviews,
      displayedReviews: reviews
    });
    axios.patch(`http://localhost:8004/products/${id}/helpful`);
  }

  notHelpful(id) {
    var i = event.target.getAttribute('data-id');
    var reviews = this.state.allReviews.slice();
    reviews[i].helpful_count--;
    console.log(reviews);

    this.setState({
      allReviews: reviews,
      displayedReviews: reviews
    });
    axios.patch(`http://localhost:8004/products/${id}/not_helpful`);
  }


  componentDidMount() {
    this.getReviews();
  }

  render() {
    return (
      <Container >
        <OverallRatings reviews={this.state.allReviews}></OverallRatings>
        <FoundMatches>
        We found {this.state.allReviews.length} matching reviews
      </FoundMatches>
        <List>
          <Reviews reviews={this.state.displayedReviews} getImages={this.getImages.bind(this)} helpful={this.helpful.bind(this)} notHelpful={this.notHelpful.bind(this)}/>
        </List>
      </Container>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('bullseye-reviews'));