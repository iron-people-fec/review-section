import React from 'react';
import styled from 'styled-components';

function Checkbox({ checkbox, handleCheckedBox}) {
  return (
    <li>
      <input type="checkbox" checked={checkbox.isChecked} onChange={handleCheckedBox} value={checkbox.value} /> {checkbox.value}
    </li>
  )

}

export default Checkbox;