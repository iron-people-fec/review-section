import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Reviews from './Reviews.jsx';
import '../public/src/style.css';

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
      <div>
        <h1>Reviews:</h1>
        <ul><Reviews reviews={this.state.reviews}/></ul>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));