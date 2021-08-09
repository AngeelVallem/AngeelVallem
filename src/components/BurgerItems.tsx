import React from 'react'

import '../styles/burger/items.scss'
import Image from './Image'
import fun from '../assets/fun.svg'

export default function BurgerItems ( ) {
	return (
		<nav className='d-flex position-relative'>
		<Image src={fun}/>
		</nav>	
	)
}