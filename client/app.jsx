import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Reviews from './review-list/Reviews.jsx';
import Filters from './filters/Filters.jsx';
import Gallery from './Gallery.jsx';
import OverallRatings from './overall-ratings/OverallRatings.jsx';
import styled from 'styled-components'
import Modal from './Modal.jsx';


const Container = styled.div`
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 15px;
  width: 1230px;
  margin: 0 auto;
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


class App extends React.Component {
  constructor(props) {
    super(props);
    this.images = [];
    this.state = {
      allReviews: [],
      selectedReviews: [],
      displayedReviews: [],
      hiddenNum: 0,
      allPhotos: [],
      verified: false,
      withPhotos: false
    }
  }

  handleGetReviews() {
    axios.get('http://localhost:8004/products/0/reviews')
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

  addPhotos(id) {
    axios.get(`http://localhost:8004/products/0/images`)
      .then((response) => {
        if (response.data.length !== 0) {
          var reviewList = this.state.allReviews.slice();
          for (let review of reviewList) {
            if (review.id === id) {
              review.images = response.data.map((img) => (
                img.url
              ));
              this.images.push(...review.images)
            }
          }

          this.setState({
            allReviews: reviewList,
            displayedReviews: reviewList
          });
        }
      });
  }


  handleDisplayedReviews() {
    var toDisplay = this.state.selectedReviews.slice();

    this.setState({
      displayedReviews: toDisplay
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

  // filterByPhotos(reapply = false) {
  //   if (reapply === true) {
  //     var reviewsWithPhotos = this.state.allReviews.filter(review => review.images.length !== 0);
  //     this.setState({
  //       selectedReviews: reviewsWithPhotos
  //     });
  //   } else {
  //     if (this.state.withPhotos) {
  //       if (this.state.filters) {
  //         filterByVerified(true)
  //       } else {
  //         this.setState({
  //           selectedReviews: this.state.allReviews
  //         });
  //       }
  //     } else {
  //       var reviewsWithPhotos = this.state.selectedReviews.filter(review => review.images.length !== 0);
  //       console.log(reviewsWithPhotos)
  //       this.setState({
  //         selectedReviews: reviewsWithPhotos
  //       });
  //     }
  //     this.setState({
  //       withPhotos: !this.state.withPhotos
  //     });
  //   }
  //   this.this.handleDisplayedReviews()
  // }

  // filterByVerified(reapply = false) {
  //   if (reapply === true) {
  //     var verifiedPurchases = this.state.allReviews.filter(review => review.verified_purchaser === true);
  //       this.setState({
  //         selectedReviews: verifiedPurchases
  //       });
  //   } else {
  //     if (this.state.withPhotos) {
  //       if (this.state.filters) filterByVerified(true)
  //     } else {
  //       var verifiedPurchases = this.state.selectedReviews.filter(review => review.verified_purchaser === true);
  //       this.setState({
  //         selectedReviews: verifiedPurchases
  //       }, this.handleDisplayedReviews());
  //     }
  //     this.setState({
  //       verified: !this.state.verified
  //     });
  //   }
  // }


  componentDidMount() {
    // console.log(window.location.pathname.slice());
    this.handleGetReviews();
  }

  render() {
    return (
      <Container >
        <OverallRatings reviews={this.state.displayedReviews}></OverallRatings>
        <Gallery images={this.images} reviews={this.state.allReviews}></Gallery>
        <ReviewButton>Write a review</ReviewButton>
        {/* <Filters verified={this.state.verified} withPhotos={this.state.withPhotos} filterByVerified={this.filterByVerified.bind(this)} filterByPhotos={this.filterByPhotos.bind(this)}/> */}
        <span>We found {this.state.allReviews.length} matching reviews</span>
        <List>
          <Reviews reviews={this.state.displayedReviews} addPhotos={this.addPhotos.bind(this)}/>
        </List>
        <Button onClick={this.handleLoadMore.bind(this)} style={{ display: this.state.hiddenNum <= 0 ? "none" : "block" }}>load {this.state.hiddenNum} more</Button>
        <ReviewButton>Write a review</ReviewButton>
        {/* <Modal/> */}
      </Container>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('bullseye-reviews'));