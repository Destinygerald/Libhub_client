import './style.css'
import './style.mobile.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputField } from './Components/InputField.tsx'

type SignupType = {
	name: string,
	email: string;
	password: string;
	confirm_password: string;
}

function Page () {

	const [ signup, setSignup ] = useState<SignupType>({
		name: '',
		email: '',
		password: '',
		confirm_password: ''
	})

	const navigate = useNavigate()

	function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
		setSignup({ ...signup, [e.target.name] : e.target.value })
	}

	return (
		<div className='signup'>
			<div className='auth-banner'></div>

			<div className='auth-container'>
				<span> Get Started </span>
				<span> Welcome to libhub - Let's create your account. </span>

				<div className='auth-container-line' />

				<form className='auth-form'>
					<InputField type='text' name='name' value={signup.name} handleChange={handleChange} />
					<InputField type='email' name='email' value={signup.email} handleChange={handleChange} />
					<InputField type='password' name='password' value={signup.password} handleChange={handleChange} />
					<InputField type='password' name='confirm_password' value={signup.confirm_password} handleChange={handleChange} />
					<button> Sign up</button>

					<span onClick={() => navigate('/login')} className='auth-form-extra'> <span className='orange'>Already have an account?</span> Log in </span>
				</form>

				<div className='auth-back' onClick={() => navigate('/')}>
					{ '<' }
				</div>
			</div>
		</div>
	)
}

export default Page