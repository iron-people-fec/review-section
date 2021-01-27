import React from 'react';
import styled from 'styled-components';

const Popup = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  width: 70%;
  height: 720px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  border-radius: 5px;
  `
const Container = styled.div`

`

const Overlay = styled.div`
display: none;
position: absolute;
top:0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.5);
z-index: 5;
`

const CloseBtn = styled.span`
  font-size: 50px;
  cursor: pointer;
  position: absolute;
  right: 30px;
`

const Review = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 660px;
  width: 45%;
  box-sizing: border-box;
`

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 45%;
  width: 610px;
  box-sizing: border-box;
`

function Modal({ reviews }) {

  var reviewsWithPics = reviews.filter(review => review.images.length !== 0);

  var hi = reviewsWithPics.map(review => {
    <img src={review.images[0]}></img>
  })
  var handleClosePopup = function () {

  }

  return (
    <Container>
      <Overlay></Overlay>
      <Popup>
        <CloseBtn >&times;</CloseBtn>
        <Review>
          <Left>
          <svg width="34" height="34">
          <circle r="15" cy="17" cx="17" stroke="#333" fill="none" strokeWidth="2.2"></circle>
          <polyline points="20,9 13,17 20,25" fill="none" stroke="#333" strokeWidth="2.2"/>
          </svg>
            {/* <img src="https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg" width="464px"></img> */}
            {hi[0]}
        <svg width="34" height="34">
          <circle r="15" cy="17" cx="17" stroke="#333" fill="none" strokeWidth="2.2"></circle>
          <polyline points="14,9 21,17 14,25" fill="none" stroke="#333" strokeWidth="2.2"/>
          </svg>
          </Left>
          <Right>
            <h3>Header</h3>
          </Right>
        </Review>
      </Popup>
    </Container>
  )
}

export default Modal;