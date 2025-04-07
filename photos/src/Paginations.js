import React from 'react'

const Paginations = ({ collectionsPerPage, totalCollections, page, paginate, setPage }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCollections / collectionsPerPage); i++) {
        pageNumbers.push(i)
    }
    const nextPage = () => setPage(prev => prev + 1)

    const prevPage = () => setPage(prev => prev - 1)

    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li onClick={() => paginate(number)}
                            key={number}
                            className={page === number ? 'active' : ''}>
                            {number}
                        </li>
                    ))
                }
            </ul>
            <div className='button'>
                <button disabled={page <= 1 ? true : false} onClick={prevPage}>Назад</button>
                <button disabled={page >= pageNumbers.length ? true : false} onClick={nextPage}>Вперед</button>
            </div>
        </div>
    )
}
export default Paginations;

