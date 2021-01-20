import React from 'react';
import styled from 'styled-components'
import ReviewMain from './ReviewMain.jsx';
import ReviewAside from './ReviewAside.jsx';
import axios from 'axios';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    // console.log('hey')
    axios.get(`/products/${this.props.review.id}/images`)
      .then((response) => {
          this.setState({
            images: response.data
          });
        });
  }

  render() {
    return (
      < ReviewContainer >
        <ReviewMain review={this.props.review} images={this.state.images}/>
      <ReviewAside review={this.props.review} />
    </ReviewContainer>
    )
  }
}


const ReviewContainer = styled.li`
  list-style: none;
  padding: 20px;
  margin: 14px 0;
  border: rgb(214, 214, 214) solid 1px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
`

export default Review;