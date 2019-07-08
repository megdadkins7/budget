import React from 'react'
import styled from 'styled-components'

import { numToCurrency } from '../lib'

const StyledEntry = styled.div`
  display: flex;
  padding: 10px;
  background: #ebebeb;
  border-radius: 4px;
  margin: 10px;

  span {
    font-size: 15px;
    color: #636363;
    text-align: center;
  }
  .EntryAmount {
    margin-left: 15px;
    font-weight: 500;
  }
`

export default function Entry(props) {
  return (
    <StyledEntry>
      <span>{props.title}</span>
      <span className="EntryAmount">{numToCurrency(props.amount)}</span>
    </StyledEntry>
  )
}
