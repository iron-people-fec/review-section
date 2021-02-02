import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox.jsx';

const Container = styled.div``

const Checkboxes = styled.div`
transition: 3s ease-in;
position: absolute;
margin-top: 12px;
background-color: white;
width: 176px;
left: 20px;
border:#888888 solid 1px;
border-radius: 4px;
padding: 0 10px;
box-sizing: border-box;
z-index: 10;
`

const Ul = styled.ul`
padding-inline-start: 0;
list-style-type: none;
font-size: 14px;
z-index: 10;

& li {
  padding: 15px 0;
  border-bottom: solid #cacaca 1px;
}

& li:last-child {
  border-bottom: none;
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

function SortersDropdown({toggleSorterDropdown}) {
  return (
    <Container>
      <Overlay onClick={toggleSorterDropdown}></Overlay>
    <Checkboxes>
      <Ul>
          <li>most recent</li>
          <li>highest rated</li>
          <li>lowest rated</li>
          <li>most helpful</li>
        </Ul>
      </Checkboxes>
      </Container>
  )

}

export default SortersDropdown;