import React from "react";
import styled from "styled-components";

const StyledEntry = styled.div`
  display: flex;
  padding: 10px;
  background: #ebebeb;
  border-radius: 4px;
  margin: 10px;
} 

  span {
    font-size: 15px;
    color: #636363;
    text-align: center;
  }
  
  .entry-amount {
    margin-left: 15px;
    font-weight: 600;
  }
`;

export default function Entry(props) {
  return (
    <StyledEntry>
      <span>{props.title}</span>
      <span className= 'entry-amount'>${props.amount}</span>
    </StyledEntry>
  );
} 