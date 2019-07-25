import React from 'react'
import styled from 'styled-components'



const StyledSummaryPage = styled.div`
.GridWrapper {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 80px);
    grid-template-rows: repeat(3, 200px);
    align-content: space-around;
    justify-content: space-between;
  }
  .LeftScrollCell {
    grid-column: 1 / 3;
    grid-row: 1 / 4;
  }
  .TopRightStaticCell {
    margin-top: 12px;
    grid-column: 3 / 5;
  }
`;

export default function SummaryPage() {
    return (
        <StyledSummaryPage>
            <div className='GridWrapper'>
                <div className='LeftScrollCell'>
                    <span>Hello from budget list</span>
                    <ul>
                        <li>There</li>
                        <li>Will</li>
                        <li>Be</li>
                        <li>A</li>
                        <li>List</li>
                        <li>Here</li>
                    </ul>
                </div>
                <div className='TopRightStaticCell'>
                    <span>Hello from budget overview</span>
                </div>
                <div className='BottomRightStaticCell'>
                    <span>Hello from doughnut charts</span>
                </div>
            </div>
        </StyledSummaryPage>
    )
}