import React from 'react';
import styled from 'styled-components'

function WouldRecommend(props) {
  return <Container><img src="/images/check.svg" style={{ width: "22px", marginRight: "5px" }}></img> <strong> Would recommend</strong></Container>
}

const Container = styled.span`
  display: flex;
  align-items: center;
`

export default WouldRecommend;