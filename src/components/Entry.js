import React from "react";
import styled from "styled-components";

const Title = styled.span`
  fkex: 1;
  font-size: 15px;
  color: #636363;
  margin: auto;
  padding: 4px;
  text-align: center;
`;

const Wrapper = styled.section`
  display: flex;
  margin: auto;
  padding: 4px;
  background: #ebebeb;
  border-radius: 4px;
  width: 200px;
`;

export default function Entry(props) {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Title>${props.amount}</Title>
    </Wrapper>
  );
}