import React from 'react'
import styled from 'styled-components'

import { numToCurrency } from '../lib'

const StyledIncomeProgress = styled.div`
    font-size: 32px;
    .IncomeAmount {
      color: #3ddc97;
    }
    .IncomeBudget {
      color: #9b9b9b;
    }
    .IncomeMeter {
      height: 4px;
      background: #e8e8e8;
      border-radius: 2px;
      overflow: hidden;
    }
    .IncomeMeter > span {
      display: block;
      height: 100%;
      border-radius: 2px;
      background-color: #9b9b9b;
    }
`;

function calcAmountCssPercent(trackerAmount, trackerTotal) {
  return `${Math.floor((trackerAmount / trackerTotal) * 100)}%`
}

export default function IncomeProgress(props) {
    return(
        <StyledIncomeProgress>
            <span className='IncomeAmount'>
                {numToCurrency(props.amount)}
            </span>
            <span className='IncomeBudget'>/{props.budget}</span>
            <div className='IncomeMeter'>
            <span 
                className='IncomeBar'
                style={{
                  width: calcAmountCssPercent(props.amount, props.budget),
                }}
              />
            </div>
        </StyledIncomeProgress>
    )
}
