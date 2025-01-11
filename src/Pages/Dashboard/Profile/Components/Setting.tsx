import '../style.css'
import '../style.mobile.css'
import React, { useState } from 'react'

type ProfileInfoType = {
	name: string;
	email: string;
}

type ProfileInputType = {
	title: string;
	name: string;
	value: string;
	changeHandler: (arg: React.ChangeEvent<HTMLInputElement>) => void;
	preValue: string;
	type: string;
}

function ProfileSettingInput ({ title, name, value, changeHandler, preValue, type }: ProfileInputType) {
	return (
		<div className='profile-setting-input'>	
			<span>{title}</span>
			<input type={type} name={name} value={value} onChange={changeHandler} placeholder={preValue} />
		</div> 
	)
}

export function ProfileSetting () {

	//  fetch this data from db and update it when the user changes info and saves
	const [ profileInfo, setProfileInfo ] = useState<ProfileInfoType & {visible: boolean} >({
		name: 'John Doe',
		email: 'johndoe@gmail.com',
		visible: false
	})

	const [ newProfile, setNewProfile ] = useState<ProfileInfoType>({
		name: '',
		email: ''
	})

	function changeHandler (e: React.ChangeEvent<HTMLInputElement>) {
		setNewProfile({ ...newProfile, [e.target.name]: e.target.value })
	}

	function toggleButton () {
		setProfileInfo({ ...profileInfo, visible: !profileInfo.visible  })
	}

	return (
		<div className='profile-setting'>
			<form className='profile-setting-form'>
				<ProfileSettingInput name='name' title='Name' value={newProfile.name} preValue={profileInfo.name} type='text' changeHandler={changeHandler} />
				<ProfileSettingInput name='email' title='Email' value={newProfile.email} preValue={profileInfo.email} type='email' changeHandler={changeHandler} />
				<div className='profile-setting-input'>
					<span>Anonymous [Keep profile and information hidden from others]</span>
					
					<div className={ profileInfo?.visible ? 'profile-toggle-active' : 'profile-toggle'} onClick={toggleButton}>
						<div />
					</div>

				</div>
			</form>
		</div>
	)
}