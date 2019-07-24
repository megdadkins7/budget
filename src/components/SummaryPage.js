import React from 'react'
import styled from 'styled-components'



const StyledSummaryPage = styled.div`
    .GridWrapper {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(4, 80px);
        grid-template-rows: repeat(3,100px);
        align-content: space-around;
        justify-content: space-between;
    }
    .HeaderCell {
        grid-column: 1 / 5;
    }
    .LeftScrollCell {
        grid-column: 1 / 3;
        grid-row: 2 / 4;
    }
    .TopRightStaticCell {
        grid-column: 3 / 5;
    }
`;

export default function SummaryPage() {
    return (
        <StyledSummaryPage>
            <div className='GridWrapper'>
                <div className='HeaderCell'>
                    <span>Hello from header/navbar</span>
                </div>
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