import React from 'react'
import styled from 'styled-components'


const StyledSummaryPage = styled.div`
  .GridWrapper {
    max-width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(10px, auto);
  }
  .GridWrapper > div {
    padding: 1em;
  }
  .Header {
    grid-column: 1 / 4;
    grid-row: 1;
  }
  .Content {
    grid-column: 1;
    grid-row: 2 / 5;
    overflow: auto;
  }
  .LeftScrollCell {
    height: 100px;
  }
  .TopRightStaticCell {
    grid-column: 2/4;
    grid-row: 2/4;
  }
  .DoughnutLeft {
    grid-column: 2;
    grid-row: 4;
  }
  .DoughnutRight {
    grid-column: 3;
    grid-row: 4;
  }
`;

export default function SummaryPage() {
    return (
        <StyledSummaryPage>
            <div className='GridWrapper'>
                <div className='Header'>Hello from header</div>
                <div className='Content'>
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
                </div>
                    <div className='TopRightStaticCell'>
                        <span>Hello from budget overview</span>
                    </div>
                    <div className="DoughnutLeft">
                      <span>Hello from doughnut charts</span>
                    </div>
                    <div className="DoughnutRight">
                      <span>Hello from doughnut charts</span>
                    </div>
            </div>
        </StyledSummaryPage>
    )
}