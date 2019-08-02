import React from 'react'

const incomeDonutData = {
  salary: {
    title: "salary",
    id: "salary",
    current: 2115,
    total: 2820,
    budgetTotal: 2990
  },
  iras: {
    title: "iras",
    id: "iras",
    current: 120,
    total: 120,
    budgetTotal: 2990
  },
  otherInvestments: {
    title: "otherInvestments",
    id: "otherInvestments",
    current: 50,
    total: 50,
    budgetTotal: 2990
  }
}

const radius = 15.91549430918954;
const circumference = 2 * Math.PI * radius

const salaryProgress = circumference - ((incomeDonutData.salary.current / incomeDonutData.salary.budgetTotal) * 100)
const irasProgress = circumference - ((incomeDonutData.iras.current / incomeDonutData.iras.budgetTotal) * 100)
const otherInvestmentsProgress = circumference - ((incomeDonutData.otherInvestments.current / incomeDonutData.otherInvestments.budgetTotal) * 100)

const chartData = []

export default function IncomeDonut(props) {
    return (
        <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
          <circle className="DonutHole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
          <circle className="DonutRing" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="3"></circle>
            
          <circle className="DonutSegment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#25C6FC" strokeWidth="3" strokeDasharray={circumference} strokeDashoffset={salaryProgress} angleOffset={-90}></circle>
          <circle className="DonutSegment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#3ddc97" strokeWidth="3" strokeDasharray={circumference} strokeDashoffset={irasProgress}></circle>
          <circle className="DonutSegment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#FFF04C" strokeWidth="3" strokeDasharray={circumference} strokeDashoffset={otherInvestmentsProgress}></circle>
          <g className='ChartText'>
            <text x='50%' y='50%' className='ChartPercent'>{props.doughnutPercent}%</text>
            <text x='50%' y='50%' className='ChartLabel'>{props.doughnutlabel}</text>
          </g>
        </svg>
    )
}