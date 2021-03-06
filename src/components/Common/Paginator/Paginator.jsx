import React, { useState } from 'react';
import s from './Paginator.module.scss';

let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

  //кол-во страниц
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  //массив страниц пагинации
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  //кол-во порций
  let portionCount = Math.ceil(pagesCount / portionSize);

  //LS для текущей порции
  let [portionNumber, setPortionNumber] = useState(1);

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={s.pagination}>
      {portionNumber > 1 &&
        <button onClick={ () => {setPortionNumber(portionNumber-1)} }>Prev</button>}

      {pages
        .filter(p => {
          return (p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        })
        .map(p => {
          return (
            <span className={`${s.paginationPage} ${currentPage === p && s.paginationPageSelected}`}
              onClick={(e) => { onPageChanged(p) }}>
              {p}
            </span>
          )
        })
      }

      {portionCount > portionNumber &&
        <button onClick={ () => {setPortionNumber(portionNumber+1)} }>Prev</button>}
    </div>
  )
}

export default Paginator;