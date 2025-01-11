import '../style.css'
import '../style.mobile.css'
import { BsPerson } from 'react-icons/bs'
import { CiHome } from 'react-icons/ci'
import { IoBookOutline } from 'react-icons/io5'
import { MdOutlineCollections } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'
import { HiOutlineArchiveBox } from 'react-icons/hi2'
import { SidebarItemProps } from '../../../assets/Types.ts'

function SidebarItem ({ icon, nav, name, active}: SidebarItemProps) {

	const navigate = useNavigate()

	return (
		<div className={ active ?  'sidebar-item active': 'sidebar-item'} onClick={() => navigate(nav)}>
			{ icon }
		
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
				<SidebarItem icon={<CiHome />} nav='/library' name='Home' active={pathname == '/library'} />
				<SidebarItem icon={<IoBookOutline />} nav='/library/books' name='Books' active={pathname == '/library/books' || pathname.includes('/books')} />
				<SidebarItem icon={<MdOutlineCollections />} nav='/library/collections' name='Collection' active={pathname == '/library/collections' || pathname.includes('/collections')} />
				<SidebarItem icon={<HiOutlineArchiveBox />} nav='/library/drafts' name='Drafts' active={pathname == '/library/drafts'} />
				<SidebarItem icon={<BsPerson />} nav='/library/user' name='Profile' active={pathname == '/library/user' || pathname.includes('/user')} />
			</div>


		</div>
	)
}