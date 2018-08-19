import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { paginate } from '../utils/paginate';

const Pagination = props => {
    const { itemCount, pageSize, onPageChange, currentPage } = props;
    const pagesCount = Math.ceil(itemCount / pageSize);
    const pages = _.range(1, pagesCount + 1)
    if(pagesCount === 1) return null;
    console.log(currentPage);

    return (
    <nav>
        <ul className="pagination">
            {pages.map(page => (
                <li key={page} className={page === currentPage ? "page-item active": "page-item" }>
                    <a className="page-link" onClick={() => onPageChange(page)}> {page} </a>
                </li>
            ))}
        </ul>
    </nav>
    );
};

paginate.PropTypes = {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.number.isRequired,
    currentPage: PropTypes.func.isRequired,
}

export default Pagination;