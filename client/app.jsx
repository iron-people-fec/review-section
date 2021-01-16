import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
    const reviews = [];
    for (let i = 0; i < this.state.reviews.length; i++) {
      reviews.push(<li><strong>{this.state.reviews[i].username}:</strong> {this.state.reviews[i].title}</li>)
    }
    return (
      <div>
        <h1>Reviews:</h1>
        <ul>{reviews}</ul>
      </div>
    )
  }
}




ReactDOM.render(<App />, document.getElementById('root'));