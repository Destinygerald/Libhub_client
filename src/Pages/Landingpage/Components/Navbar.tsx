import '../style.css'
import '../style.mobile.css'
import { useNavigate } from 'react-router-dom'

export function Navbar () {

	const navigate = useNavigate()

	return (
		<div className='navbar'>
			<div className='nav-logo'>LitHub</div>

			<div className='nav-items'>
				<span>Home</span>
				<span>Library</span>
				<span>Contact</span>
			</div>

			<div className='nav-btns'>
				<button onClick={() => { navigate('/login') }}>Log in</button>
			</div>
		</div>
	)
}