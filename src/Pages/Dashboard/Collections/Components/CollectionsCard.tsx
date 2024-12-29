import '../style.css'
import '../style.mobile.css'
import { CollectionCardType } from '../../../../assets/Types.ts'


// Dont forget to add book images as well as id
export function CollectionsCard ({ collectionName, noOfBooks }: CollectionCardType) {
	
	function handleClick () {
		// use the id
	}

	return (
		<div className='dashboard-collection-card'>
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