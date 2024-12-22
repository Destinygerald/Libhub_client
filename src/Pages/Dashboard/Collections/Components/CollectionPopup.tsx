import '../style.css'
import '../style.mobile.css'
import { BsX } from 'react-icons/bs'
import React, { useEffect, useRef, useState } from 'react'

type PopupType = {
	setPopup: (arg: boolean) => void;
}

type CollectionPopupType = {
	collection_name: string;
}

type CollectionBookType = {
	title: string;
	key?: string
}

function CollectionBook ({ title }: CollectionBookType) {

	const [ selected, setSelected ] = useState<boolean>(false);

	function toggleSelect () {
		setSelected(!selected)
	}

	return (
		<div className='collection-book' onClick={toggleSelect}>
			<span className={selected ? 'collection-book-tic-select' : 'collection-book-tic'}></span>

			<span> {title} </span>
		</div>
	)
}

export function CollectionPopup ({ setPopup }: PopupType) {
	
	const [ info, setInfo ] = useState<CollectionPopupType>({
		collection_name: ''
	})
	const ref = useRef<HTMLDivElement | null>(null)

	function changeHandler (e: React.ChangeEvent<HTMLInputElement>) {
		setInfo({ collection_name: e.target.value })
	}

	return (
		<div className='dashboard-books-popup dashboard-collection-popup' ref={ref}>
			
			<span className='popup-exit' onClick={() => setPopup(false)}> <BsX /> </span>

			<div className='dashboard-collection-popup-form'>
				<div className='popup-input'>
					<span>Collection Name</span>
					<input type='text' name='collection_name' value={info.collection_name} onChange={changeHandler} />
				</div>

				<div className='dashboard-collection-popup-grid'>
					<div className='dashboard-collection-popup-grid-cnt'>
						{
							Array.from(Array(24)).map((_, i) => (
								<CollectionBook title='Book Name' key={'collection-book-' + i} />
							))
						}
					</div>
				</div>

				<button>Create Collection</button>


			</div>
		</div>
	)
}