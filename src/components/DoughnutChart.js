import React from 'react'

import { doughnutPercent } from './SummaryPage'

// const radius = 15.91549430918954;
// const circumference = 2 * Math.PI * radius;

// function createStrokeDashArray() {}
//  function createStrokeDashOffset(val) {
//   const progress = val / 100;
//   const dashOffset = circumference * (1 - progress)
//   DonutSegment.style.strokeDashoffset = dashOffset;
// }

// const donutData = [
//   {title: "salary", id: "salary", current: 2115, total: 2820, incomeTotal: 2990},
//   {title: "iras", id: "iras", current: 120, total: 120, incomeTotal: 2990},
//   {title: "otherInvestments", id: "otherInvestments", current: 50, total: 50, incomeTotal: 2990},
//   {title: "autoTransport", id: "autoTransport", current: 77, total: 360, expenseTotal: 2529},
//   {title: "entertainment", id: "entertainment", current: 161, total: 307, expenseTotal: 2529},
//   {title: "housing", id: "housing", current: 217, total: 246, expenseTotal: 2529},
//   {title: "personalCare", id: "personalCare", current: 250, total: 250, expenseTotal: 2529},
//   {title: "other", id: "other", current: 1263, total: 1366, expenseTotal: 2529},
// ]

// function doughnutPercent(amount, total) {
//   return ((amount / total) * 100).toFixed(0);
// }

// Salary: 71%
// IRAS: 4%
// Other: 2%

// A: 3%
// E: 6%
// H: 9%
// P: 10%
// O: 50%

export default function DoughnutChart(props) {
    return (
        <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
          <circle className="DonutHole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
          <circle className="DonutRing" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="3"></circle>
            
          <circle className="DonutSegment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#25C6FC" strokeWidth="3" strokeDasharray="40 60" strokeDashoffset="25"></circle>
          <circle className="DonutSegment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#3ddc97" strokeWidth="3" strokeDasharray="20 80" strokeDashoffset="85"></circle>
          <circle className="DonutSegment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#FFF04C" strokeWidth="3" strokeDasharray="30 70" strokeDashoffset="65"></circle>
          <g className='ChartText'>
            <text x='50%' y='50%' className='ChartPercent'>{props.doughnutPercent}%</text>
            <text x='50%' y='50%' className='ChartLabel'>{props.doughnutlabel}</text>
          </g>
        </svg>
    )
}