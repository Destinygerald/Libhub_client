import '../style.css'
import '../style.mobile.css'
import { useState, useEffect } from 'react'
import { BookCardType, IRootState } from '../../../../assets/Types.ts'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BookCard } from '../../Books/Components/BookCard.tsx'


function Page () {

	const [ books, setBooks ] = useState<BookCardType[] | null>([])
	const [ pageIndex, setPageIndex ] = useState<number>(1)
	const [ pagesNo, setPagesNo ] = useState<number>(1)
	const collection = useSelector<IRootState, string >(state => state.collection_name.value)
	const navigate = useNavigate()


	function prevIndex () {}
	function nextIndex () {}

	function goBack() {
		navigate(-1)
	}

	useEffect(() => {
		if (!collection) {
			navigate('/library/collections')
		}
	}, [])

	return (
		<div className='collection-page-list'>

			<div className='collection-back-btn' onClick={goBack}> {'<'} </div>

			<div className='collection-page-list-hdr'> {collection} </div>

			<div className='collection-page-list-cnt'>
				{
					Array.from(Array(10)).map((_, i) => (
						<BookCard key={'book-card-' + i} id='book_id' img='--' title='Title' description='Description' views={0} />
					))
				}
			</div>

			<div className='dashboard-books-pagination'>
					<span className={pageIndex <= 1 ? 'pagination-btn-disable' : 'pagination-btn'} onClick={prevIndex}> Prev </span>
					
					<div className='dashboard-books-pagination-cnt'>
						{
							// Array.from(Array(8)).map((_, i) => (
								<span className='page-index'>
									{pageIndex} of {pagesNo}
								</span>
							// ))
						}
					</div>

					<span className={pageIndex >= pagesNo ? 'pagination-btn-disable' : 'pagination-btn'} onClick={nextIndex}> Next </span>
				</div>
		</div>
	)
}

export default Page