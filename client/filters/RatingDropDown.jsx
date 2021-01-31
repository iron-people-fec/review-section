import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox.jsx';

const Checkboxes = styled.ul`
padding-inline-start: 0;
list-style-type: none;
`

function RatingDropDown({ filterByStars, stars}) {
  return (
    <ul>
        <Checkbox checkbox={'5 stars'} filter={() => filterByStars('five')} isChecked={stars['five']} />
        <Checkbox checkbox={'4 stars'} filter={() => filterByStars('four')} isChecked={stars['four']} />
        <Checkbox checkbox={'3 stars'} filter={() => filterByStars('three')} isChecked={stars['three']} />
        <Checkbox checkbox={'2 stars'} filter={() => filterByStars('two')} isChecked={stars['two']} />
        <Checkbox checkbox={'1 stars'} filter={() => filterByStars('one')} isChecked={stars['one']} />
    </ul>
  )

}

export default RatingDropDown;