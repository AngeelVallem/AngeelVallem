import React, { Fragment, useState } from "react"

import Image from "../../components/Image"
import HeroItem from "../../components/HeroItem"

import apps from "../../assets/apps.svg"
import gh from "../../assets/gh.svg"
import hi from "../../assets/sayHi.svg"
import fun from "../../assets/fun.svg"
import Navbar from "../../components/BugerMenu"

import '../../styles/hero/index.scss'

export default function Hero() {
	const [isOpen, setIsOpen] = useState<Boolean>(false)


	return (
		<Fragment>
			<Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
			<section className="hero-container">
				<Image src={fun} alt='avatar' size='20vw' />
				<a rel="noopener noreferrer" target="_blank" className="sub-text" href="https://www.linkedin.com/in/angel-valle-molina/">
					ANGEL VALLE
				</a>
				<div className='d-flex my-2'>
					<h3 className='mx-1'>FULL-STACK</h3>
					<h3 className='underline'>  DEVELOPER</h3>
				</div>
				<div className='d-flex my-4'>
					<HeroItem src={apps} text='Apps' className='hero-i' />
					<HeroItem src={gh} text='Code' className='hero-i' anchor url='https://github.com/AngeelVallem' />
					<HeroItem src={hi} text='Say hi' className='hero-i' />
				</div>
				<small className='text-muted text-center'>I make modern web and mobile applications</small>

			</section>
		</Fragment>
	)
}