import '../style.css'
import '../style.mobile.css'
import React, { useState, useRef, useEffect } from 'react'
import { BsX } from 'react-icons/bs'
import { questionPopupType, questionPopupInput } from '../../../../assets/Types.ts'

export function QuestionPopup ({ closePopup }: questionPopupType) {

	const [ questionInputs, setQuestionInputs ] = useState<questionPopupInput>({
		questionTitle: '',
		questionDescription: ''
	})
	const ref = useRef<HTMLDivElement | null>(null)

	
	function handleClickOut (e: React.PointerEvent<HTMLDivElement> | React.SyntheticEvent<HTMLDivElement>) {
		// @ts-ignore
		if (!ref?.current?.contains(e.target)) {
			closePopup()
		}
		return;
	}

	function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
	}

	useEffect(() => {

		const main = document.querySelector('.book-display')

		if (!main) return;

		// @ts-ignore
		main.addEventListener('pointerdown', handleClickOut)

		// @ts-ignore
		return () => main.removeEventListener('pointerdown', handleClickOut)

	}, [])

	return (
		<div className='question-popup' ref={ref}>
			<span className='popup-exit' onClick={closePopup}> <BsX /> </span>

			<span className='question-popup-hdr'>Ask a Question?</span>

			<form onSubmit={handleSubmit}>
				<div className='question-input-field input-field'>
					<div>
						<span> Question Title* </span>
					</div>

					<input />
				</div>


				<div className='question-input-field input-field'>
					<div>
						<span> Question Desciption [Question Content]* </span>
					</div>

					<textarea />
				</div>

				<button>Send</button>
			</form>
		
		</div>
	)
}