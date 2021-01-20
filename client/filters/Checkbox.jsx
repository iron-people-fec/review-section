import React from 'react';
import styled from 'styled-components';

function Checkbox({ checkbox, handleCheckedBox}) {
  return (
    <li>
      <input key={checkbox.id} type="checkbox" checked={checkbox.isChecked} onClick={handleCheckedBox} value={checkbox.value} /> {checkbox.value}
    </li>
  )

}

export default Checkbox;