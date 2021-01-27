import React from 'react';
import styled from 'styled-components';

function Checkbox({ checkbox, isChecked, filter}) {
  return (
    <li>
      <input type="checkbox" checked={isChecked} onChange={filter}/> {checkbox}
    </li>
  )

}

export default Checkbox;