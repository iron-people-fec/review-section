import React from 'react';
import styled from 'styled-components'

const Container = styled.span`
  display: flex;
  align-items: center;
`

function Recommend({ recommend }) {

  if (recommend) {
    return (
      <Container><img src="/images/check.svg" style={{ width: "22px", marginRight: "5px" }}></img> <strong> Would recommend</strong></Container>
    )
  } else if (!recommend) {
    return (
      <Container><img src="/images/ex.svg" style={{ width: "22px", marginRight: "5px" }}></img><strong> Would not recommend</strong></Container>
    )
  }

}

export default Recommend;