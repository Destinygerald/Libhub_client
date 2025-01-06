import '../style.css'
import '../style.mobile.css'
import { MdDelete } from 'react-icons/md'
import { DraftCardType } from '../../../../assets/Types.ts'

//@ts-ignore
export function DraftCollectionCard ({ id, title, date }: DraftCardType) {
	return (
		<div className='draft-card draft-collection-card'>
			<div></div>

			<span className='delete-btn'>
				<MdDelete />
			</span>
		</div>
	)
}