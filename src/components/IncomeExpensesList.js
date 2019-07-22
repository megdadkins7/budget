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


export default function IncomeExpensesList(props) {
    return (
    <StyledList>
      <div>
        <span className='ListTitle'>{props.title}: </span>
      </div>
      <div className="ListItems">
        <span>{numToCurrency(props.amount)}</span>
        <span>/{props.total.toFixed(2)}</span>
      </div>
    </StyledList>
    )
}