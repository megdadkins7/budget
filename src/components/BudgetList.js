import React from 'react';
import styled from 'styled-components';

import List from './List';
import IncomeExpensesList from './IncomeExpensesList'

import { numToCurrency } from '../lib'

const StyledBudgetList = styled.div`
    width: 80%;
    h3 {
        display: flex;
        color: #4a4a4a;
        font-size: 22px;
        font-weight: 500;
        margin-left: 10px;
    }

    h4 {
        color: #4a4a4a;
        font-size: 18px;
        font-weight: 500;
        margin-left: 30px;
    }
    .NetWorthNum {
        margin-left: auto;
    }
`;

const incomeCategories = [
    {title: 'Salary', amount: 2115, total: 2820},
    {title: 'IRAs', amount: 120, total: 120},
    {title: 'Other Investments', amount: 50, total: 50},
]

const expenseCategories = [
    {title: 'Auto/Transport', amount: 77, total: 360},
    {title: 'Entertainment', amount: 161, total: 307},
    {title: 'Housing', amount: 217, total: 246},
    {title: 'Personal Care', amount: 250, total: 250},
    {title: 'Other', amount: 1263, total: 1366}
]

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


export default function BudgetList() {
    return (
        <StyledBudgetList>
            <div className='Income'>
                <h3>Montly Income</h3>
                <ul className='IncomeCategories'>
                    {incomeCategories.map((incomeItem, i) => (
                        <IncomeExpensesList key={`${incomeItem.title}${i}`} {...incomeItem} />
                    ))}
                </ul>
            </div>
            <div className='Expenses'>
                <h3>Monthly Expenses</h3>
                <ul className='ExpensesCategories'>
                    {expenseCategories.map((expenseItem, i) => (
                        <IncomeExpensesList key={`${expenseItem.title}${i}`} {...expenseItem} />
                    ))}
                </ul>
            </div>
            <div className='NetWorth'>
                <h3>Current Net Worth: <span className='NetWorthNum'>{numToCurrency(calcNetWorth())}</span></h3>
                <h4>Assets:</h4>
                <ul>
                    {netWorthCategories.assets.map((assetItem, i) => (
                        <List key={`${assetItem.title}${i}`} {...assetItem} />
                    ))}
                </ul>
                <h4>Liabilities:</h4>
                <ul>
                    {netWorthCategories.liabilities.map((liabilityItem, i) => (
                        <List key={`${liabilityItem.title}${i}`} {...liabilityItem} />
                    ))}
                </ul>
            </div>
        </StyledBudgetList>
    )
}


