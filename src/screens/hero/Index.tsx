import React from "react"
import { Link } from 'react-router-dom'
import Image from "../../components/Image"
import HeroItem from "../../components/HeroItem"

import apps from "../../assets/apps.svg"
import gh from "../../assets/gh.svg"
import hi from "../../assets/sayHi.svg"
import fun from "../../assets/fun.svg"

import '../../styles/hero/index.scss'

export default function Hero() {


	return (
		<section className="hero-container justify-content-center ">
			<Image src={fun} alt='avatar' size='10rem' hoverText={'Hey!'} hover/>
			<div className="d-flex name-container">
				<a rel="noopener noreferrer" target="_blank" className="sub-text" href="https://www.linkedin.com/in/angel-valle-molina/">
					ANGEL VALLE
				</a>
				<Link className='about' to='about'>about me</Link>
			</div>
			<div className='d-flex my-2'>
				<h3 className='mx-1'>FULL-STACK</h3>
				<h3 className='underline'>  DEVELOPER</h3>
			</div>
			<div className='d-flex my-2'>
				<HeroItem src={apps} text='Apps' className='hero-i' link to='apps' />
				<HeroItem src={gh} text='Code' className='hero-i' anchor url='https://github.com/AngeelVallem' />
				<HeroItem src={hi} text='Contact' className='hero-i' link to='/contact' />
			</div>

		</section>

	)
}