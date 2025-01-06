import '../style.css'
import '../style.mobile.css'
import { BsX } from 'react-icons/bs'
import React, { useEffect, useRef, useState } from 'react'
import { PagePopupType, CollectionPopupType, CollectionBookType } from '../../../../assets/Types.ts'


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

export function CollectionPopup ({ setPopup }: PagePopupType) {
	
	const [ info, setInfo ] = useState<CollectionPopupType>({
		collection_name: ''
	})
	const ref = useRef<HTMLDivElement | null>(null)

	function changeHandler (e: React.ChangeEvent<HTMLInputElement>) {
		setInfo({ collection_name: e.target.value })
	}

	function handlePointer(e: React.PointerEvent<HTMLDivElement> | React.SyntheticEvent<HTMLDivElement>) {
		//@ts-ignore
		if (!ref?.current?.contains(e?.target)) {
			setPopup(false)
		}

		return;
	} 

	useEffect(() => {
		const doc = document.querySelector('.dashboard-collection')

		if (!doc) return;

		//@ts-ignore
		doc.addEventListener('pointerdown', handlePointer)

		//@ts-ignore
		return () => doc.removeEventListener('pointerdown', handlePointer)
	}, [])

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