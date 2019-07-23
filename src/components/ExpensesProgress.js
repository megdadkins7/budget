import React from 'react'
import styled from 'styled-components'

import { numToCurrency } from '../lib'

const StyledExpensesProgress = styled.div`
    font-size: 32px;
    .ExpenseAmount {
      color: #3ddc97;
    }
    .ExpenseBudget {
      color: #9b9b9b;
    }
    .ExpenseMeter {
      height: 4px;
      background: #e8e8e8;
      border-radius: 2px;
      overflow: hidden;
    }
    .ExpenseMeter > span {
      display: block;
      height: 100%;
      border-radius: 2px;
      background-color: #9b9b9b;
    }
`;

function calcAmountCssPercent(trackerAmount, trackerTotal) {
  return `${Math.floor((trackerAmount / trackerTotal) * 100)}%`
}

export default function ExpensesProgress(props) {
    return(
        <StyledExpensesProgress>
            <span className='ExpenseAmount'>
                {numToCurrency(props.amount)}
            </span>
            <span className='ExpenseBudget'>/{props.budget}</span>
            <div className='ExpenseMeter'>
              <span 
                className='ExpenseBar'
                style={{
                  width: calcAmountCssPercent(props.amount, props.budget),
                }}
              />
            </div>
        </StyledExpensesProgress>
    )
}