import './style.css'
import './style.mobile.css'
import bgImg from '/images/orange_bg.webp'
import { useState } from 'react'
import { ProfileMainItem, ProfileNavItem } from './Components/ProfileMainItem.tsx'
import { ProfileSetting } from './Components/Setting.tsx'
import MobileProfile from './MobileProfile.tsx'

function Profile () {

	return (
		<div>
			
		</div>
	)
}


function Page () {

	const [ nav, setNav ] = useState<string>('settings')

	function switchNav (arg: string) {
		setNav(arg)
	}

	return (
		<>
			<div className='profile'>

				<div className='profile-banner'>
					<img src={bgImg} />
				</div>


				<div className='profile-cnt'>

					<div className='profile-main'>
						<div className='profile-main-info'>
							<div className='profile-main-img'> JD </div>
							<div> John Doe </div>
							<div> johndoe@gmail.com </div>
						</div>

						<div className='profile-main-items'>
							<ProfileMainItem title='Number of Books Published' amount='20' />
							<ProfileMainItem title='Number of Collections Published' amount='2' />
							<ProfileMainItem title='Collections drafts' amount='12' />
							<ProfileMainItem title='Book drafts' amount='4' />
						</div>


					</div>


					<div className='profile-extra'>
						<div className='profile-nav'>
							<ProfileNavItem name='Account Settings' itemNav='settings' nav={nav} handleClick={switchNav} />
							<ProfileNavItem name='Books Published' itemNav='published_books' nav={nav} handleClick={switchNav} />
							<ProfileNavItem name='Collections Published' itemNav='published_collections' nav={nav} handleClick={switchNav} />
							<ProfileNavItem name='Notifications' itemNav='notification' nav={nav} handleClick={switchNav} />
						</div>

						{
							nav == 'settings'
							?
							<ProfileSetting />
							:
							<> </>
						}
					</div>
				</div>
			</div>

			<MobileProfile />
		</>
	)
}

export default Page;