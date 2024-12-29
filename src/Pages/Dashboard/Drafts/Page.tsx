import './style.css'
import './style.mobile.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CiSearch, CiMenuFries } from 'react-icons/ci'
import { openSlider } from '../../../features/SliderFeature.tsx'
import { PageNavType } from '../../../assets/Types.ts'


function PageNav ({ nav, setNav }: PageNavType) {

	const [ search, setSearch ] = useState<string>('')

	function switchDisplay (arg: string) {
		setNav(arg)
	}

	return (
		<div className='drafts-nav'>
			<div className='drafts-nav-categories'>
				<span className={ nav == 'All' ? 'selected-nav' : '' } onClick={() => switchDisplay('All')}>All</span>
				<span className={ nav == 'Books' ? 'selected-nav' : '' } onClick={() => switchDisplay('Books')}>Books</span>
				<span className={ nav == 'Collections' ? 'selected-nav' : '' } onClick={() => switchDisplay('Collections')}>Collections</span>
			</div>

			<div className='drafts-nav-search'>
				<span> <CiSearch /> </span>
				<input placeholder='Search for Book title, Book author, Categories...' value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
			</div>
		</div>
	)
}


function Page () {

	const [ nav, setNav ] = useState<string>('All')
	const [ pageIndex, setPageIndex ] = useState<number>(1)
	const [ pagesNo, setPagesNo ] = useState<number>(1)

	const dispatch = useDispatch()

	function sliderOpen () {
		dispatch(openSlider())
	}

	function nextIndex() {
		if (pageIndex >= pagesNo) return;
	}

	function prevIndex() {
		if (pageIndex <= 1) return;
	}

	return (
		<div className='drafts'>
			<PageNav nav={nav} setNav={setNav} />

			<div className='dashboard-menu drafts-menu' onClick={sliderOpen}> <CiMenuFries /> </div>

			<div className='drafts-main'>
				
				<div className='drafts-main-grid'></div>

				<div className='dashboard-books-pagination'>
					<span className={pageIndex <= 1 ? 'pagination-btn-disable' : 'pagination-btn'} onClick={prevIndex}> Prev </span>
					
					<div className='dashboard-books-pagination-cnt'>
						<span className='page-index'>
							{pageIndex} of {pagesNo}
						</span>
					</div>

					<span className={pageIndex >= pagesNo ? 'pagination-btn-disable' : 'pagination-btn'} onClick={nextIndex}> Next </span>
				</div>
			</div>
		</div>
	)
}

export default Page;