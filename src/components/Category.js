import React from 'react'
import styled from 'styled-components'

import CategoryProgress from './CategoryProgress'
import SubCategory, { subCategoryTotal } from './SubCategory'

const StyledCategory = styled.div`
  width: 80%;
  .CategoryWrapper {
    display: flex;
    align-items: center;
  }
  .CategoryHeader {
    display: flex;
    align-items: center;
  }
  .CategoryCircle {
    margin: 10px;
    background: #46237a;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  .CategoryTitle {
    color: #4a4a4a;
    font-size: 22px;
    font-weight: 500;
  }
  .CategoryDescription {
    color: #9b9b9b;
    font-size: 12px;
  }
  .CategoryRightChild {
    margin-left: auto;
  }
`

const data = {
  id: 'entertainment',
  title: 'Entertainment',
  description: 'Pleasure such as dining out, concerts, etc',
  budget: 500,
  subCategories: [
    { title: 'Books/Movies/Music', total: 20 },
    { title: 'Dining Out', total: 125 },
    { title: 'Concerts/Sports Events', total: 50 },
    { title: 'Vacation/Experiences', total: 100 },
    { title: 'Other', total: 25 },
  ],
}

const categoryTotal = data.subCategories.reduce(
  (nextTotal, subCategoryBudget) => nextTotal + subCategoryBudget.total,
  0
)

export default function Category() {
  return (
    <StyledCategory>
      <div className="CategoryWrapper">
        <div className="CategoryLeftChild">
          <div className="CategoryHeader">
            <div className="CategoryCircle"></div>
            <div className="CategoryMeta">
              <div className="CategoryTitle">{data.title}</div>
              <div className="CategoryDescription">{data.description}</div>
            </div>
          </div>
        </div>
        <div className="CategoryRightChild">
          <CategoryProgress
            amount={subCategoryTotal}
            budget={categoryTotal.toFixed(2)}
          />
        </div>
      </div>
      <ul className="CategoryList">
        {data.subCategories.map((subCategoryItem, i) => (
          <SubCategory key={`${data.id}${i}`} {...subCategoryItem} />
        ))}
      </ul>
    </StyledCategory>
  )
}
