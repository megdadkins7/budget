import React from 'react';
import styled from 'styled-components';

import Entry from './Entry';


const StyledSubCategory = styled.div`
  width: 80%;

  .subCategory-header {
    display: flex;
    font-size: 13px;
    color: #4d4d4d;
    margin: 16px;
    font-weight: 600;
  }

  .subCategory-total {
    margin-left: auto;
  }

  .subCategory-entries {
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;
  }
`;

const subCategoryInfo = {
    id: 'unique',
    title: 'Books/Movies/Music',
  }
      
const subCategoryEntries = [
  {title: "Mistborn", amount: 9.99},
  {title: "Name of the Wind", amount: 24.95},
  {title: "The Dark Knight", amount: 8.99},
  {title: "The Marvelous Mrs. Maisel", amount: 4.92},
  {title: "Mumford & Sons Vinyl", amount: 15.65}
];

const subCategoryTotal = subCategoryEntries.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue.amount;
}, 0)

export default function SubCategory(props) {
    return (
     <StyledSubCategory>
      <div className='subCategory-header'>
        <span>{subCategoryInfo.title}</span>
        <span className='subCategory-total'>${subCategoryTotal}</span>
      </div>
      <ul className='subCategory-entries'>
        {subCategoryEntries.map(item => {
          return <Entry {...item} />
        })}
      </ul>
     </StyledSubCategory>
    );
  }