import '../style.css'
import '../style.mobile.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { BsX } from 'react-icons/bs'
import { HiArchiveBox } from 'react-icons/hi2'
import { IoBook } from 'react-icons/io5'
import { MdCollections, MdHomeFilled } from 'react-icons/md'
import { closeSlider } from '../../../features/SliderFeature.tsx'

type SliderItemProps = {
	icon: any;
	nav: string;
	name: string;
	active: boolean;
}

function SliderItem ({ icon, nav, name, active }: SliderItemProps) {

	const navigate = useNavigate()
	const dispatch = useDispatch()

	function exitSlider () {
		dispatch(closeSlider())
	}


	function handleClick () {
		navigate(nav)
		exitSlider()
	}

	return (
		<div className={active ? 'slider-item slider-active' : 'slider-item'} onClick={handleClick}>
			<span>{icon}</span>
			<span>{name}</span>
		</div>
	)
}

export function Slider () {

	const { pathname } = useLocation()
	const dispatch = useDispatch()

	function exitSlider () {
		dispatch(closeSlider())
	}

	return (
		<div className='slider'>
			<span className='slider-exit' onClick={exitSlider}> <BsX /> </span>

			<div className='slider-cnt'>
				<SliderItem icon={<MdHomeFilled />} nav='/library' name='Home' active={pathname == '/library'} />
				<SliderItem icon={<IoBook />} nav='/library/books' name='Books' active={pathname == '/library/books' || pathname.includes('/books')} />
				<SliderItem icon={<HiArchiveBox />} nav='/library/drafts' name='Drafts' active={pathname == '/library/drafts'} />
				<SliderItem icon={<MdCollections />} nav='/library/collections' name='Collection' active={pathname == '/library/collections' || pathname.includes('/collections')} />
			</div>
		</div>
	)
}