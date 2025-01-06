import '../style.css'
import '../style.mobile.css'
import { CollectionCardType } from '../../../../assets/Types.ts'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeName } from '../../../../features/CollectionName.tsx'


// Dont forget to add book images as well as id
export function CollectionsCard ({ collectionName, noOfBooks, id }: CollectionCardType) {
	
	const navigate = useNavigate()
	const dispatch = useDispatch()

	function handleClick () {
		// use the id
		if (!id) return;

		dispatch(changeName(collectionName))

		navigate(`${id}`)
	}

	return (
		<div className='dashboard-collection-card' onClick={handleClick}>
			<div className='dashboard-collection-card-imgs'>
				<div />
				<div />
			</div>

			<div className='dashboard-collection-card-info'>
				<span> {collectionName.length > 10 ? (collectionName.slice(0, 10) + '...') : collectionName }</span>
				<span> {noOfBooks == 1 ? `${noOfBooks} Book` : `${noOfBooks} Books`} </span>
			</div>

			<div className='collection-extra'>
				<span> Collection Title: {collectionName} </span>
				<span> {noOfBooks} Books in this Collection </span>
			</div>

		</div>
	)
}