import React from 'react';
import styled from 'styled-components';

const Box = styled.input`
  cursor: pointer;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  cursor: pointer;
`

function Checkbox({ checkbox, isChecked, filter}) {
  return (
    <li>
      <Box type="checkbox" checked={isChecked} onChange={filter}/> {checkbox}
    </li>
  )

}

export default Checkbox;