import React from 'react';
import { Link } from 'react-router-dom';

const pagination = () => {
  return (
    <nav>
      <ul
        className="pagination"
        style={{ justifyContent: 'center', paddingTop: '20px' }}
      >
        <li className={`page-item active`}>
          <Link className="page-link" to={'#'}>
            1
          </Link>
        </li>
        <li className={`page-item `}>
          <Link className="page-link" to={'#'}>
            2
          </Link>
        </li>
        <li className={`page-item `}>
          <Link className="page-link" to={'#'}>
            3
          </Link>
        </li>
        <li className={`page-item `}>
          <Link className="page-link" to={'#'}>
            4
          </Link>
        </li>
        <li className={`page-item `}>
          <Link className="page-link" to={'#'}>
            5
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default pagination;
