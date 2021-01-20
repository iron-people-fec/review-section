import React from 'react';
import styled from 'styled-components';

function Verified(props) {
  return <span>,
    <GreenText> Verified purchaser</GreenText>
  </span>
}

const GreenText = styled.span`
  color: rgb(0, 102, 1);
`

export default Verified;