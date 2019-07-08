import React from 'react'
import styled from 'styled-components'

import Entry from './Entry'

import { numToCurrency } from '../lib'

const StyledSubCategory = styled.div`
  .SubCategoryHeader {
    display: flex;
    font-size: 13px;
    color: #4d4d4d;
    margin: 16px;
    font-weight: 500;
  }

  .SubCategoryTotal {
    margin-left: auto;
  }

  .SubCategoryEntries {
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;
  }
`

const subCategoryInfo = {
  id: 'booksmoviesmusic',
  title: 'Books/Movies/Music',
}

const subCategoryEntries = [
  { title: 'Mistborn', amount: 9.99 },
  { title: 'Name of the Wind', amount: 24.95 },
  { title: 'The Dark Knight', amount: 8.99 },
  { title: 'The Marvelous Mrs. Maisel', amount: 4.92 },
  { title: 'Mumford & Sons Vinyl', amount: 15.65 },
]

export const subCategoryTotal = subCategoryEntries.reduce(
  (nextEntry, totalEntry) => nextEntry + totalEntry.amount,
  0
)

export default function SubCategory(props) {
  return (
    <StyledSubCategory>
      <div className="SubCategoryHeader">
        <span>{subCategoryInfo.title}</span>
        <span className="SubCategoryTotal">
          {numToCurrency(subCategoryTotal)}
        </span>
      </div>
      <ul className="SubCategoryEntries">
        {subCategoryEntries.map(entryItem => (
          <Entry {...entryItem} />
        ))}
      </ul>
    </StyledSubCategory>
  )
}
