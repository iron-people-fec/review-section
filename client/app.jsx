import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Reviews from './review-list/Reviews.jsx';
import Filters from './Filters.jsx';
import styled from 'styled-components'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      displayNum: 8
    }
  }

  handleGetReviews() {
    axios.get('/products/1/reviews')
      .then((response) => {
        this.setState({
          reviews: response.data
        });
      });
  }

  componentDidMount() {
    this.handleGetReviews();
  }



  render() {
    return (
      <Container >
        <Filters/>
        <span>We found {this.state.reviews.length} matching reviews</span>
        <List>
          <Reviews reviews={this.state.reviews.slice(0, this.state.displayNum)} />
        </List>
        <Button>load {this.state.reviews.length - this.state.displayNum} more</Button>
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
  width: 120px;
  padding: 8px 0;
  border:#888888 solid 1px;
  border-radius: 4px;
  font-size: 12px;
  background-color: white;
  color: #333333;
  margin: 0 auto;

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

ReactDOM.render(<App />, document.getElementById('root'));