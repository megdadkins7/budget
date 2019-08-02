import React from 'react'

const expenseDonutData = {
  autoTransport: {
    title: "autoTransport",
    id: "autoTransport",
    current: 77,
    total: 360,
    budgetTotal: 2529
  },
  entertainment: {
    title: "entertainment",
    id: "entertainment",
    current: 161,
    total: 307,
    budgetTotal: 2529
  },
  housing: {
    title: "housing",
    id: "housing",
    current: 217,
    total: 246,
    budgetTotal: 2529
  },
  personalCare: {
    title: "personalCare",
    id: "personalCare",
    current: 250,
    total: 250,
    budgetTotal: 2529
  },
  other: {
    title: "other",
    id: "other",
    current: 1263,
    total: 1366,
    budgetTotal: 2529
  }
}

const radius = 15.91549430918954;
const circumference = 2 * Math.PI * radius

const autoTransportProgress = circumference - ((expenseDonutData.autoTransport.current / expenseDonutData.autoTransport.budgetTotal) * 100)
const entertainmentProgress = circumference - ((expenseDonutData.entertainment.current / expenseDonutData.entertainment.budgetTotal) * 100)
const housingProgress = circumference - ((expenseDonutData.housing.current / expenseDonutData.housing.budgetTotal) * 100)
const personalCareProgress = circumference - ((expenseDonutData.personalCare.current / expenseDonutData.personalCare.budgetTotal) * 100)
const otherProgress = circumference - ((expenseDonutData.other.current / expenseDonutData.other.budgetTotal) * 100)

export default function ExpenseDonut(props) {
    return (
        <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
          <circle className="DonutHole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
          <circle className="DonutRing" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="3"></circle>

          <circle className="DonutSegment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#FFF04C" strokeWidth="3" strokeDasharray={circumference} strokeDashoffset={otherProgress}></circle>  
          <circle className="DonutSegment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#3840D8" strokeWidth="3" strokeDasharray={circumference} strokeDashoffset={personalCareProgress}></circle>
          <circle className="DonutSegment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#F7763B" strokeWidth="3" strokeDasharray={circumference} strokeDashoffset={housingProgress}></circle>
          <circle className="DonutSegment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#DB67BE" strokeWidth="3" strokeDasharray={circumference} strokeDashoffset={entertainmentProgress}></circle>
          <circle className="DonutSegment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#8240B2" strokeWidth="3" strokeDasharray={circumference} strokeDashoffset={autoTransportProgress}></circle>
          <g className='ChartText'>
            <text x='50%' y='50%' className='ChartPercent'>{props.doughnutPercent}%</text>
            <text x='50%' y='50%' className='ChartLabel'>{props.doughnutlabel}</text>
          </g>
        </svg>
    )
}