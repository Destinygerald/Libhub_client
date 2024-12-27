import '../style.css'
import '../style.mobile.css'
import { useNavigate } from 'react-router-dom'
import { IoIosEye } from 'react-icons/io'


type BookCardType = {
	key?: string;
	id: string;
	img?: string | any;
	title: string;
	description: string;
	views: number;
}



export function BookCard ({ id, img, title, description, views }: BookCardType) {

	const navigate = useNavigate()

	function openBook () {
		navigate(`/library/books/${id}`)
	}

	return (
		<div className='dashboard-books-card' onClick={openBook}>
			<div>
				<img src={img} />
			</div>

			<div className='dashboard-books-card-info'>
				<div>
					<span>{title}</span>

					<div>
						<span> <IoIosEye /> </span>
						<span> {views} </span>
					</div>
				</div>

				<span>{description}</span>
			</div>
		</div>
	)
}