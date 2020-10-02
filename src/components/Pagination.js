import React from 'react'
import { Link } from 'react-router-dom'
import './ui/Pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate, previousPage, nextPage }) => {
    const pageNumbers = [];

    for (let i =1; i<=Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <div>
            
        <nav aria-label="Page navigation example">
        <ul class="pagination pg-blue">
            <li class="page-item" onClick={()=> previousPage()}>
                <a class="page-link" tabindex="-1">Previous</a>
            </li> 
            {pageNumbers.map(number =>(
                <li key={number} className='page-item'>
                    <a href='#' onClick={() => paginate(number)} className='page-link'>
                        {number}
                    </a>
                </li>
            ))}
            <li class="page-item" onClick={() => nextPage()}>
                <a class="page-link">Next</a>
            </li> 
            
        </ul>
        </nav>
        </div>
    )
}

export default Pagination
