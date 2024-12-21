import '../style.css'
import '../style.mobile.css'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { IoIosEye } from 'react-icons/io'
import { MdOutlineFileDownload, MdOutlineFileDownloadDone } from 'react-icons/md'
import { QuestionPopup } from './QuestionPopup.tsx'

type BookDisplayMainBooksType = {
	title: string;
	img?: string;
	id: string;
}

type BookAnswerType = {
	reply: string;
	author: string
	approval: number;
	disapproval: number;
	date: string;
}

type BookQuestionType = {
	questionTitle: string;
	questionDescription: string;
	approval: number;
	disapproval: number;
	author: string;
	date: string;
	repliesNo: number;
	replies?: BookAnswerType[];
}

function BookDisplayMainBooks ({ title, img, id }: BookDisplayMainBooksType) {
		
	const navigate = useNavigate()

	function handleClick () {
		navigate(`/library/books/${id}`)
	}

	return (
		<div className='book-display-book' onClick={handleClick}>
			<div>
				<img src={img} />
			</div>

			<div> {title || 'Book title'} </div>
		</div>
	)
}

function BookDisplayMain () {

	const [ downloading, setDownloading ] = useState<boolean>(false);
	const [ downloaded, setDownloaded ] = useState<boolean>(false);

	function download () {
		setDownloading(true)

		setTimeout(() => {
			setDownloaded(true)
		}, 2000)

		setTimeout(() => {
			setDownloading(false)
			setDownloaded(false)
		}, 2800)
	}

	return (
		<div className='book-display-main'>
			<div className='book-display-info'>
				<div>
					{/*<img />*/}
				</div>

				<div>
					<span>Book Title</span>
					<span>Book Description Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.</span>
					
					<div>
						<span>Category</span>
						<span>
							<span> <IoIosEye /> </span>
							<span> 0 </span>
						</span>
					</div>

				{/* //@ts-ignore  */}
					<button onClick={download} disabled={downloading}> 
						{
							!downloading
							?
							<> <MdOutlineFileDownload /> <span className='button-text'> Download </span> </>
							:
							downloaded
							?
							<MdOutlineFileDownloadDone />
							:
							<div className='button-loader' />
						}
					</button>
				</div>
			</div>


			<div className='book-display-similar-category'>
				<div className='book-display-similar-category-hdr'>
					<span> Books in similar Category </span>

					<div className='book-display-arrows'>
						<span>{'<'}</span>
						<span>{'>'}</span>
					</div>
				</div>

				<div className='book-display-similar-category-cnt'>
					<div>
						{
							Array.from(Array(8)).map((_, i) => (
								<BookDisplayMainBooks key={'book' + i} id={`${i}`} title='---'  />
							))
						}
					</div>
				</div>
			</div>

		</div>
	)
}


// For now
// @ts-ignore
function BookDisplayReply ({ reply, author, approval, disapproval, date }: BookAnswerType) {
	return (
		<div className='book-display-reply'>

		</div>
	)
}

// For now
// @ts-ignore
function BookDisplayQuestion ({ questionTitle, questionDescription, approval, disapproval, author, date, repliesNo, replies }: BookQuestionType) {

	const [ showAnswer, setShowAnswer ] = useState<boolean>(false)

	function toggleAnswersVisibility () {
		setShowAnswer(!showAnswer)
	}

	return (
		<div className='book-display-question'>
			<div className='book-display-question-hdr'>
				<span> {questionTitle || 'How to use LibHub to study to learn and pass exams'} </span>

				<span> Added: {date || '----'} </span>
			</div>

			<div className='book-question-line' />

			<div className='book-display-question-cnt'>
				<div className='book-display-question-approval'>
					<span className='book-display-question-arrows'>▲</span>
					<span>0</span>
					<span className='book-display-question-arrows'>▼</span>
				</div>

				<div className='book-display-question-description'>
					{
						questionDescription || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Sed velit lectus, porttitor eu convallis sit amet, semper eget mauris. Integer in pulvinar mauris. Donec facilisis placerat magna sed cursus. Mauris vel tristique arcu. Duis congue orci id libero dictum sollicitudin. Curabitur dapibus arcu leo, condimentum tempus augue condimentum sed. Aliquam sed auctor ex. Nunc quis neque non eros dictum scelerisque ut ac urna.'
					}
				</div>
			</div>

			<div className='book-display-question-main'>	
					<div className='book-display-question-option'>
						<span>{repliesNo || 4} Answers</span>
						<span onClick={toggleAnswersVisibility}> {showAnswer ? 'Hide' : 'Show' } Answers </span>
					</div>

					{
						showAnswer
						?
						<div className='book-display-answer-list'>
							<span>a</span>
							<span>a</span>
							<span>a</span>
							<span>a</span>
							<span>a</span>
						</div>
						:
						<></>
					}

					<div className='answer-area'></div>
				</div>
		</div>
	)
}

function BookDisplayExtra () {

	const [ questionPopup, setQuestionPopup ] = useState<boolean>(false)

	function openPopup () {
		setQuestionPopup(true)
	}

	function closePopup () {
		setQuestionPopup(false)
	}

	return (
		<div className='book-display-extra'>


			<button onClick={openPopup}>Ask a Question</button>

			<div>
				<span>Q/A Section</span>

				<div className='book-display-arrows'>
					<span>{'<'}</span>
					<span>{'>'}</span>
				</div>
			</div>

			<div className='book-display-extra-cnt'>
				<div className='book-display-extra-cnt-questions'>
					{/* Returning just one Item using array index */}

					<BookDisplayQuestion questionTitle={''} questionDescription={''} approval={0} disapproval={0} author={''} date={''} repliesNo={8} />
				</div>
			</div>

			{
				questionPopup
				?
				<QuestionPopup closePopup={closePopup} />
				:
				<></>
			}

		</div>
	)
}

export function BookDisplay () {

	const params = useParams()
	const navigate = useNavigate()

	function goBack() {
		navigate(-1)
	}

	useEffect(() => {
		// fetch the file content through the params.id
		
		// console.log(params.id)

	}, [])

	return (
		<div className='book-display'>
			
			<div className='book-display-back' onClick={goBack}> {'<'} </div>

			<BookDisplayMain />
			
			<BookDisplayExtra />

		</div>
	)
}