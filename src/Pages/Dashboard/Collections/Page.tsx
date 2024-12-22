import './style.css'
import './style.mobile.css'
import { useState } from 'react'
import { CiSearch, CiMenuFries } from 'react-icons/ci'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { CollectionsCard } from './Components/CollectionsCard.tsx'
import { CollectionPopup } from './Components/CollectionPopup.tsx'
import { openSlider } from '../../../features/SliderFeature.tsx'

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



function PageMain () {

	const [ popup, setPopup ] = useState<boolean>(false)

	const dispatch = useDispatch()

	function sliderOpen () {
		dispatch(openSlider())
	}

	return (
		<div className='dashboard-collection-cnt'>
			
			<div className='dashboard-menu books-menu' onClick={sliderOpen}> <CiMenuFries /> </div>

			<PageNav setPopup={setPopup} />

			<div className='dashboard-collection-cnt-main'>
				<div className='dashboard-collection-cnt-grid'>
					{
						Array.from(Array(13)).map((_, i) => (
							<CollectionsCard key={'colletion-card-' + i} collectionName='Collection Name' noOfBooks={4} />
						))
					}
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