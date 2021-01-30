import React from 'react';
import styled from 'styled-components'
import Main from './Main.jsx';
import Aside from './Aside.jsx';
import axios from 'axios';

const ReviewContainer = styled.li`
  list-style: none;
  padding: 20px;
  margin: 14px 0;
  border: rgb(214, 214, 214) solid 1px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
`

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <ReviewContainer>
        <Main review={this.props.review}/>
        <Aside review={this.props.review} helpful={this.props.helpful} notHelpful={this.props.notHelpful} id={this.props.id}/>

      </ReviewContainer>
    )
  }
}

export default Review;