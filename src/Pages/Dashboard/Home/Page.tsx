import '../style.css'
import '../style.mobile.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { CiSearch, CiMenuFries } from 'react-icons/ci'
import { openSlider } from '../../../features/SliderFeature.tsx'
import { HomeBookCardType } from '../../../assets/Types.ts'
import { DisplayBooks as Books } from '../../../Api/DummyData.ts'



function PageTopRight () {
	return (
		<div className='dashboard-home-cnt-top-carousel-card'>
			<div>
				<span>Chad Bloak</span>
				<span>⁋</span>
			</div>

			<div>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Sed velit lectus, porttitor eu convallis sit amet, semper eget mauris. Integer in pulvinar mauris. Donec facilisis placerat magna sed cursus. Mauris vel tristique arcu.
			</div>
		</div>
	)
}


function BookCard ({ img, title, category }: HomeBookCardType) {
	return (
		<div className='book-card'>
			<div>
				<img src={img} />
			</div>

			<div>
				<span>{ title }</span>
				<span>{ category?.join(', ') }</span>
			</div>
		</div>
	)
}

function PageMain () {

	const [ index, setIndex ] = useState<number>(0)
	const navigate = useNavigate()

	function forward () {
		const carouselScreen = document.querySelector('.dashboard-home-cnt-main')?.getBoundingClientRect()?.width

		// @ts-ignore
		if ( index >= (Books.length - Math.round(carouselScreen / 220) + 1) ) return;
		setIndex(index => index + 1)
	}

	function backward () {
		if ( index <= 0) return;
		setIndex(index => index - 1)
	}

	function toLibrary () {
		navigate('/library/books')
	}


	return (
		<div className='dashboard-home-cnt'>
			<div className='dashboard-home-cnt-top'>
				<div>
					<span> Keep the reading going... </span>
					<span> Get and add all kind of educational materials that could benefit you and other readers. Create amd publish collections to share your liked books and reading patterns with others. </span>
					<button onClick={toLibrary}> Start Reading </button>
				</div>

				<div className='dashboard-home-cnt-top-carousel'>
					<div>
						<PageTopRight/>
					</div>
				</div>
			</div>


			<div className='dashboard-home-cnt-main'>

				<div>
					<span onClick={backward}> {'<'} </span>
					<span onClick={forward}> {'>'} </span>
				</div>

				<div className='dashboard-home-cnt-main-carousel' style={{ transform: `translateX( calc(-${index} * 220px) )` }}>
					{
						Books?.map((item, i) => (
							<BookCard key={'book-card-' + i} img={item.img} title={item.title} category={item?.category} />
						))
					}
				</div>
			</div>
		</div>
	)
}

function Page () {

	const [ search, setSearch ] = useState<string>('')

	const dispatch = useDispatch()

	function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
		setSearch(e.target.value)
	}

	function slider () {
		dispatch(openSlider())
	}

	return (
		<div className='dashboard-home'>
			<div className='dashboard-home-top'>

				<div className='dashboard-menu' onClick={slider}>
					<CiMenuFries />
				</div>

				<div className='dashboard-home-search'>
					<span> <CiSearch /> </span>
					<input placeholder='Search Book name, Book author...' value={search} onChange={handleChange} />

					{
						search
						?
						<div className='dashboard-home-search-result'></div>
						:
						''
					}
				</div>

				<div className='dashboard-home-profile'>
					<div> JD </div>

					<div> John Doe </div>
				</div>
			</div>

			<PageMain />




			<div className='dashboard-home-bck'/>
		</div>
	)
}

export default Page