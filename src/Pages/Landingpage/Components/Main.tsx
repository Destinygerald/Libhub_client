import '../style.css'
import '../style.mobile.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'
import { FaBookOpen, FaBookReader, FaQuestion } from 'react-icons/fa'


type MessageType = {
	name: string;
	email: string;
	message: string;
}

type FeaturesCardType = {
	icon: any;
	title: string;
}

function Banner () {

	const [ search, setSearch ] = useState<string>('')

	const navigate = useNavigate()

	function changeHandler (e: React.ChangeEvent<HTMLInputElement>) {
		setSearch(e.target.value)
	}

	return (
		<div className='landing-page-banner'>
			<div className='landing-page-banner-left'>
				<span>An Open Platform to engage <span className='orange'>Readers</span> and <span className='orange'>Writers.</span> </span>

				<span>LitHub is an online platform that for allows sharing of reading materials and also encourages sharing thoughts on such materials. Materials can be published by anyone to create availabilty for other.</span>
				
				<div className='landing-page-banner-btn'>
					<div className='landing-page-banner-btn-search'>
						<input type='text' placeholder='Search for book...' value={search} onChange={changeHandler} />
						<button> <CiSearch /> </button>
					</div>

					<button onClick={() => navigate('/signup')}>
						Sign Up
					</button>
				</div>
			</div>


			<div className='landing-page-banner-right'>
				
			</div>
		</div>
	)
}


function FeaturesCard ({ icon, title }: FeaturesCardType) {
	return (
		<div className='landing-page-features-card'>
			<span> { icon } </span>
			<span> { title } </span>
		</div>
	)
}

function Features () {
	return (
		<div className='landing-page-features'>
			<FeaturesCard title='Publish a Book' icon={<FaBookOpen />} />
			<FeaturesCard title='Read Books' icon={<FaBookReader />}/>
			<FeaturesCard title='Q and A' icon={<FaQuestion />} />
		</div>
	)
}

function Section1 () {
	return (
		<div className='landing-page-sect-1'>
			<div className='landing-page-sect-1-left'>
				<span>Create your own Bookshelf and make available for others to see and read from.</span>
				
				<span> LitHub allows you to create and publish your own collection of books making it easy for you to share the reading experience with readers of similar book taste. Published Shelves are credited to the reader who owns them; the books on a shelf doesn't necessarily have to be the user's own as a shelf is just a collection of a user's preference.    </span>
				
				<button>Get Started</button>
			</div>

			<div className='landing-page-sect-1-right'></div>
		</div>
	)
}


function Section2 () {

	const navigate = useNavigate()

	return (
		<div className='landing-page-sect-1'>
			<div className='landing-page-sect-1-right'></div>

			<div className='landing-page-sect-1-left'>
				<span>Publish Book materials and articles to make available to all readers.</span>
				
				<span> LitHub allows you to publish books and materials of similar fashion making it available to any reader with an interest for such material. Readers can also share insights on the books that a user has added to lithub.    </span>
				
				<button onClick={() => navigate('/signup')}>Get Started</button>
			</div>
		</div>
	)
}


function Contact () {

	const [ message, setMessage ] = useState<MessageType>({
		name: '',
		email: '',
		message: ''
	})

	function changeHandler (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
		setMessage({...message, [e.target.name] : e.target.value})
	}

	return (
		<div id='contact' className='landing-page-contact'>
			<div className='landing-page-contact-left'>
				<span>Contact Us</span>

				<span> Join Us in Creating Something Great. </span>

				<div className='landing-page-contact-left-form'>
					<input type='text' placeholder='Name' name='name' value={message.name} onChange={changeHandler} />
					<input type='email' placeholder='Email' name='email' value={message.email} onChange={changeHandler} />
					<textarea placeholder='Message' name='message' value={message.message} onChange={changeHandler}></textarea>
				</div>

				<button>Send Message</button>

			</div>

			<div className='landing-page-contact-info'>
				<span>Join Us on Our Socials</span>

				<div className='landing-page-contact-info-group'>
					<div className='landing-page-contact-info-item'>
						<span>Telegram</span>
						<span>https://t.me/blah</span>
					</div>

					<div className='landing-page-contact-info-item'>
						<span>Discord</span>
						<span>https://t.me/blah</span>
					</div>

					<div className='landing-page-contact-info-item'>
						<span>Slack</span>
						<span>https://t.me/blah</span>
					</div>

					<div className='landing-page-contact-info-item'>
						<span>Whatsapp</span>
						<span>https://t.me/blah</span>
					</div>


				</div>


			</div>
		</div>
	)
}


function Footer () {
	return (
		<div className='footer'>
			
		</div>
	)
}

export function Main () {
	return (
		<div className='landing-page-main'>
			<Banner />
			<Features />
			<Section1 />
			<Section2 />
			<Contact />
			<Footer />
		</div>
	)
}