import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import Image from './Image'
import fun from '../assets/fun.svg'

import '../styles/navbar/index.scss'

export default function Navbar() {
	const location = useLocation();

	function currentRouteR() {
		if (location.pathname === '/contact') {
			return 'about'
		} else {
			return 'contact'
		}
	}
	function currentRouteL() {
		if (location.pathname === '/apps') {
			return 'about'
		} else{
			return 'apps'
		}
	}

	return (
		<nav className='d-flex position-relative justify-content-center align-items-center mt-3'>
			<Link className='p-0 m-0 item' to={`/${currentRouteL()}`}>{currentRouteL()}</Link>
			<Image src={fun} size='3rem' link to='/' className='mx-3' />
			<Link className='p-0 m-0 item' to={`/${currentRouteR()}`}>{currentRouteR()}</Link>
		</nav>
	)
}