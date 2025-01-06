import '../style.css'
import '../style.mobile.css'
import React, { useEffect, useRef } from 'react'
import { BsX } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { closePopup } from '../../../../features/DraftPopup.tsx'

export function DraftPopup () {
		
	const ref = useRef<HTMLDivElement | null>(null)
	const dispatch = useDispatch()

	function close () {
		dispatch(closePopup())
	}

	function handlePointer(e: React.PointerEvent<HTMLDivElement>) {
		//@ts-ignore
		if (!ref?.current?.contains(e?.target)) {
			close()
		}

		return;
	}

	useEffect(() => {
		const drafts = 	document.querySelector('.drafts')

		if (!drafts) return;

		//@ts-ignore
		drafts?.addEventListener('pointerdown', handlePointer)

		//@ts-ignore
		return () => drafts?.removeEventListener('pointerdown', handlePointer)
	}, [])

	return (
		<div className='draft-popup' ref={ref}>
			<span className='draft-popup-exit' onClick={close}> <BsX /> </span>
		</div>
	)
}