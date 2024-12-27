import './style.css'
import './style.mobile.css'
import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'

type PageNavType = {
	nav: string;
	setNav: (arg: string) => void;
}

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

	return (
		<div className='drafts'>
			<PageNav nav={nav} setNav={setNav} />


		</div>
	)
}

export default Page;