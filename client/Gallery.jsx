import React from 'react';
import styled from 'styled-components';

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


function Gallery({ images }) {
  var selectedImages = images.length > 7 ? images.slice(0, 6) : images;

  return (
    <Container>
      <h3>Review Images</h3>
      <ImagesContainer>
        {selectedImages.map((image, i) => <Image key={ i} src={image} />)}
        <MoreImages>See more review images</MoreImages>
      </ImagesContainer>
    </Container>
  )
}

export default Gallery;