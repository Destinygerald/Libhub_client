import './style.css'
import './style.mobile.css'
import { Route, Routes } from 'react-router-dom'
import { Sidebar } from './Components/Sidebar.tsx'
import { Slider } from './Components/Slider.tsx'
import Home from './Home/Page.tsx'
import Books from './Books/Page.tsx'
import Collections from './Collections/Page.tsx'
import { useSelector } from 'react-redux'
import { IRootState } from '../../App.tsx'

function Page () {

	const sliderOpen = useSelector<IRootState, boolean>(state => state.slider.value)

	return (
		<div className='dashboard'>
			<Sidebar />

			{
				sliderOpen
				?
				<Slider />
				:
				<></>
			}

			<div className='dashboard-cnt'>
				<Routes>
					<Route index element={<Home />} /> 
					<Route path='/books/*' element={<Books />} />
					<Route path='/collections/*' element={<Collections />} />
				</Routes>
			</div>

		</div>
	)
}

export default Page;