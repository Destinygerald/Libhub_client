import '../style.css'
import '../style.mobile.css'
import { ProfileItemType, ProfileNavItemType } from '../../../../assets/Types.ts'

export function ProfileMainItem ({ title, amount }: ProfileItemType) {
	return (
		<div className='profile-main-item-card'>
			<span> {title} </span>
			<span> {amount} </span>
		</div>
	)
}

export function ProfileNavItem ({ name, handleClick, itemNav, nav}: ProfileNavItemType) {
	return (
		<div className='profile-nav-item' onClick={() => handleClick(itemNav)} >
			{ name }

			{
				itemNav == nav
				?
				<div className='profile-nav-item-active' />
				:
				''
			}
		</div>
	)
}