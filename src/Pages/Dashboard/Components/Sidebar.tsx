import '../style.css'
import '../style.mobile.css'
import { CiHome, CiBookmark } from 'react-icons/ci'
import { IoBookOutline } from 'react-icons/io5'
import { MdOutlineCollections } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'

type SidebarItemProps = {
	Icon: any;
	nav: string;
	name: string;
	active: boolean;
}


function SidebarItem ({ Icon, nav, name, active}: SidebarItemProps) {

	const navigate = useNavigate()

	return (
		<div className={ active ?  'sidebar-item active': 'sidebar-item'} onClick={() => navigate(nav)}>
			{ Icon }
		
			<span className='sidebar-item-hover'> {name} </span>
		</div>
	)
}

export function Sidebar () {

	const { pathname } = useLocation()

	return (
		<div className='sidebar'>
			<span>Lib</span>

			<div className='sidebar-cnt'>
				<SidebarItem Icon={<CiHome />} nav='/library' name='Home' active={pathname == '/library'} />
				<SidebarItem Icon={<IoBookOutline />} nav='/library/books' name='Books' active={pathname == '/library/books' || pathname.includes('/books')} />
				<SidebarItem Icon={<CiBookmark />} nav='/library/saved' name='Saved' active={pathname == '/library/saved'} />
				<SidebarItem Icon={<MdOutlineCollections />} nav='/library/collections' name='Collection' active={pathname == '/library/collections' || pathname.includes('/collections')} />
			</div>


		</div>
	)
}