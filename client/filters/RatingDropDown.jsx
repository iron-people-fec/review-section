import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox.jsx';

const Container = styled.div``

const Checkboxes = styled.div`
transition: 3s ease-in;
position: absolute;
margin-top: 12px;
background-color: white;
width: 207.6px;
border:#888888 solid 1px;
border-radius: 4px;
padding: 0 10px;
box-sizing: border-box;
z-index: 10;
`

const Ul = styled.ul`
padding-inline-start: 0;
list-style-type: none;
font-size: 16px;
z-index: 10;

& li {
  padding: 10px 0;
}
`

const Overlay = styled.div`
position: fixed;
top:0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0);
z-index: 5;
`

function RatingDropDown({ filterByStars, stars, toggleStarFilterDropdown}) {
  return (
    <Container>
      <Overlay onClick={toggleStarFilterDropdown}></Overlay>
    <Checkboxes>
      <Ul>
        <Checkbox checkbox={'5 stars'} filter={() => filterByStars('five')} isChecked={stars['five']} />
        <Checkbox checkbox={'4 stars'} filter={() => filterByStars('four')} isChecked={stars['four']} />
        <Checkbox checkbox={'3 stars'} filter={() => filterByStars('three')} isChecked={stars['three']} />
        <Checkbox checkbox={'2 stars'} filter={() => filterByStars('two')} isChecked={stars['two']} />
        <Checkbox checkbox={'1 stars'} filter={() => filterByStars('one')} isChecked={stars['one']} />
        </Ul>
      </Checkboxes>
      </Container>
  )

}

export default RatingDropDown;