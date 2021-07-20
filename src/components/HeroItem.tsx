import React from 'react'
import Image from './Image'



const HeroItem = (props: { src?: string, text?: string, className?: string, anchor?: boolean, url?: string}) => {

	const hasClass = !props.className ? '' : props.className


	if (props.anchor) {
		return (
			<a href={props.url} className='no-decoration'>
			<div className={`d-flex align-items-center ${hasClass}`}>
				<Image src={props.src} alt='avatar' size='30px' />
				<p className='p-0 m-0 mx-2'>{props.text}</p>
			</div>
			</a>
		)
	}

	return (
		<div className={`d-flex align-items-center ${hasClass}`}>
			<Image src={props.src} alt='avatar' size='30px' />
			<p className='p-0 m-0 mx-2'>{props.text}</p>
		</div>
	)
}



export default HeroItem;