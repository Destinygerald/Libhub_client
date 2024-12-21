import './style.css'
import './style.mobile.css'
import React, { useEffect, useState, useRef } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { CiSearch, CiMenuFries } from 'react-icons/ci'
import { BsX } from 'react-icons/bs'
import { IoIosEye } from 'react-icons/io'
import { BookDisplay } from './Components/BookDisplay.tsx'
import { openSlider } from '../../../features/SliderFeature.tsx'

type BookCardType = {
	key?: string;
	id: string;
	img: string | any;
	title: string;
	description: string;
	views: number;
}


type PopupInputType = {
	type: string;
	name: string;
	value?: string;
	placeholder: string;
	changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
} 

type PageNavType = {
	setPopup: (arg: boolean) => void;
}

type BookDetailsType = {
	title: string;
	category: string;
	cover_image?: string;
	description?: string;
}

function PageNav ({ setPopup }: PageNavType) {

	const [ nav, setNav ] = useState<string>('Recents')
	const [ search, setSearch ] = useState<string>('')

	return (
		<div className='dashboard-books-cnt-nav'>
			<div className='dashboard-books-cnt-nav-categories'>
				<span className={ nav == 'Recents' ? 'selected-nav' : '' }>Recents</span>
				<span className={ nav == 'Recents' ? 'Popular' : '' }>Popular</span>
				<span className={ nav == 'Recents' ? 'Next' : '' }>Next</span>
			</div>

			<div className='dashboard-books-cnt-nav-search'>
				<span> <CiSearch /> </span>
				<input placeholder='Search for Book title, Book author, Categories...' value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />

				<button onClick={() => setPopup(true)}> Upload </button>
			</div>
		</div>
	)
}

function BookCard ({ id, img, title, description, views }: BookCardType) {

	const navigate = useNavigate()

	function openBook () {
		navigate(`/library/books/${id}`)
	}

	return (
		<div className='dashboard-books-card' onClick={openBook}>
			<div>
				<img src={img} />
			</div>

			<div className='dashboard-books-card-info'>
				<div>
					<span>{title}</span>

					<div>
						<span> <IoIosEye /> </span>
						<span> {views} </span>
					</div>
				</div>

				<span>{description}</span>
			</div>
		</div>
	)
}


function PagePopupInput ({ type, name, value, placeholder, changeHandler }: PopupInputType) {
	return (
		<div className='popup-input'>
			<span>{placeholder}</span>
			<input type={type} name={name} value={value} onChange={changeHandler} />
		</div>
	)
}

function PagePopup ({ setPopup }: PageNavType) {

	const [ error, setError ] = useState<string>('')
	const [ pdf, setPdf ] = useState<string>('')
	const [ bookDetails, setBookDetails ] = useState<BookDetailsType>({
		title: '',
		category: '',
		cover_image: '',
		description: ''
	})
	const ref = useRef<HTMLDivElement | null>(null)

	function handleClickOut (e: React.PointerEvent<HTMLDivElement> | React.SyntheticEvent<HTMLDivElement>) {
		// @ts-ignore
		if (!ref?.current?.contains(e.target)) {
			setPopup(false)
		}
		return;
	}


	function handlePdfClick () {
		const pdfInput = document.querySelector('#pdf-file-input')

		if (!pdfInput) return;

		// @ts-ignore
		pdfInput.click()
	}



	function handleDrag(e: React.DragEvent<HTMLDivElement>){
		e.preventDefault();
		e.stopPropagation();
	}


	function handleDrop (e: React.DragEvent<HTMLDivElement>) {
		e.preventDefault();
		e.stopPropagation()

		if (e.dataTransfer.files[0].type != 'application/pdf') {
			setError('File Type can only be of pdf')

			setTimeout(() => {
				setError('')
			}, 1200)

			return
		}

		
		let reader = new FileReader();
	    reader.readAsDataURL(e.dataTransfer.files[0]);

	    try {
	        reader.onload = () => {
	        	//@ts-ignore
	            setPdf(reader.result)
	        };
	    } catch (err) {
	        return (err)
	    }

	}

	function handlePdfChange (e: React.ChangeEvent<HTMLInputElement>) {
		e.preventDefault()

		//@ts-ignore
		if (e.target.files[0].type != 'application/pdf') {
			setError('File Type can only be of pdf')

			setTimeout(() => {
				setError('')
			}, 1200)

			return
		}

		
		let reader = new FileReader();
		//@ts-ignore
	    reader.readAsDataURL(e.target.files[0]);

	    try {
	        reader.onload = () => {
	        	//@ts-ignore
	            setPdf(reader.result)
	        };
	    } catch (err) {
	        return (err)
	    }

	}

	function inputChangeHandler (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
		setBookDetails({...bookDetails, [e.target.name] : e.target.value})
	}

	function inputImageChangeHandler (e: React.ChangeEvent<HTMLInputElement>) {

		e.preventDefault()

		//@ts-ignore
		if (e.target.files[0].type != 'image/jpeg' && e.target.files[0].type != 'image/png') {
			setError('Cover image can only be Jpeg , jpg or Png file')

			setTimeout(() => {
				setError('')
			}, 1200)

			return
		}


		let reader = new FileReader();
		//@ts-ignore
	    reader.readAsDataURL(e.target.files[0]);

	    try {
	        reader.onload = () => {
	            //@ts-ignore
	            setBookDetails({ ...bookDetails, cover_image: reader.result })
	        };
	    } catch (err) {
	    	console.log(error)
	        return (err)
	    }
	}

	function submit () {

	}

	useEffect(() => {
		const main = document.querySelector('.dashboard-books')
		if (!main) return;

		// @ts-ignore
		main.addEventListener('pointerdown', handleClickOut)

		// @ts-ignore
		return () => main.removeEventListener('pointerdown', handleClickOut)
	}, [])


	return (
		<div className='dashboard-books-popup' ref={ref} onDrop={handleDrop} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag}>
			<span className='popup-exit' onClick={() => setPopup(false)}> <BsX /> </span>

			{
				error
				?
				<div className='popup-error'>
					{error}
	
					<div />
				</div>
				:
				''
			}

			<div className='dashboard-books-popup-form'>
				<div>
					<PagePopupInput type='text' placeholder='Book Title*' name='title' value={bookDetails.title} changeHandler={inputChangeHandler} />
					<PagePopupInput type='text' placeholder='Category/Genre*' name='title' value={bookDetails.category} changeHandler={inputChangeHandler} />
					<PagePopupInput type='file' placeholder='Cover image [JPG or JPEG or PNG only]' name='cover_image' changeHandler={inputImageChangeHandler} />

					<div className='popup-input'>
						<span>Description</span>
						<textarea name='description' value={bookDetails.description} onChange={inputChangeHandler}></textarea>
					</div>

					<button onClick={submit}> Upload Book </button>
				</div>

				<div className='popup-input'>
					<span> Book PDF [PDF File Only]* </span>

					<div className='pdf-drop' onClick={handlePdfClick} onDrop={handleDrop} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag}>
						<input type='file' id='pdf-file-input' onChange={handlePdfChange} />

						<div>
							<span> <AiOutlineCloudUpload /> </span>
							<span> Drag and drop file here </span>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}


function PageIndex () {
	const [ popup, setPopup ] = useState<boolean>(false)
	const dispatch = useDispatch()

	function sliderOpen () {
		dispatch(openSlider())
	}

	return (
		<div className='dashboard-books'>
			<div className='dashboard-books-cnt'>

				<div className='dashboard-menu books-menu' onClick={sliderOpen}> <CiMenuFries /> </div>

				<PageNav setPopup={setPopup} />

				<div className='dashboard-books-cnt-main'>
					<div className='dashboard-books-cnt-grid'>
						{
							Array.from(Array(20)).map((_, i) => (
								<BookCard key={'book-card-' + i} id={`${Math.round(Math.random()) * i}` } img='--' title='Title' description='Description' views={0} />
							))
						}
					</div>
				</div>

				{
					popup
					?
					<PagePopup setPopup={setPopup} />
					:
					<></>
				}

			</div>
		</div>
	)
}

function Page () {
	return (
		<>
			<Routes>
				<Route index element={<PageIndex />} />
				<Route path='/:id' element={<BookDisplay />} />
			</Routes>
		</>
	)
}

export default Page;