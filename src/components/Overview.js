import React from 'react'
import styled from 'styled-components'

import IncomeProgress from './IncomeProgress'
import ExpensesProgress from './ExpensesProgress'

import { numToCurrency } from '../lib'

const StyledOverview = styled.div`
    width: 80%;
    .OverviewWrapper {
      display: flex;
      align-items: center;
    }
    .OverviewHeader {
      display: flex;
      align-items: center;
    }
    .OverviewTitle {
      color: #4a4a4a;
      font-size: 22px;
      font-weight: 500;
    }
    .OverviewRightChild {
      margin-left: auto;
    }
    .NetWorthNum {
        margin-left: auto;
        font-size: 32px;
        color: #9b9b9b;
    }
`;

const incomeCategories = [
    {title: 'Salary', amount: 2115, total: 2820},
    {title: 'IRAs', amount: 120, total: 120},
    {title: 'Other Investments', amount: 50, total: 50},
]

export const currentIncome = incomeCategories.reduce(
    (nextAmount, currentTotal) => nextAmount + currentTotal.amount,
    0
)

export const incomeTotal = incomeCategories.reduce(
    (nextTotal, monthlyIncome) => nextTotal + monthlyIncome.total,
    0
)

const expenseCategories = [
    {title: 'Auto/Transport', amount: 77, total: 360},
    {title: 'Entertainment', amount: 161, total: 307},
    {title: 'Housing', amount: 217, total: 246},
    {title: 'Personal Care', amount: 250, total: 250},
    {title: 'Other', amount: 1263, total: 1366}
]

export const currentExpense = expenseCategories.reduce(
    (nextAmount, currentTotal) => nextAmount + currentTotal.amount,
    0
)

export const expenseTotal = expenseCategories.reduce(
    (nextTotal, monthlyExpense) => nextTotal + monthlyExpense.total, 
    0
)

const netWorthCategories = {
    assets: [
        {title: 'Checking', total: 2648},
        {title: 'Savings', total: 11262},
        {title: 'Retirement', total: 6737},
        {title: 'Other Investments', total: 2810},
    ],
    liabilities : [
        {title: 'Private Loans', total: 3428},
        {title: 'Federal Loans', total: 23735},
        {title: 'Credit Cards', total: 665},
    ]
}

function calcNetWorth(assets, liabilities) {
    const totalAssets = netWorthCategories.assets.reduce(
        (nextTotal, netWorthTotal) => nextTotal + netWorthTotal.total,
        0
      );
    const totalLiabilities = netWorthCategories.liabilities.reduce(
        (nextTotal, netWorthTotal) => nextTotal + netWorthTotal.total, 
        0
      );
    const netWorth = totalAssets - totalLiabilities;
    return netWorth;
}

export default function Overview(props) {
    return (
        <StyledOverview>
            <div className='OverviewWrapper'>
              <div className='OverviewLeftChild'>
              <div className='OverviewHeader'>
                <span className='OverviewTitle'>Income: </span>
              </div>
              </div>
              <div className='OverviewRightChild'>
                <IncomeProgress
                    amount={currentIncome}
                    budget={incomeTotal.toFixed(2)}
                />
              </div>
            </div>
            <div className='OverviewWrapper'>
            <div className='OverviewLeftChild'>
            <div className='OverviewHeader'>
                <span className='OverviewTitle'>Expenses: </span>
            </div>
            </div>
            <div className='OverviewRightChild'>
                <ExpensesProgress
                    amount={currentExpense}
                    budget={expenseTotal.toFixed(2)}
                />
            </div>
            </div>
            <div className='OverviewWrapper'>
            <div className='OverviewLeftChild'>
            <div className='OverviewHeader'>
                <span className='OverviewTitle'>Net Worth: </span>
            </div>
            </div>
                <span className='NetWorthNum'>{numToCurrency(calcNetWorth())}</span>
            
            </div>
        </StyledOverview>
    )
}