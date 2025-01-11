import './style.css'
import './style.mobile.css'
import { CiMenuFries } from 'react-icons/ci'
import { useDispatch } from 'react-redux'
import { openSlider } from '../../../features/SliderFeature.tsx'

function Page () {

	const dispatch = useDispatch()

	function sliderOpen () {
		dispatch(openSlider())
	}

	return (
		<div className='mobile_profile'>
			<div className='dashboard-menu profile-menu' onClick={sliderOpen}> <CiMenuFries /> </div>
		</div>
	)
}

export default Page