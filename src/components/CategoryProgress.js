import React from 'react'
import styled from 'styled-components'

const StyledCategoryProgress = styled.div`
  font-size: 32px;
  margin: 10px;
  .page {
    display: inline-block;
  }
  .CategoryProgressAmount {
    color: #3ddc97;
  }
  .CategoryProgressBudget {
    color: #9b9b9b;
  }
  .CategoryProgressMeter {
    height: 1px;
    position: relative;
    background: #e8e8e8;
    border-radius: 25px;
    padding: 2px;
  }
  .CategoryProgressMeter > span {
    display: block;
    height: 100%;
    border-radius: 25px;
    background-color: #9b9b9b;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
  }
`

function calcAmountCssPercent(trackerAmount, trackerTotal) {
  return `${Math.floor((trackerAmount / trackerTotal) * 100)}%`
}

export default function CategoryProgress(props) {
  return (
    <StyledCategoryProgress>
      <div className="page">
        <span className="CategoryProgressAmount">${props.amount}</span>
        <span className="CategoryProgressBudget">/{props.budget}</span>
        <div className="CategoryProgressMeter">
          <span
            className="CategoryProgressBar"
            style={{
              width: calcAmountCssPercent(props.amount, props.budget),
            }}
          />
        </div>
      </div>
    </StyledCategoryProgress>
  )
}
