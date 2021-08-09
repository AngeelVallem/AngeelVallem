import React from 'react'


import Image from './Image'
import HeroItem from './HeroItem'

import gh from '../assets/gh.svg'
import details from '../assets/details.svg'
import page from '../assets/page.svg'

export default function WorkCard(props: { src: string, open?: boolean, ghUrl?: string, to?: string, appUrl?: string, title: string, type?: string }) {


	if (props.type === 'Mobile') {
		return (
			<div className="col-8 col-md-12 my-4 col-xl-6 mx-auto mx-lg-0">
				<div className="d-flex">
					<Image src={props.src} card to={props.to} />
					<div className="d-md-flex align-items-center justify-content-center flex-column  info-card d-none">
						<a rel="noopener noreferrer" target="_blank" className="sub-text text-center" href={props.appUrl}>
							{props.title}
						</a>
						<small>Open source</small>
						<small className='underline'>Mobile application</small>
						<div className='d-flex my-1'>
							<HeroItem src={gh} text='Code' className='hero-i' anchor url={props.ghUrl} />
							<HeroItem src={details} text='Details' className='hero-i' link to={props.to} />
						</div>
					</div>
				</div>
			</div>
		)
	}



	if (!props.open) {
		return (
			<div className="col-8 col-md-12  col-xl-6 my-4 mx-auto mx-lg-0">
				<div className="d-flex">
					<Image src={props.src} card to={props.to} />
					<div className="d-md-flex align-items-center justify-content-center flex-column  info-card d-none">
						<a rel="noopener noreferrer" target="_blank" className="sub-text text-center" href={props.appUrl}>
							{props.title}
						</a>
						<small>Private page</small>
						<div className='d-flex my-1'>
							<HeroItem src={gh} text='Code' className='hero-i' anchor url={props.ghUrl} />
							<HeroItem src={details} text='Details' className='hero-i' link to={props.to} />
						</div>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="col-8 col-md-12 my-4 col-xl-6 mx-auto mx-lg-0">
			<div className="d-flex">
				<Image src={props.src} card to={props.to} />
				<div className="d-md-flex align-items-center justify-content-center flex-column  info-card d-none">
					<a rel="noopener noreferrer" target="_blank" className="sub-text text-center" href={props.appUrl}>
						{props.title}
					</a>
					<small>Open source</small>
					<small className='underline'>Web application</small>
					<div className='d-flex my-1'>
						<HeroItem src={gh} text='Code' className='hero-i' anchor url={props.ghUrl} />
						<HeroItem src={details} text='Details' className='hero-i' link to={props.to} />
						<HeroItem src={page} text='Page' className='hero-i' anchor url={props.appUrl} />
					</div>
				</div>
			</div>
		</div>
	)
}