import React from 'react';
import styled from 'styled-components';

const Text = styled.text`
  font-weight: 400;
  font-size: 12px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
`

const Circle = ({ value }) => {
  if (isNaN(value)) value = 0;
  var num = (Math.round(((value/100) * 5) * 10) / 10).toFixed(1);
  var percent = `${value}, 100`

  if (value > 2) {
    return (
    <svg width="43" viewBox="0 0 36 36">
      <g>
        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#F7F7F7" strokeWidth="1.8" strokeDasharray="100, 100"/>

        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="green" strokeWidth="1.8" strokeDasharray={percent} strokeLinecap="round"/>

        <Text textAnchor="middle" x="50%" y="63%" fill="green">{`${num}`}</Text>
      </g>
    </svg>
    );
  } else {
    return (
      <svg width="43" viewBox="0 0 36 36">
        <g>
          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#F7F7F7" strokeWidth="1.8" strokeDasharray="100, 100"/>

          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgb(232, 105, 0)" strokeWidth="1.8" strokeDasharray={percent} strokeLinecap="round"/>

          <Text textAnchor="middle" x="50%" y="63%" fill="rgb(232, 105, 0)">{num}</Text>
        </g>
      </svg>
      );
  }
}

export default Circle;