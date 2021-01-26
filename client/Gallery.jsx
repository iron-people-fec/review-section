import React from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';

  const ImagesContainer = styled.div`
    height: 125px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
  `
  const Image = styled.img`
    width: 125px;
    height: 125px;
    margin: 0 7px;
    overflow: hidden;

    &:hover {
      cursor: pointer;
    }

    &:focus {
      outline: gray 1px dashed;
      outline-offset: 2px;
    }
  `
  const Container = styled.div`
    margin: 0 auto;
    margin-bottom: 3em;
    text-align: center;
  `
  const MoreImages = styled.div`
    display: flex;
    align-items: center;
    border: gray solid 1px;
    width: 125px;
    height: 125px;
    box-sizing: border-box;
    font-size: 14px;
    padding: 12px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }

    &:focus {
      outline: gray 1px dashed;
      outline-offset: 2px;
    }
  `

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentReviewIndex: 0
    }
  }


  render() {
    var selectedImages = this.props.images.length > 7 ? this.props.images.slice(0, 6) : this.props.images;
    // var handleClickedImage = function (i=0) {

      // }
    return (
      <Container>
        <h3>Review Images</h3>
        <ImagesContainer>
          {selectedImages.map((image, i) => <Image key={ i} src={image} handleClickedImage={() => handleClickedImage(i)}/>)}
          <MoreImages>See more review images</MoreImages>
        </ImagesContainer>
        <Modal reviews={this.props.reviews}/>
      </Container>
    )
  }

}

export default Gallery;