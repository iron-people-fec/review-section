import React from 'react';
import styled from 'styled-components';
import Modal from './reviews/Modal.jsx';

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
  const Header = styled.h3`
  font-size: 19px;
`

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentReviewIndex: 0,
      dislayModal: false
    };
    // this.changeIndex = this.changeIndex.bind(this);
  }

  handleClickedImage() {
    this.setState({
      currentReviewIndex: event.target.getAttribute('data-id'),
      dislayModal: true
    });
    document.body.style.overflow = 'hidden';
  }

  toggleModal() {
    this.setState({
      dislayModal: !this.state.dislayModal
    });
    document.body.style.overflow = 'unset';
  }

  changeIndex(forward) {
    var max = this.props.reviews.length - 1;
    if (forward) {
      var i = this.state.currentReviewIndex;
      i++
      i = i > max ? 0 : i;
    } else {
      var i = this.state.currentReviewIndex;
      i--
      i = i === -1 ? max : i;
    }
    this.setState({
      currentReviewIndex: i
    });
  }

  render() {
    var selectedImages = this.props.images.length > 7 ? this.props.images.slice(0, 6) : this.props.images;
    const dislayModal = this.state.dislayModal;

    return (
      <Container>
        <Header>Review Images</Header>
        <ImagesContainer>
          {selectedImages.map((image, i) => <Image key={i} src={image} data-id={i} onClick={this.handleClickedImage.bind(this)}/>)}

          <MoreImages>See more review images</MoreImages>
        </ImagesContainer>
        {dislayModal ? <Modal closeModal={this.toggleModal.bind(this)} reviews={this.props.reviews} index={this.state.currentReviewIndex} images={this.props.images} changeIndex={this.changeIndex.bind(this)}/>: ''}
      </Container>
    )
  }

}

export default Gallery;