import React from 'react'
import styled from 'styled-components'

import BudgetList from './BudgetList'
import Overview from './Overview'
import IncomeDonut from './IncomeDonut'
import ExpenseDonut from './ExpenseDonut'

const StyledSummaryPage = styled.div`
  .GridWrapper {
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(10px, auto);
    grid-template-rows: 20px calc(100vh - 700px);
  }
  .GridWrapper > div {
    padding: 1em;
  }
  .Header {
    grid-column: 1 / 4;
    grid-row: 1;
    
  }
  .Header * {
    display: inline;
  }
  .BudgetTitle {
    color: #4d4d4d;
    margin-left: 20px;
    font-weight: 500;
  }
  .Header li {
    margin: 20px;
  }
  .Header li a {
    font-weight: 500;
    color: #4d4d4d;
    text-decoration: none;
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
    margin-right: 150px;
  }
  .DoughnutRight {
    grid-column: 3;
    grid-row: 4;
    margin-right: 150px;
  }
  .ChartText {
    fill: #4a4a4a;
    -moz-transform: translateY(0.25em);
    -ms-transform: translateY(0.25em);
    -webkit-transform: translateY(0.25em);
    transform: translateY(0.25em);
  }
  .ChartPercent {
    font-size: 0.6em;
    line-height: 1;
    text-anchor: middle;
    -moz-transform: translateY(-0.25em);
    -ms-transform: translateY(-0.25em);
    -webkit-transform: translateY(-0.25em);
    transform: translateY(-0.25em);
  }
  .ChartLabel {
    font-size: 0.2em;
    text-transform: uppercase;
    text-anchor: middle;
    -moz-transform: translateY(0.7em);
    -ms-transform: translateY(0.7em);
    -webkit-transform: translateY(0.7em);
    transform: translateY(0.7em);
  }
`;

export function doughnutPercent(amount, total) {
  return ((amount / total) * 100).toFixed(0);
}

export default function SummaryPage() {
    return (
        <StyledSummaryPage>
            <div className='GridWrapper'>
                <header className='Header'>
                  <nav>
                    <span className='BudgetTitle'>BGT</span>
                    <ul>
                      <li className='NavNames'><a href="#">Summary</a></li>
                      <li className='NavNames'><a href="#">Entries</a></li>
                    </ul>
                  </nav>
                </header>
                <div className='Content'>
                    <div className='LeftScrollCell'>
                        <BudgetList />
                    </div>
                </div>
                    <div className='TopRightStaticCell'>
                        <Overview />
                    </div>
                    <div className="DoughnutLeft">
                      <IncomeDonut 
                        doughnutlabel='income'
                        amount= "2285"
                        total="2990"
                        doughnutPercent={doughnutPercent(2285, 2990)}
                      />
                    </div>
                    <div className="DoughnutRight">
                      <ExpenseDonut 
                        doughnutlabel='expenses' 
                        amount="1968"
                        total="2529"
                        doughnutPercent={doughnutPercent(1968, 2529)} 
                      />
                    </div>
            </div>
        </StyledSummaryPage>
    )
}