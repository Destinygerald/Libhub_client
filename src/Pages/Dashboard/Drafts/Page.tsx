import './style.css'
import './style.mobile.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CiSearch, CiMenuFries } from 'react-icons/ci'
import { openSlider } from '../../../features/SliderFeature.tsx'
import { PageNavType, IRootState, DraftPopupType } from '../../../assets/Types.ts'
import { DraftBookCard } from './Components/DraftBookCard.tsx'
import { DraftPopup } from './Components/DraftPopup.tsx'
import { DraftCollectionCard } from './Components/DraftCollectionCard.tsx'

function PageNav ({ nav, setNav }: PageNavType) {

	const [ search, setSearch ] = useState<string>('')

	function switchDisplay (arg: string) {
		setNav(arg)
	}

	return (
		<div className='drafts-nav'>
			<div className='drafts-nav-categories'>
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

	const [ nav, setNav ] = useState<string>('Books')
	const popup = useSelector<IRootState, DraftPopupType>(state => state.draft_popup.value)
	const dispatch = useDispatch()

	function sliderOpen () {
		dispatch(openSlider())
	}

	useEffect(() => {

	}, [])

	return (
		<div className='drafts'>
			<PageNav nav={nav} setNav={setNav} />

			<div className='dashboard-menu drafts-menu' onClick={sliderOpen}> <CiMenuFries /> </div>

			<div className='drafts-main'>
				<div className='drafts-main-grid'>
					{
						Array.from(Array(28)).map((_, i) => (
							<DraftBookCard key={'draft-book-card-' + i} id='---' title='---' date={0} />
						))
					}
				</div>
			</div>

			{
				popup?.open 
				?
				<DraftPopup />
				:
				''
			}
		</div>
	)
}

export default Page;