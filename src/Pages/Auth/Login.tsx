import './style.css'
import './style.mobile.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputField } from './Components/InputField.tsx'
import { LoginType } from '../../assets/Types.ts'
import bgImg from '/images/orange_bg.webp'

function Page () {

	const [ login, setLogin ] = useState<LoginType>({
		email: '',
		password: ''
	})

	const navigate = useNavigate()

	function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
		setLogin({ ...login, [e.target.name] : e.target.value })
	}

	function loginToLibrary (e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		navigate('/library')
	}

	return (
		<div className='login'>
			<div className='auth-banner'>
				<img src={bgImg} />

				<div>
					<div className='auth-line' />
					<span>LibHub</span>
					<div className='auth-line' />
				</div>
			</div>

			<div className='auth-container'>
				<span> Enter the Library! </span>
				<span> Welcome back. Login to continue on libhub. </span>

				<div className='auth-container-line' />

				<form className='auth-form' onSubmit={loginToLibrary}>
					<InputField type='email' name='email' value={login.email} handleChange={handleChange} />
					<InputField type='password' name='password' value={login.password} handleChange={handleChange} forgot />
					<button> Login </button>

					<span onClick={() => navigate('/signup')} className='auth-form-extra'> <span className='orange'>Don't have an account yet?</span> Sign up  </span>
				</form>

				<div className='auth-back' onClick={() => navigate('/')}>
					{ '<' }
				</div>
			</div>
		</div>
	)
}

export default Page