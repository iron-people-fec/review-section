import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox.jsx';

function Filters({checkBoxes, handleCheckedBox}) {
  return (
    <Container>
      <div>
      <Dropdown>sort by <strong>most recent</strong></Dropdown>
      <Dropdown>filter by <strong>all ratings</strong></Dropdown>
      </div>
      <ul>
      {checkBoxes.map((checkbox, i) => (
        <Checkbox checkbox={checkbox} handleCheckedBox={handleCheckedBox} key={i}/>
      ))}
      </ul>
    </Container>
  )
}

const Container = styled.div`
display: flex;
align-items: center;
background-color: #F7F7F7;
margin: 20px 0;
padding: 1.5em 17px;
justify-content: space-between;
`

const Dropdown = styled.span`
display: inline-block;
padding: 10px 20px;
border:#888888 solid 1px;
  border-radius: 4px;
  background-color: white;
  color: #333333;
  margin-right: 1em;
`

export default Filters;