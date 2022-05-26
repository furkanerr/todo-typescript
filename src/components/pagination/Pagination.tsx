import React from "react";
import style from "../../styles/Pagination.module.css";

interface Props {
  linkPerPage: number;
  totalLinks: number;
  setCurrentPage: (pageNumber: number) => void;
    currentPage: number;
}

const Pagination: React.FC<Props> = ({
  linkPerPage,
  totalLinks,
 
  setCurrentPage,
    currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalLinks / linkPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePrevNext = (number: number) => {
    setCurrentPage(number);
  };
  const paginate =(pageNumber:number) =>{
    setCurrentPage(pageNumber)
  }
  return (
    <div>
      <ul className={style.pagination}>
      {currentPage > 1 ? (
              <li
                className={style.pageItem}
                onClick={() => handlePrevNext(currentPage - 1)}
              >
                {" "}
                <span>Prev</span>
              </li>
            ) : null}
        {pageNumbers.map((number) => (
          <>
            

            <li key={number} className={style.pageItem}>
              <span onClick={() => paginate(number)} className={style.pageLink}>
                {number}
              </span>
            </li>
          </>
        ))}
         {currentPage !== pageNumbers.length  ? (
              <li
                className={style.pageItem}
                onClick={() => handlePrevNext(currentPage + 1)}
              >
                {" "}
                <span>Next</span>
              </li>
            ) : null}
      </ul>
    </div>
  );
};

export default Pagination;
