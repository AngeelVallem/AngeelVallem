
import {Link} from 'react-router-dom'
import Image from '../../components/Image'
import sended from '../../assets/email-send.gif'


import '../../styles/contact/sended.scss'

export default function Sended () {
	return(
		<section className='sended-container'>
			<div>
			<Image src={sended} size='20rem'/>
			<div className="d-flex flex-column">
			<h1 className='text-center'>Message received</h1>
			<small className='text-center'>I'll be in touch with you <small className='underline'>shortly</small></small>
			</div>
			<div className='d-flex justify-content-center my-5'><Link to='/' className='mx-auto'> <button className='button-home bg-white'>Back to Home</button></Link></div>
			</div>
		</section>
	)
}