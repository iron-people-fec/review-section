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
    margin: 0 8px;
    overflow: hidden;
    object-fit: cover;

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
    margin-left: 8px;

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
    this.moreImages = false;
    this.handleClickedImage = this.handleClickedImage.bind(this)
    this.state = {
      currentReviewIndex: 0,
      dislayModal: false
    };
  }

  handleClickedImage(atBeginning) {
    if (atBeginning === false) {
      this.setState({
        currentReviewIndex: event.target.getAttribute('data-id'),
        dislayModal: true
      });
      document.body.style.overflow = 'hidden';
    } else {
      this.setState({
        currentReviewIndex: 0,
        dislayModal: true
      });
      document.body.style.overflow = 'hidden';
    }
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

  // componentDidMount() {

    render() {
      var moreImages = false;
      var selectedImages = []
      if (this.props.images.length >= 7) {
        selectedImages = this.props.images.slice(0, 6);
        this.moreImages = true;
      } else {
        selectedImages = this.props.images;
      }

      const dislayModal = this.state.dislayModal;


    return (
      <Container>
        <Header>Review images</Header>
        <ImagesContainer>
          {selectedImages.map((image, i) => <Image key={i} src={image} data-id={i} onClick={() => this.handleClickedImage(false)}/>)}

          {this.moreImages ? <MoreImages onClick={() => this.handleClickedImage(true)}>See more review images</MoreImages> : ''}
        </ImagesContainer>
        {dislayModal ? <Modal closeModal={this.toggleModal.bind(this)} reviews={this.props.reviews} index={this.state.currentReviewIndex} images={this.props.images} changeIndex={this.changeIndex.bind(this)} helpful={this.props.helpful} notHelpful={this.props.notHelpful}/>: ''}
      </Container>
    )
  }

}

export default Gallery;