import './style.css'
import './style.mobile.css'
import { useState, useEffect } from 'react'
import { CiSearch, CiMenuFries } from 'react-icons/ci'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { CollectionsCard } from './Components/CollectionsCard.tsx'
import { CollectionPopup } from './Components/CollectionPopup.tsx'
import { openSlider } from '../../../features/SliderFeature.tsx'
// Dummy data api
import { fetchCollections, getNoOfCollectionPage } from '../../../Api/DummyData.ts'


type PageNavType = {
	setPopup: (arg: boolean) => void;
}

function PageNav ({ setPopup }: PageNavType) {

	const [ search, setSearch ] = useState<string>('')


	return (
		<div className='dashboard-collection-cnt-nav'>

			<div className='dashboard-collection-cnt-nav-search'>
				<span> <CiSearch /> </span>
				<input placeholder='Search for Book title or Collection name...' value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />

				<button onClick={() => setPopup(true)}> New </button>
			</div>
		</div>
	)
}


type CollectionType = {
	collectionName: string;
	noOfBooks: number;
	id: string;
}


function PageMain () {

	const [ popup, setPopup ] = useState<boolean>(false)
	const [ pageIndex, setPageIndex ] = useState<number>(1)
	const [ pagesNo, setPagesNo ] = useState<number>(8)
	const [ collections, setCollections ] = useState<CollectionType[] | null>([])

	const dispatch = useDispatch()

	function sliderOpen () {
		dispatch(openSlider())
	}

	async function prevIndex () {
		if (pageIndex <= 1) return
		setPageIndex(pageIndex => pageIndex - 1);

		const collection = await fetchCollections(pageIndex - 1)
		setCollections(collection)
	}

	async function nextIndex () {
		if (pageIndex >= pagesNo) return
		setPageIndex(pageIndex => pageIndex + 1);

		const collection = await fetchCollections(pageIndex + 1)
		setCollections(collection)
	}

	async function getCollections() {
		const collection = await fetchCollections(1)

		setCollections(collection)
	}

	function getPagesNo () {
		const pages = getNoOfCollectionPage()
		setPagesNo(pages)
	}

	useEffect(() => {
		getCollections()
		getPagesNo()
	}, [])

	return (
		<div className='dashboard-collection-cnt'>
			
			<div className='dashboard-menu books-menu' onClick={sliderOpen}> <CiMenuFries /> </div>

			<PageNav setPopup={setPopup} />

			<div className='dashboard-collection-cnt-main'>
				<div className='dashboard-collection-cnt-grid'>
					{
						collections?.map((item, i) => (
							<CollectionsCard key={'colletion-card-' + i} collectionName={item?.collectionName} noOfBooks={item?.noOfBooks} />
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

			{
				popup
				?
				<CollectionPopup setPopup={setPopup} />
				:
				''
			}
		</div>
	)
}

function Page () {
	return (
		<div className='dashboard-collection'>
			<Routes>
				<Route index element={<PageMain />} />
			</Routes>
		</div>
	)
}

export default Page;