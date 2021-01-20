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
      reviews: []
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
          <Reviews reviews={this.state.reviews} />
        </List>
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

ReactDOM.render(<App />, document.getElementById('root'));