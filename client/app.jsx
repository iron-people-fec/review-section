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
    })
  }

  componentDidMount() {
    this.handleGetReviews()
  }

  render() {
    return (
      <h1>yep</h1>
    )
  }
}




ReactDOM.render(<App/>, document.getElementById('root'));