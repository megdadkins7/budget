import React from "react";
import styled from "styled-components";

const StyledEntry = styled.div`
  display: flex;
  margin: auto;
  padding: 4px;
  background: #ebebeb;
  border-radius: 4px;
  width: 300px;

  span {
    flex: 1;
    font-size: 15px;
    color: #636363;
    margin: auto;
    padding: 4px;
    text-align: center
  }
`;

export default function Entry(props) {
  return (
    <StyledEntry>
      <span>{props.title}</span>
      <span>${props.amount}</span>
    </StyledEntry>
  );
} 