import React from 'react';
import styled from 'styled-components';

function Helpful({ helpful_count }) {
  return (
    <span>{helpful_count === 1 ? `1 guest found this review helpful. Did you?` : `${helpful_count} guests found this review helpful. Did you?`}</span>
  )

}

export default Helpful;