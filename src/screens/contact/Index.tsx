import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import emailjs from 'emailjs-com'
import Image from '../../components/Image'

import '../../styles/contact/index.scss'


import emailsDown from '../../assets/down-mails.svg'


export default function Contact() {
	const [name, setName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [message, setMessage] = useState<string>('')
	const [isSend, setIsSend] = useState<boolean>(false)
	const [emailEmpty, setEmailEmpty] = useState<boolean>(false)
	const [nameEmpty, setNameEmpty] = useState<boolean>(false)
	const [messageEmpty, setMessageEmpty] = useState<boolean>(false)

	function sendEmail(e: any) {
		e.preventDefault()

		if (name === '' || email === '' || message === '') {
			return false
		}
		emailjs.send('service_rx55tu4', 'template_j63lvfe', { name, email, message }, 'user_u8e3TGWkiAlu9VAgciOPm')
			.then((response) => {
				setIsSend(true)
				setTimeout(() => {
					history.push('sended')

				}, 3000)
			}, (err) => {
				alert('FAILED...');
			});
	}

	const validateEmail = ((emailEmpty && email === '') ? 'invalid' : '')
	const validateName = ((nameEmpty && name === '') ? 'invalid' : '')
	const validateMessage = ((messageEmpty && message === '') ? 'invalid' : '')

	const history = useHistory()

	useEffect(() => {
		setIsSend(false)
		setEmailEmpty(false)
		setNameEmpty(false)
		setMessageEmpty(false)
	}, [])



	return (
		<section className="d-flex justify-content-center align-items-center contact-container flex-column flex-md-row">
			{/* <div className='thanks d-none d-md-flex'> <h1 className='w-100'>Thanks for<small className='underline m-0 p-0'>taking</small> the time to reach out.</h1> </div> */}
			<Image src={emailsDown} className='emails-down d-none d-lg-flex' size='15rem' />
			<div className='container-form'>
				<form className='form-control form-container formi' onSubmit={sendEmail}>
					<h1 className='text-center lineline'>CONTACT ME</h1>
					<div className="form-group">
						<label className='h-input'>Name</label>
						<input type="text" className={`form-control focus-inputs ${validateName}`} value={name} onChange={(e: any) => setName(e.target.value)} onFocus={() => setNameEmpty(true)} />
					</div>
					<div className="form-group my-3">
						<label className='h-input'>Email</label>
						<input type="email" className={`form-control focus-inputs ${validateEmail}`} aria-describedby="emailHelp" value={email} onChange={(e: any) => setEmail(e.target.value)} onFocus={() => setEmailEmpty(true)} />
					</div>

					<div className="form-group">
						<label className='h-input'>Message</label>
						<textarea className={`form-control focus-inputs ${validateMessage}`} rows={3} value={message} onChange={(e: any) => setMessage(e.target.value)} onFocus={() => setMessageEmpty(true)}></textarea>
					</div>
					<div className="d-flex justify-content-center mt-3">
						<button className='bg-white button-form w-100'>{!isSend ? 'Submit' : <div className="spinner-border" role="status">

						</div>}</button>
					</div>

					<h1 className='text-center my-3'>or</h1>
					<hr />
					<div className='text-center d-flex flex-column'>
						<a href="mailto:angeelvallem@gmail.com" className='email'>angeelvallem@gmail.com</a>
						<a href="https://www.linkedin.com/in/angel-valle-molina/" className='email my-2'>LinkedIn</a>
					</div>
					<hr />
				</form>

			</div>
		</section>

	)
}