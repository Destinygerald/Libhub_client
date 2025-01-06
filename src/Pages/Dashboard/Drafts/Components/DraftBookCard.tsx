import '../style.css'
import '../style.mobile.css'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { DraftCardType } from '../../../../assets/Types.ts'
import { openPopup, setDraft } from '../../../../features/DraftPopup.tsx'

//@ts-ignore
export function DraftBookCard ({ id, title, date }: DraftCardType) {
	
	const dispatch = useDispatch()

	function clickHandler() {
		dispatch(openPopup())
	}

	return (
		<div className='draft-card draft-book-card'>
			
			<div onClick={clickHandler}></div>

			<span className='delete-btn'>
				<MdDelete />
			</span>
		</div>
	)
}