import React from 'react';
import styled from 'styled-components'

import { numToCurrency } from '../lib'

const StyledList = styled.div`
    display: flex;
    font-size: 13px;
    color: #4d4d4d;
    margin: 16px;
    font-weight: 500;
  .ListItems {
    margin-left: auto;
  }
  .ListTitle {
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;
  }
`;

export default function List(props) {
    return (
    <StyledList>
      <span className='ListTitle'>{props.title}: </span>
      <span className="ListItems">{numToCurrency(props.total)}</span>
    </StyledList>
    )
}