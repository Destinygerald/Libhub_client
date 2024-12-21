import './style.css'
import './style.mobile.css'
import { Navbar } from './Components/Navbar.tsx'
import { Main } from './Components/Main.tsx'


function Page () {
	return (
		<div className='landing-page'>
			<Navbar />
			<Main />
		</div>
	)
}

export default Page;