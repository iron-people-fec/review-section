import React from 'react';
import styled, {keyframes}  from 'styled-components';

const progress = keyframes`
  {
    0% {
      stroke-dasharray: 0 100;
    }
}
`

const Circle = styled.path`
  animation: ${progress} 1s ease-out forwards;
`



const Text = styled.text`
  font-weight: 600;
  font-size: 9px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
`

const PercentageCircle = ({ num }) => {
  var percent = `${num}, 100`
  return (
    <svg width="60" viewBox="0 0 36 36">
      <g>
        <Circle d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#F7F7F7" strokeWidth="1.5" strokeDasharray="100, 100" />

        <Circle d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="green" strokeWidth="1.5" strokeDasharray={percent} strokeLinecap="round" />

        <Text textAnchor="middle" x="50%" y="60%" fill="green">{String(num)}</Text>
      </g>
    </svg>
  );
}

export default PercentageCircle;