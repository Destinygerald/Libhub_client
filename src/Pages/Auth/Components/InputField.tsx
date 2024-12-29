import '../style.css'
import '../style.mobile.css'
// import React from 'react'
import { InputFieldType } from '../../../assets/Types.ts'

export function InputField ({ type, value, name, handleChange, forgot }: InputFieldType) {

	return (
		<div className='input-field'>
			<div>
				<span> {name} </span>

				{ 
					forgot
					?
					<span> Forgot?</span>
					:
					''
				}
			</div>

			<input type={type} name={name} placeholder='' value={value} onChange={handleChange}  />
		</div>
	)
}