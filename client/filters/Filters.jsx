import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox.jsx';

function Filters({ checkBoxes, handleCheckedBox }) {

  const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #F7F7F7;
    margin: 20px 0;
    padding: 1.5em 17px;
    justify-content: space-between;
`

const Dropdown = styled.button`
  display: inline-block;
  padding: 10px 13px;
  border:#888888 solid 1px;
  border-radius: 4px;
  background-color: white;
  color: #333333;
  margin-right: 1em;
  font-size: inherit;

  &:focus {
    outline: gray 1px dashed;
    outline-offset: 2px;
  }
`

const Checkboxes = styled.ul`
  padding-inline-start: 0;
  list-style-type: none;
`

const Arrow = styled.span`
  margin-left: 20px;
`
  return (
    <Container>
      <div>
      <Dropdown>sort by <strong>most recent</strong>          <Arrow><svg width="14" height="14">
          <polyline points="1,7 7,13 13,7" fill="none" stroke="gray" strokeWidth="1.3"/>
          </svg>
          </Arrow></Dropdown>
        <Dropdown>filter by <strong>all ratings</strong>
          <Arrow><svg width="14" height="14">
          <polyline points="1,7 7,13 13,7" fill="none" stroke="gray" strokeWidth="1.3"/>
          </svg>
          </Arrow>
        </Dropdown>
      </div>
      <Checkboxes>
      {checkBoxes.map((checkbox, i) => (
        <Checkbox checkbox={checkbox} handleCheckedBox={handleCheckedBox} key={i}/>
      ))}
      </Checkboxes>
    </Container>
  )
}

export default Filters;