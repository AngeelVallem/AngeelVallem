import React from "react"

import '../styles/burger/index.scss'
import Image from '../components/Image'
import open from '../assets/open.svg'
import close from '../assets/close.svg'
import BurgerItems from "./BurgerItems"

export default function BurgerMenu(props: { setIsOpen?: any, isOpen?: any, onOpen?: Function }) {

	const handleOpen = () => props.setIsOpen(!props.isOpen)

	if(props.isOpen){
		
		return <nav className='d-flex justify-content-end position-relative'>
			<Image src={close} onClick={handleOpen} className='burger'/>
			<BurgerItems/>
		</nav>	
	}
	return (
		<nav className='d-flex justify-content-end position-relative'>
			<Image src={open} onClick={handleOpen} className='burger'/>
		</nav>
	)
}