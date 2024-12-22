import '../style.css'
import '../style.mobile.css'

type CollectionCardType = {
	id?: string;
	key?: string;
	collectionName: string;
	noOfBooks: number;
	bookImgs?: string[];
}

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
				<span> {collectionName} </span>
				<span> {noOfBooks == 1 ? `${noOfBooks} Book` : `${noOfBooks} Books`} </span>
			</div>

		</div>
	)
}