import {Link} from 'react-router-dom'
import { useLocation } from "react-router-dom"
import { isTablet } from "react-device-detect"
import Image from "./Image"
import cat from "../assets/cat.svg"
import cv from "../assets/cv.svg"
import fun from "../assets/fun.svg"

export default function Footer() {

const location = useLocation()

if(isTablet &&  location.pathname === '/about'){
	return (
		<footer className='mt-5 mb-2 d-flex justify-content-between align-items-center fixed-bottom px-5'>
		<Link to='/contact'> 	<button className='button'>Contact me <Image src={fun} size='20px' /></button></Link>
			<div>
				<Image src={cat} size='50px' className='mx-5' anchor url='https://github.com/AngeelVallem' hoverText={'Github'} />
				<Image src={cv} size='50px' anchor url='https://portfolio-angel-files.s3.us-east-2.amazonaws.com/CV.pdf' hoverText={'Resume'} />
			</div>
		</footer>
	)
}

	return (
		<footer className='mt-5 mb-2 d-flex justify-content-between align-items-center'>
			<Link to='/contact'> 	<button className='button'>Contact me <Image src={fun} size='20px' /></button></Link>
			<div>
				<Image src={cat} size='50px' className='mx-5' anchor url='https://github.com/AngeelVallem' hoverText={'Github'} />
				<Image src={cv} size='50px' anchor url='https://portfolio-angel-files.s3.us-east-2.amazonaws.com/CVeng.pdf' hoverText={'Resume'} />
			</div>
		</footer>
	)
}