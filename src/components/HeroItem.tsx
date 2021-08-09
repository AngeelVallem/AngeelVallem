import React from 'react'

import { Link } from 'react-router-dom'
import Image from './Image'

import '../styles/app.scss'

const HeroItem = (props: { src?: string, text?: string, className?: string, anchor?: boolean, url?: string, link?: boolean, to?: string, imgSize?: string }) => {

	const hasClass = !props.className ? '' : props.className
	const hasSize = !props.imgSize ? '30px' : props.imgSize


	if (props.link) {
		return (
			<Link  className='no-decoration' to={`${props.to}`}>
				<div className={`d-flex align-items-center ${hasClass} hero-i`}>
					<Image src={props.src} alt='avatar' size={hasSize} />
					<p className='p-0 m-0 mx-2'>{props.text}</p>
				</div>
			</Link>
		)
	}

	if (props.anchor) {
		return (
			<a href={props.url} className='no-decoration' rel="noopener noreferrer" target="_blank">
				<div className={`d-flex align-items-center ${hasClass} hero-i`}>
					<Image src={props.src} alt='avatar' size={hasSize} />
					<p className='p-0 m-0 mx-2'>{props.text}</p>
				</div>
			</a>
		)
	}

	return (
		<div className={`d-flex align-items-center ${hasClass} hero-i`}>
			<Image src={props.src} alt='avatar' size={hasSize} />
			<p className='p-0 m-0 mx-2'>{props.text}</p>
		</div>
	)
}



export default HeroItem;